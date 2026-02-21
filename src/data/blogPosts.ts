export type BlogPostMeta = {
  title: string;
  slug: string;
  excerpt: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  readTime: string;
  category: string;
};

/**
 * Central blog post metadata used by:
 * - `/blog` index page
 * - `sitemap.ts` (for per-post URLs + lastmod)
 *
 * When you add a new post page under `src/app/blog/<slug>/page.tsx`,
 * add its metadata here so it’s discoverable in the blog index + sitemap.
 */
export const blogPosts: BlogPostMeta[] = [
  {
    title: 'How to Tell If Your Refrigerator Needs Professional Repair',
    slug: 'how-to-tell-if-your-refrigerator-needs-professional-repair',
    excerpt:
      'Learn the warning signs that your refrigerator needs professional attention, from unusual noises to temperature fluctuations and excessive frost buildup.',
    date: '2026-02-20',
    readTime: '5 min read',
    category: 'Refrigerator Repair',
  },
  {
    title: 'Is Your Oven Not Heating Properly? Common Causes and Fixes',
    slug: 'is-your-oven-not-heating-properly-common-causes-and-fixes',
    excerpt:
      'Discover why your oven might not be heating correctly and when you need a professional repair. Covers electric and gas oven troubleshooting.',
    date: '2026-02-18',
    readTime: '5 min read',
    category: 'Oven Repair',
  },
  {
    title: 'How Often Should You Service Your Home Appliances?',
    slug: 'how-often-should-you-service-your-home-appliances',
    excerpt:
      'A complete maintenance schedule for refrigerators, ovens, washers, dryers, and dishwashers to extend their lifespan and avoid costly breakdowns.',
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Maintenance',
  },
  {
    title: 'Signs Your Washing Machine Needs Repair Before It Breaks Down',
    slug: 'signs-your-washing-machine-needs-repair-before-it-breaks-down',
    excerpt:
      'Catch washing machine problems early. Learn the top warning signs that your washer needs professional repair before a small issue becomes a major breakdown.',
    date: '2026-02-12',
    readTime: '5 min read',
    category: 'Washer Repair',
  },
  {
    title: 'Why Is My Dryer Taking So Long to Dry Clothes?',
    slug: 'why-is-my-dryer-taking-so-long-to-dry-clothes',
    excerpt:
      'Learn the top causes and solutions for slow-drying dryers from our expert technicians. Common issues include clogged lint traps, blocked vents, and faulty heating elements.',
    date: '2025-06-26',
    readTime: '5 min read',
    category: 'Dryer Repair',
  },
  {
    title: 'Common Dishwasher Problems and How to Prevent Them',
    slug: 'common-dishwasher-problems-and-how-to-prevent-them',
    excerpt:
      'Discover the most common dishwasher issues and preventive maintenance tips to keep your dishwasher running efficiently for years to come.',
    date: '2025-05-23',
    readTime: '4 min read',
    category: 'Dishwasher Repair',
  },
  {
    title: 'What Is the Best Way to Clean Stainless Steel Appliances?',
    slug: 'what-is-the-best-way-to-clean-stainless-steel-appliances',
    excerpt:
      'Professional tips for keeping your stainless steel appliances spotless and maintaining their appearance with the right cleaning products and techniques.',
    date: '2025-01-05',
    readTime: '3 min read',
    category: 'Maintenance',
  },
  {
    title: 'What is the Best Way to Avoid Appliance Repair Scams?',
    slug: 'what-is-the-best-way-to-avoid-appliance-repair-scams',
    excerpt:
      'Protect yourself from appliance repair scams with these expert tips. Learn the warning signs and how to choose a reputable repair service.',
    date: '2024-12-09',
    readTime: '6 min read',
    category: 'Consumer Tips',
  },
  {
    title: 'Why You Should Call a Professional to Repair Your Appliances',
    slug: 'why-you-should-call-a-professional-to-repair-your-appliances',
    excerpt:
      "Understanding when DIY isn't enough and professional help is needed. Learn about the risks of DIY repairs and benefits of professional service.",
    date: '2024-11-20',
    readTime: '4 min read',
    category: 'Professional Service',
  },
  {
    title: 'Top 5 Tips for Buying a Home Appliance',
    slug: 'top-5-tips-for-buying-a-home-appliance',
    excerpt:
      'Essential advice for making smart appliance purchase decisions. Consider energy efficiency, size, features, and long-term maintenance costs.',
    date: '2019-10-23',
    readTime: '5 min read',
    category: 'Buying Guide',
  },
];

