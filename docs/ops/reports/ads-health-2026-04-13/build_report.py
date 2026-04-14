"""
Build the Kelly's Appliance Center Marketing Performance Report PDF
from the 5 markdown section files.
"""

import re
import os
from datetime import datetime
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    HRFlowable, KeepTogether, Image, ListFlowable, ListItem
)
from reportlab.pdfgen import canvas

# Kelly's brand colors
KELLY_GREEN = HexColor('#16a34a')
KELLY_GREEN_DARK = HexColor('#15803d')
KELLY_GREEN_LIGHT = HexColor('#dcfce7')
KELLY_GRAY = HexColor('#4b5563')
KELLY_GRAY_LIGHT = HexColor('#f3f4f6')
KELLY_BLACK = HexColor('#111827')

REPORT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(REPORT_DIR, 'kellys-marketing-report-2026-04-13.pdf')

SECTION_FILES = [
    ('00-executive-summary.md', 'Executive Summary'),
    ('01-google-ads-search.md', 'Google Ads Search Campaign'),
    ('02-google-lsa.md', 'Google Local Services Ads'),
    ('03-search-console.md', 'Search Console: Organic Site Reach & Health'),
    ('04-recommendations.md', 'Recommendations & Action Plan'),
]


def make_styles():
    """Create custom paragraph styles."""
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='CoverTitle',
        parent=styles['Title'],
        fontSize=28,
        textColor=white,
        alignment=TA_CENTER,
        spaceAfter=20,
        leading=34,
    ))
    styles.add(ParagraphStyle(
        name='CoverSubtitle',
        parent=styles['Normal'],
        fontSize=16,
        textColor=white,
        alignment=TA_CENTER,
        spaceAfter=10,
        leading=20,
    ))
    styles.add(ParagraphStyle(
        name='CoverMeta',
        parent=styles['Normal'],
        fontSize=11,
        textColor=HexColor('#dcfce7'),
        alignment=TA_CENTER,
        spaceAfter=5,
    ))
    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading1'],
        fontSize=22,
        textColor=KELLY_GREEN,
        spaceBefore=0,
        spaceAfter=16,
        leading=28,
        borderPadding=0,
    ))
    styles.add(ParagraphStyle(
        name='SubsectionTitle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=KELLY_GREEN_DARK,
        spaceBefore=14,
        spaceAfter=8,
        leading=20,
    ))
    styles.add(ParagraphStyle(
        name='SubSubsectionTitle',
        parent=styles['Heading3'],
        fontSize=13,
        textColor=KELLY_GRAY,
        spaceBefore=10,
        spaceAfter=6,
        leading=16,
        fontName='Helvetica-Bold',
    ))
    styles.add(ParagraphStyle(
        name='Body',
        parent=styles['Normal'],
        fontSize=10,
        textColor=KELLY_BLACK,
        leading=14,
        spaceAfter=6,
        alignment=TA_LEFT,
    ))
    styles.add(ParagraphStyle(
        name='BulletBody',
        parent=styles['Normal'],
        fontSize=10,
        textColor=KELLY_BLACK,
        leading=14,
        leftIndent=16,
        bulletIndent=4,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name='TOCEntry',
        parent=styles['Normal'],
        fontSize=12,
        textColor=KELLY_BLACK,
        leading=20,
        spaceAfter=6,
    ))
    return styles


def inline_format(text):
    """Convert inline markdown to reportlab HTML-like markup."""
    # Escape ampersands first (but not those already in entities)
    text = re.sub(r'&(?![a-zA-Z]+;|#[0-9]+;)', '&amp;', text)
    # Escape < and > for non-tag characters
    text = text.replace('<', '&lt;').replace('>', '&gt;')
    # Bold: **text** -> <b>text</b>
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    # Italic: *text* -> <i>text</i> (but not inside bold)
    text = re.sub(r'(?<!\*)\*([^\*]+?)\*(?!\*)', r'<i>\1</i>', text)
    # Code: `text` -> monospace
    text = re.sub(r'`([^`]+)`', r'<font name="Courier" color="#15803d">\1</font>', text)
    # Links: [text](url) -> just keep text
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<u>\1</u>', text)
    # Emoji replacement (reportlab built-in fonts don't support emoji, replace with text)
    emoji_map = {
        '🔴': '[P0]', '🟡': '[P1]', '🟢': '[P2]', '🔵': '[P3]',
        '⚪': '[--]', '⚡': '[!]', '✅': '[x]', '❌': '[ ]',
        '⏳': '[...]', '📊': '', '📋': '', '🚨': '[!!!]',
        '🎉': '', '🔥': '', '→': '->', '↑': 'up', '↓': 'down',
    }
    for emoji, repl in emoji_map.items():
        text = text.replace(emoji, repl)
    # Remaining emoji/unicode chars that aren't in standard fonts
    text = re.sub(r'[\U0001F000-\U0001FFFF\U00002600-\U000027BF]', '', text)
    return text


def parse_table(lines, start_idx):
    """Parse a markdown table starting at start_idx. Returns (table_data, next_idx)."""
    rows = []
    idx = start_idx
    while idx < len(lines) and lines[idx].strip().startswith('|'):
        line = lines[idx].strip()
        # Skip the separator line (|---|---|)
        if re.match(r'^\|[\s\-:|]+\|?\s*$', line):
            idx += 1
            continue
        # Parse cells
        cells = [c.strip() for c in line.split('|')[1:-1]]
        if cells:
            rows.append(cells)
        idx += 1
    return rows, idx


def make_table_flowable(table_data, styles):
    """Convert parsed table data to a reportlab Table."""
    if not table_data:
        return None

    # Format all cells with inline formatting
    formatted_rows = []
    for i, row in enumerate(table_data):
        formatted_row = []
        for cell in row:
            style = styles['Body']
            if i == 0:
                # Header row
                style = ParagraphStyle(
                    'TableHeader',
                    parent=styles['Body'],
                    fontName='Helvetica-Bold',
                    textColor=white,
                    fontSize=9,
                    alignment=TA_LEFT,
                )
            else:
                style = ParagraphStyle(
                    'TableCell',
                    parent=styles['Body'],
                    fontSize=9,
                    leading=11,
                )
            formatted_row.append(Paragraph(inline_format(cell), style))
        formatted_rows.append(formatted_row)

    # Calculate column widths - distribute evenly
    num_cols = len(formatted_rows[0]) if formatted_rows else 1
    available_width = 6.5 * inch
    col_widths = [available_width / num_cols] * num_cols

    tbl = Table(formatted_rows, colWidths=col_widths, repeatRows=1)
    tbl.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), KELLY_GREEN),
        ('TEXTCOLOR', (0, 0), (-1, 0), white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 0), (-1, 0), 8),
        ('BACKGROUND', (0, 1), (-1, -1), white),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [white, KELLY_GRAY_LIGHT]),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 1), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 5),
        ('LINEBELOW', (0, 0), (-1, 0), 1, KELLY_GREEN_DARK),
        ('LINEBELOW', (0, -1), (-1, -1), 0.5, KELLY_GRAY),
        ('BOX', (0, 0), (-1, -1), 0.5, KELLY_GRAY),
    ]))
    return tbl


def parse_markdown_to_flowables(md_content, styles, is_first_section=False):
    """Parse markdown content into reportlab flowables."""
    flowables = []
    lines = md_content.split('\n')
    i = 0
    in_code_block = False
    code_buffer = []

    # Skip the H1 at the start of each section file (we'll use the section title from the file list)
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Handle code blocks
        if stripped.startswith('```'):
            if in_code_block:
                # End of code block
                code_text = '\n'.join(code_buffer)
                code_style = ParagraphStyle(
                    'Code',
                    parent=styles['Body'],
                    fontName='Courier',
                    fontSize=8,
                    textColor=KELLY_BLACK,
                    backColor=KELLY_GRAY_LIGHT,
                    leftIndent=12,
                    borderPadding=8,
                    leading=10,
                )
                # Escape HTML chars in code
                code_text_esc = code_text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                code_text_esc = code_text_esc.replace('\n', '<br/>')
                flowables.append(Paragraph(code_text_esc, code_style))
                flowables.append(Spacer(1, 8))
                code_buffer = []
                in_code_block = False
            else:
                in_code_block = True
            i += 1
            continue

        if in_code_block:
            code_buffer.append(line)
            i += 1
            continue

        # Skip empty lines
        if not stripped:
            i += 1
            continue

        # H1 - Section title (skip - handled by section header)
        if stripped.startswith('# '):
            i += 1
            continue

        # H2
        if stripped.startswith('## '):
            text = stripped[3:].strip()
            flowables.append(Paragraph(inline_format(text), styles['SubsectionTitle']))
            flowables.append(HRFlowable(width='100%', thickness=0.5, color=KELLY_GREEN_LIGHT, spaceBefore=2, spaceAfter=4))
            i += 1
            continue

        # H3
        if stripped.startswith('### '):
            text = stripped[4:].strip()
            flowables.append(Paragraph(inline_format(text), styles['SubSubsectionTitle']))
            i += 1
            continue

        # H4
        if stripped.startswith('#### '):
            text = stripped[5:].strip()
            style = ParagraphStyle('H4', parent=styles['Body'], fontName='Helvetica-Bold', fontSize=11, textColor=KELLY_GRAY, spaceBefore=6, spaceAfter=4)
            flowables.append(Paragraph(inline_format(text), style))
            i += 1
            continue

        # Horizontal rule
        if stripped in ('---', '***', '___'):
            flowables.append(Spacer(1, 4))
            flowables.append(HRFlowable(width='100%', thickness=1, color=KELLY_GRAY_LIGHT, spaceBefore=2, spaceAfter=6))
            i += 1
            continue

        # Table
        if stripped.startswith('|') and '|' in stripped[1:]:
            table_data, next_i = parse_table(lines, i)
            tbl = make_table_flowable(table_data, styles)
            if tbl:
                flowables.append(Spacer(1, 4))
                flowables.append(tbl)
                flowables.append(Spacer(1, 10))
            i = next_i
            continue

        # Bullet list
        if stripped.startswith(('- ', '* ', '+ ')):
            bullet_items = []
            while i < len(lines):
                s = lines[i].strip()
                if s.startswith(('- ', '* ', '+ ')):
                    item_text = s[2:]
                    # Handle checkboxes
                    if item_text.startswith('[ ] '):
                        item_text = '[  ] ' + item_text[4:]
                    elif item_text.startswith('[x] ') or item_text.startswith('[X] '):
                        item_text = '[x] ' + item_text[4:]
                    bullet_items.append(Paragraph(inline_format(item_text), styles['BulletBody'], bulletText='•'))
                    i += 1
                elif s == '':
                    i += 1
                    break
                else:
                    break
            if bullet_items:
                for item in bullet_items:
                    flowables.append(item)
                flowables.append(Spacer(1, 4))
            continue

        # Numbered list
        if re.match(r'^\d+\. ', stripped):
            num_items = []
            while i < len(lines):
                s = lines[i].strip()
                m = re.match(r'^(\d+)\. (.+)$', s)
                if m:
                    num_items.append(Paragraph(inline_format(m.group(2)), styles['BulletBody'], bulletText=f'{m.group(1)}.'))
                    i += 1
                elif s == '':
                    i += 1
                    break
                else:
                    break
            if num_items:
                for item in num_items:
                    flowables.append(item)
                flowables.append(Spacer(1, 4))
            continue

        # Blockquote
        if stripped.startswith('> '):
            quote_text = stripped[2:]
            quote_style = ParagraphStyle(
                'Quote',
                parent=styles['Body'],
                leftIndent=16,
                borderColor=KELLY_GREEN,
                borderPadding=8,
                textColor=KELLY_GRAY,
                fontName='Helvetica-Oblique',
            )
            flowables.append(Paragraph(inline_format(quote_text), quote_style))
            i += 1
            continue

        # Regular paragraph
        para_lines = [stripped]
        i += 1
        while i < len(lines):
            next_line = lines[i].strip()
            if not next_line:
                break
            if next_line.startswith(('#', '-', '*', '+', '>', '|', '```')) or re.match(r'^\d+\. ', next_line):
                break
            para_lines.append(next_line)
            i += 1

        para_text = ' '.join(para_lines)
        flowables.append(Paragraph(inline_format(para_text), styles['Body']))

    return flowables


def cover_page(styles):
    """Build the cover page."""
    flowables = []
    flowables.append(Spacer(1, 1.5 * inch))
    flowables.append(Paragraph("Kelly's Appliance Center", styles['CoverTitle']))
    flowables.append(Spacer(1, 0.2 * inch))
    flowables.append(Paragraph("Marketing Performance Report", styles['CoverSubtitle']))
    flowables.append(Spacer(1, 1.5 * inch))
    flowables.append(Paragraph("March 14 – April 13, 2026", styles['CoverMeta']))
    flowables.append(Spacer(1, 0.1 * inch))
    flowables.append(Paragraph("30-Day Review", styles['CoverMeta']))
    flowables.append(Spacer(1, 2 * inch))
    flowables.append(Paragraph("Prepared by Ideas Realized", styles['CoverMeta']))
    flowables.append(Paragraph("shane@ideas-realized.com", styles['CoverMeta']))
    flowables.append(Spacer(1, 0.3 * inch))
    flowables.append(Paragraph("Serving Sonoma, Marin &amp; Napa Counties since 1975", styles['CoverMeta']))
    flowables.append(PageBreak())
    return flowables


def toc_page(styles):
    """Build the table of contents page."""
    flowables = []
    flowables.append(Paragraph("Table of Contents", styles['SectionTitle']))
    flowables.append(HRFlowable(width='100%', thickness=2, color=KELLY_GREEN, spaceAfter=16))

    toc_items = [
        ('Executive Summary', '3'),
        ('1. Google Ads Search Campaign', '5'),
        ('2. Google Local Services Ads (LSA)', '9'),
        ('3. Search Console: Organic Site Reach &amp; Health', '13'),
        ('4. Recommendations &amp; Action Plan', '17'),
    ]

    for title, page in toc_items:
        tbl = Table([[Paragraph(f"<b>{title}</b>", styles['TOCEntry']), Paragraph(f"<para align='right'>{page}</para>", styles['TOCEntry'])]],
                    colWidths=[5.5 * inch, 1 * inch])
        tbl.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LINEBELOW', (0, 0), (-1, 0), 0.5, KELLY_GRAY_LIGHT),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
            ('TOPPADDING', (0, 0), (-1, -1), 8),
        ]))
        flowables.append(tbl)

    flowables.append(Spacer(1, 0.5 * inch))
    intro_style = ParagraphStyle('TOCIntro', parent=styles['Body'], fontSize=10, textColor=KELLY_GRAY, spaceAfter=8)
    flowables.append(Paragraph(
        "This report provides a 30-day review of Kelly's Appliance Center's paid advertising and organic search performance, with matched revenue attribution from the ServiceDesk CRM and actionable recommendations.",
        intro_style
    ))
    flowables.append(PageBreak())
    return flowables


def header_footer(canvas, doc):
    """Draw header and footer on every page (except cover)."""
    canvas.saveState()

    page_num = canvas.getPageNumber()

    # Skip header/footer on cover page (page 1)
    if page_num == 1:
        canvas.restoreState()
        return

    # Header - thin green line
    canvas.setStrokeColor(KELLY_GREEN)
    canvas.setLineWidth(2)
    canvas.line(0.75 * inch, 10.5 * inch, 7.75 * inch, 10.5 * inch)

    # Header text
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(KELLY_GRAY)
    canvas.drawString(0.75 * inch, 10.6 * inch, "Kelly's Appliance Center")
    canvas.drawRightString(7.75 * inch, 10.6 * inch, "Marketing Performance Report | April 13, 2026")

    # Footer
    canvas.setStrokeColor(KELLY_GRAY_LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(0.75 * inch, 0.55 * inch, 7.75 * inch, 0.55 * inch)

    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(KELLY_GRAY)
    canvas.drawString(0.75 * inch, 0.35 * inch, "Kelly's Appliance Center — Prepared by Ideas Realized")
    canvas.drawRightString(7.75 * inch, 0.35 * inch, f"Page {page_num}")

    canvas.restoreState()


def cover_page_decoration(canvas, doc):
    """Draw green background on the cover page only."""
    canvas.saveState()
    if canvas.getPageNumber() == 1:
        # Full green background
        canvas.setFillColor(KELLY_GREEN)
        canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)

        # Darker accent at bottom
        canvas.setFillColor(KELLY_GREEN_DARK)
        canvas.rect(0, 0, letter[0], 2 * inch, fill=1, stroke=0)

        # Subtle pattern or logo area (centered circle)
        canvas.setFillColor(white)
        canvas.setStrokeColor(white)
        canvas.setLineWidth(2)
        # We'll just leave it clean since we don't have a logo file
    canvas.restoreState()


def on_page(canvas, doc):
    """Combined page handler."""
    cover_page_decoration(canvas, doc)
    header_footer(canvas, doc)


def main():
    print(f"Building PDF: {OUTPUT_PDF}")
    styles = make_styles()

    # Read all section files
    all_flowables = []

    # Cover page
    all_flowables.extend(cover_page(styles))

    # Table of contents
    all_flowables.extend(toc_page(styles))

    # Sections
    for idx, (filename, section_title) in enumerate(SECTION_FILES):
        filepath = os.path.join(REPORT_DIR, filename)
        if not os.path.exists(filepath):
            print(f"WARN: {filepath} not found, skipping")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        print(f"Processing {filename}...")

        # Section header
        all_flowables.append(Paragraph(section_title, styles['SectionTitle']))
        all_flowables.append(HRFlowable(width='100%', thickness=2, color=KELLY_GREEN, spaceAfter=12))

        # Parse and add content
        section_flowables = parse_markdown_to_flowables(content, styles)
        all_flowables.extend(section_flowables)

        # Page break between sections (not after last)
        if idx < len(SECTION_FILES) - 1:
            all_flowables.append(PageBreak())

    # Build the PDF
    doc = SimpleDocTemplate(
        OUTPUT_PDF,
        pagesize=letter,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        topMargin=0.85 * inch,
        bottomMargin=0.75 * inch,
        title="Kelly's Appliance Center — Marketing Performance Report",
        author="Ideas Realized",
        subject="30-Day Marketing Performance Review",
    )

    doc.build(all_flowables, onFirstPage=on_page, onLaterPages=on_page)

    size_kb = os.path.getsize(OUTPUT_PDF) / 1024
    print(f"SUCCESS: {OUTPUT_PDF} ({size_kb:.1f} KB)")


if __name__ == '__main__':
    main()
