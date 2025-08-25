import { promises as fs } from 'fs';
import path from 'path';
import { WordPressPage, WordPressPost, ServicePage, LocationPage, CompanyInfo } from '@/types/content';

const contentDir = path.join(process.cwd(), 'content');

export async function getAllPages(): Promise<WordPressPage[]> {
  const pagesDir = path.join(contentDir, 'pages');
  const files = await fs.readdir(pagesDir);
  
  const pages = await Promise.all(
    files
      .filter(file => file.endsWith('.json'))
      .map(async file => {
        const content = await fs.readFile(path.join(pagesDir, file), 'utf8');
        return JSON.parse(content) as WordPressPage;
      })
  );
  
  return pages.filter(page => page.status === 'publish');
}

export async function getAllPosts(): Promise<WordPressPost[]> {
  const postsDir = path.join(contentDir, 'posts');
  const files = await fs.readdir(postsDir);
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.json'))
      .map(async file => {
        const content = await fs.readFile(path.join(postsDir, file), 'utf8');
        return JSON.parse(content) as WordPressPost;
      })
  );
  
  return posts
    .filter(post => post.status === 'publish')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  const pages = await getAllPages();
  return pages.find(page => page.slug === slug) || null;
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getServicePages(): Promise<ServicePage[]> {
  const pages = await getAllPages();
  
  const servicePages = pages.filter(page => 
    page.slug === 'refrigerator-repair' ||
    page.slug === 'range-oven-repair' ||
    page.slug === 'washer-dryer-repair' ||
    page.slug === 'dishwasher-repair'
  );
  
  return servicePages.map(page => ({
    title: page.title,
    slug: page.slug,
    description: page.yoast_head_json?.description || '',
    content: page.content,
    seo: {
      title: page.yoast_head_json?.title || page.title,
      description: page.yoast_head_json?.description || ''
    }
  }));
}

export async function getLocationPages(): Promise<LocationPage[]> {
  const pages = await getAllPages();
  
  const locationPages = pages.filter(page => 
    page.slug.includes('appliance-repair-') &&
    !page.slug.includes('authorized-service')
  );
  
  return locationPages.map(page => ({
    title: page.title,
    slug: page.slug,
    city: page.title.replace('Appliance Repair ', ''),
    content: page.content,
    seo: {
      title: page.yoast_head_json?.title || page.title,
      description: page.yoast_head_json?.description || ''
    }
  }));
}

export function getCompanyInfo(): CompanyInfo {
  return {
    name: "Kelly's Appliance Center",
    phone: "(707) 664-9702",
    address: {
      street: "466 Primero Ct. Suite H",
      city: "Cotati",
      state: "CA",
      zip: "94931"
    },
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    email: "info@kellysappliancerepair.com",
    certifications: [
      "Factory Authorized Service",
      "Rohnert Park Chamber of Commerce",
      "Windsor Chamber of Commerce", 
      "Novato Chamber of Commerce"
    ],
    yearsInBusiness: 50,
    guarantee: "90 Day Money Back Guarantee"
  };
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getExcerpt(content: string, length: number = 150): string {
  const text = stripHtml(content);
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function getImageUrl(imagePath: string): string {
  // For now, return local images. Later can be updated to use Cloudflare Images or WordPress media
  return `/images/${imagePath}`;
}
