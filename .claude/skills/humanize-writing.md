---
name: humanize-writing
description: Strip AI-generated patterns from any text output to make it read like a real human wrote it. Use when writing social media posts, community introductions, casual messages, bios, replies, or any content where sounding human is critical. Applies to all platforms and contexts. Triggers on phrases like "make this sound human", "rewrite naturally", "humanize this", or whenever Claude is producing text that will be published under someone's name. This skill should be consulted as a layer on top of platform-specific skills (LinkedIn, X, etc.) or used standalone for general humanized writing.
---

# Humanized Text Skill

Make every piece of written output sound like a real person typed it. Not a person trying to sound smart. Not a person performing professionalism. Just a person talking.

This skill is a **universal filter** that applies across all content types: social posts, community intros, emails, bios, casual messages, forum replies, Slack messages, and general writing. It works standalone or as a layer on top of platform-specific skills.

---

## The Core Problem

Large language models have predictable writing fingerprints. People can spot AI-generated text because it leans on the same structural crutches, filler phrases, and formatting habits across every output. The goal of this skill is to systematically identify and eliminate these patterns so the final text reads like it came from a human with a keyboard and an opinion.

---

## Banned Patterns: The AI Tells

These are the most common giveaways that text was AI-generated. Every single one must be caught and eliminated before output.

### 1. Em Dashes and En Dashes
AI models overuse em dashes as a universal connector. Real humans rarely use them in casual writing. They show up in AI text 5-10x more frequently than in natural human writing.

**Rule**: Never use em dashes or en dashes. Replace with periods, commas, colons, parentheses, or just restructure the sentence.

| AI Pattern | Human Alternative |
|-----------|------------------|
| "The tool is powerful — and free" | "The tool is powerful. And it's free." |
| "I built three apps — all in one week" | "I built three apps, all in one week." |
| "This changes everything — seriously" | "This changes everything. Seriously." |

### 2. Emoji Overload
AI tends to sprinkle emojis like seasoning on every dish. Real people use emojis with intention, not decoration.

**Rules**:
- Maximum 2-3 emojis per post/message unless the platform culture demands more
- Never use emojis as bullet points or list markers
- Never stack multiple emojis in a row
- Never open AND close with emojis
- One emoji at the end of a thought is fine. Emojis mid-sentence usually feel forced.
- When in doubt, zero emojis is better than too many
- The rocket emoji is the single most AI-flagged emoji in existence. Use it sparingly or not at all.

### 3. Hashtag Stuffing
AI generates hashtags like it's optimizing for a 2018 Instagram algorithm. Most platforms have moved away from heavy hashtag use, and stacking 5+ hashtags screams automated content.

**Rules**:
- LinkedIn: 3 max. Match them to actual content.
- X/Twitter: 0-2. Many top posts use zero.
- Facebook groups/communities: 0-1. Hashtags feel weird in community posts.
- General writing: Zero. Hashtags don't belong in emails, bios, or messages.
- Never create vanity hashtags unless the user has an established branded tag.

### 4. Banned Phrases: The AI Vocabulary

#### Tier 1: Hard Ban (Never use these)

| Phrase | Why It's Flagged |
|--------|-----------------|
| "I'm thrilled to..." | Nobody is ever thrilled in writing. |
| "I'm excited to share..." | The most AI-generated opener in existence. |
| "In today's rapidly evolving landscape..." | Meaningless filler. |
| "Let's dive in" / "Let's dive deep" | AI's favorite transition. |
| "Without further ado" | Nobody has said this naturally since 2004. |
| "It's worth noting that..." | Just note it. |
| "At the end of the day..." | Overused to invisibility. |
| "Game-changer" / "Game-changing" | Lost all meaning. |
| "Leverage" (as a verb) | Corporate jargon. Say "use." |
| "Utilize" | Just say "use." Always. |
| "Synergy" / "Synergize" | Immediate corporate AI flag. |
| "Ecosystem" (metaphorical) | Unless talking about actual biology. |
| "Paradigm shift" | Nobody says this in conversation. |
| "Let's unpack this" | AI's second favorite transition. |
| "Food for thought" | AI's favorite sign-off. |
| "Here's the thing..." | Overused AI opener. |
| "Navigating the complexities of..." | Say what the complexity actually is. |
| "This resonates" | LinkedIn AI-comment classic. |
| "Couldn't agree more" | Another AI-comment staple. |
| "Invaluable" | AI loves this word. Say "really useful" or "essential." |
| "Straightforward" | Statistically overrepresented in AI text. |
| "Genuinely" | AI uses it to perform sincerity. |
| "Honestly" (as emphasis) | Same pattern. |
| "Crucial" | Say "important" or "critical" or just show why it matters. |
| "Foster" (as in "foster collaboration") | Corporate AI verb. |
| "Delve" / "Delve into" | The single most documented AI-tell word. |
| "Elevate" | AI loves to elevate things. Humans just make things better. |
| "Streamline" | Fine in technical docs, flagged everywhere else. |
| "Robust" | One of the most overused AI adjectives. |
| "Cutting-edge" | Say "new" or be specific. |
| "Harness" (as in "harness the power") | AI drama. Just say "use." |
| "Embark on a journey" | Nobody embarks. They start. |
| "A testament to..." | Just say it's good. |
| "Landscape" (metaphorical) | Be specific. |
| "Realm" | "In the realm of..." Just say the topic. |
| "Tapestry" (metaphorical) | No. |
| "Beacon" (metaphorical) | No. |
| "Cornerstone" | Humans don't talk like this. |

#### Tier 2: Caution (Acceptable occasionally, but watch frequency)

| Phrase | When It's OK |
|--------|-------------|
| "Passionate about" | Once in a bio is fine. Twice is too much. |
| "At scale" | Fine in technical contexts. |
| "Double down" | OK if used once. |
| "The reality is..." | OK occasionally. |
| "In my experience..." | Fine once per piece. |
| "To be honest..." | Sparingly. |
| "When it comes to..." | Once per piece max. |

### 5. Structural AI Patterns

#### The Triple Pattern
AI loves groups of three. Real writing varies its rhythm.
**Rule**: Vary your groupings. Sometimes two. Sometimes four. Sometimes one example that lands harder than three.

#### The Sandwich Structure
AI opens with a warm statement, delivers content, then closes with an almost identical warm statement.
**Rule**: Don't bookend with pleasantries. Open with substance. Close with substance or a clear next step.

#### Parallel Construction Overuse
AI builds lists where every item follows the exact same grammatical structure.

| AI Pattern | Human Alternative |
|-----------|------------------|
| "Building apps. Shipping features. Solving problems." | "I build apps, ship fast, and figure out problems as they come." |
| "It's fast. It's reliable. It's free." | "It's fast, reliable, and somehow free." |

#### The Qualifier Stack
AI hedges by stacking qualifiers.
**Rule**: Pick a stance. State it. Soften ONE time if needed. Don't stack qualifiers.

#### Over-Structured Formatting
AI defaults to headers, numbered lists, and bullet points even when a paragraph would work better.
**Rule**: Default to prose. Use formatting only when the content genuinely requires it.

---

## The Human Feel Checklist

Before outputting any text, run it through these checks:

### Voice Tests
- Read it out loud. Does it sound like someone talking, or like a document?
- Could you imagine this person actually typing this on their phone?
- Are there contractions? (I'm, don't, can't, we're, it's, that's, isn't, won't)
- Does sentence length vary?
- Is there at least one moment of personality, humor, or informality?

### Red Flag Scan
- Zero em dashes
- No banned Tier 1 phrases
- Emoji count within limits (usually 0-3)
- No hashtag stuffing
- No triple-parallel constructions
- No qualifier stacking
- No sandwich structure
- No over-formatted structure where prose would work
- Doesn't start with "I'm excited/thrilled"
- Doesn't end with "Let me know if you have questions!"

### Authenticity Tests
- Does this sound like the specific person writing it, or like Generic Professional?
- Are the details specific enough to be real?
- Is there anything in here that only this person would say?

---

## Rewriting AI Text: The Process

### Step 1: Strip
Remove all banned phrases, em dashes, excess emojis, and hashtag stuffing. Cut filler sentences.

### Step 2: Restructure
Break parallel constructions. Vary sentence length. Convert bullet points to prose if the context calls for it.

### Step 3: Inject Humanity
Add contractions. Introduce one moment of personality. Make at least one detail more specific. Cut one thing that feels too polished.

### Step 4: Read-Aloud Test
Read the final version as if you're saying it to someone. If any sentence feels unnatural, rewrite it.

### Step 5: Final Scan
Run the Human Feel Checklist. Fix any remaining flags.

---

## Common Rewrites Reference

| AI Version | Humanized Version |
|-----------|------------------|
| "I'm thrilled to be joining this amazing community!" | "Hey everyone, happy to be here." |
| "Don't hesitate to reach out if you need anything!" | "Happy to help if you ever need a hand." |
| "I'm passionate about leveraging AI to drive innovation" | "I spend most of my time building with AI tools" |
| "This is a game-changer for the industry" | "This actually changes how the workflow runs" |
| "Let's dive deep into the details" | "Here's how it works:" |
| "In today's rapidly evolving AI landscape" | "AI is moving fast right now" |
| "I'm excited to share my journey" | "Here's what I've been working on" |
| "Feel free to connect! Always happy to chat!" | "Feel free to connect." |

---

## The Golden Rule

If you removed the person's name and profile picture, could someone tell this was written by AI?

If yes, rewrite it.

The best humanized text doesn't feel "humanized." It just feels like a person wrote it. No one should ever notice the effort.

---

## Pre-Flight Checklist (Quick Version)

1. **Em dashes?** Remove all of them.
2. **Banned phrases?** Ctrl+F for Tier 1 list. Remove and replace.
3. **Emoji count?** Under 3 for most contexts. Under 1 for professional.
4. **Hashtags?** Match platform limits. When in doubt, fewer.
5. **Starts with "I'm excited/thrilled"?** Rewrite the opener.
6. **Ends with "Don't hesitate to reach out"?** Rewrite the closer.
7. **Triple parallel construction?** Break the pattern.
8. **Over-formatted?** Convert to prose if context allows.
9. **Read-aloud test?** Does it sound like talking?
10. **Personality check?** Is there at least one line only this person would write?
