export interface WordPressPage {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  modified: string;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  template: string;
  yoast_head_json?: {
    title: string;
    description: string;
    canonical: string;
    og_title: string;
    og_description: string;
    og_image: Array<{
      url: string;
      width: number;
      height: number;
      type: string;
    }>;
    robots: {
      index: string;
      follow: string;
    };
  };
}

export interface WordPressPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  modified: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  yoast_head_json?: {
    title: string;
    description: string;
    canonical: string;
    og_title: string;
    og_description: string;
    og_image: Array<{
      url: string;
      width: number;
      height: number;
      type: string;
    }>;
  };
}

export interface MediaItem {
  id: number;
  title: string;
  slug: string;
  mime_type: string;
  source_url: string;
  date: string;
  alt_text: string;
  caption: string;
  description: string;
}

export interface ServicePage {
  title: string;
  slug: string;
  description: string;
  content: string;
  seo: {
    title: string;
    description: string;
  };
  features?: string[];
  image?: string;
}

export interface LocationPage {
  title: string;
  slug: string;
  city: string;
  content: string;
  seo: {
    title: string;
    description: string;
  };
  serviceAreas?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: string;
  email?: string;
  certifications: string[];
  yearsInBusiness: number;
  guarantee: string;
}

export interface NavigationItem {
  label: string;
  url: string;
  priority: number;
  children?: NavigationItem[];
}
