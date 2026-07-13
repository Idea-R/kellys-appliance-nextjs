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
    title: 'How Long Do Major Appliances Last? A Lifespan Guide by Type',
    slug: 'how-long-do-major-appliances-last',
    excerpt:
      'How long does a refrigerator, washer, dryer, dishwasher, or oven really last? Average lifespans by appliance, what shortens them, and how to get more years out of yours.',
    date: '2026-06-16',
    readTime: '7 min read',
    category: 'Consumer Tips',
  },
  {
    title: 'Power Outage Appliance Checklist for Sonoma County',
    slug: 'power-outage-appliance-checklist-sonoma-county',
    excerpt:
      'A PSPS and power outage checklist for North Bay homeowners: what to do before, during, and after to protect your refrigerator, freezer, and electronics, plus food safety rules.',
    date: '2026-06-16',
    readTime: '6 min read',
    category: 'Maintenance',
  },
  {
    title: 'Appliance Repair or Replace? A 2026 Sonoma County Cost Guide',
    slug: 'appliance-repair-or-replace-sonoma-county-cost-guide',
    excerpt:
      "Repair it or replace it? The 50% rule, real 2026 repair vs. replacement costs by appliance, and an age guide for Sonoma, Marin, and Napa homeowners.",
    date: '2026-06-16',
    readTime: '8 min read',
    category: 'Consumer Tips',
  },
  {
    title: 'Best Appliance Brands for Wine Country Living',
    slug: 'best-appliance-brands-wine-country-living',
    excerpt:
      "Which appliance brands actually hold up to well water, power events, and a North Bay kitchen? A repair team's honest take, from premium built-ins to reliable mid-range.",
    date: '2026-06-16',
    readTime: '7 min read',
    category: 'Buying Guide',
  },
  {
    title: 'Getting the Most Out of Your Dishwasher: 10 Things Owners Get Wrong',
    slug: 'getting-the-most-out-of-your-dishwasher',
    excerpt:
      "Cloudy glasses, dishes that come out dirty, a dishwasher that smells. Most of it traces back to 10 simple habits, and almost all of them are free to fix. Here's what owners get wrong, from never cleaning the filter to skipping rinse aid.",
    date: '2026-06-11',
    readTime: '10 min read',
    category: 'Dishwasher Repair',
  },
  {
    title: 'Dryer Not Heating? 7 Things to Check Before You Call a Repair Tech',
    slug: 'dryer-not-heating-7-things-to-check',
    excerpt:
      "Your dryer runs but the clothes come out cold and damp. Here are the 7 things to check first, which you can fix yourself, and when it's time to call a pro. Covers electric and gas, from clogged vents to thermal fuses to igniters.",
    date: '2026-06-10',
    readTime: '10 min read',
    category: 'Dryer Repair',
  },
  {
    title: 'Washer Error Codes Decoded: LG, Samsung, Whirlpool, Maytag & GE',
    slug: 'washer-error-codes-decoded-by-brand',
    excerpt:
      "Your washer is flashing an error code. Look it up here by brand. We cover the most common codes for LG, Samsung, Whirlpool, Maytag, and GE, what each one actually means, and which ones you can fix yourself.",
    date: '2026-06-05',
    readTime: '12 min read',
    category: 'Washer Repair',
  },
  {
    title: 'Sonoma County Heat Wave Survival: Why Your Fridge Works Twice as Hard in July',
    slug: 'sonoma-county-heat-wave-refrigerator-survival',
    excerpt:
      "When inland Sonoma County hits 100°F, your fridge struggles. Here's what's normal, what's a warning sign, and how to keep your appliances alive through summer.",
    date: '2026-06-04',
    readTime: '7 min read',
    category: 'Seasonal Tips',
  },
  {
    title: 'Why Is My Refrigerator Making Loud Noises? 8 Sounds Explained',
    slug: 'refrigerator-making-loud-noises-8-sounds-explained',
    excerpt:
      "Buzzing, clicking, knocking, hissing, rattling. Your fridge makes a lot of sounds. Here's what each one means and which ones need a repair call.",
    date: '2026-06-03',
    readTime: '9 min read',
    category: 'Refrigerator Repair',
  },
  {
    title: '50 Years of Appliance Repair in Sonoma County: What\'s Changed (And What Hasn\'t)',
    slug: '50-years-appliance-repair-sonoma-county',
    excerpt:
      "Five decades of repairing appliances in Sonoma County. How the work has changed, what stayed the same, and what we learned along the way.",
    date: '2026-06-02',
    readTime: '8 min read',
    category: 'Community',
  },
  {
    title: 'Oven Not Heating? 6 Things to Check Before You Call a Repair Tech',
    slug: 'oven-not-heating-6-things-to-check',
    excerpt:
      "Your oven won't heat up and dinner is in jeopardy. Here are the 6 things to check first, which you can fix yourself, and when it's time to call a pro. Covers electric and gas, from breakers to igniters to error codes.",
    date: '2026-06-01',
    readTime: '9 min read',
    category: 'Oven Repair',
  },
  {
    title: "Right to Repair: Why Kelly's Rebuilds Control Boards Instead of Replacing Them",
    slug: 'right-to-repair-why-kellys-rebuilds-control-boards',
    excerpt:
      "Most shops just swap a $400 control board. We rebuild them. Here's why right to repair matters, what California's 2024 law actually does, and how component-level repair saves your appliance and your wallet.",
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'Professional Service',
  },
  {
    title: 'Fridge Water Tastes Bad? Ice Maker Not Working? What to Check First',
    slug: 'fridge-water-tastes-bad-ice-maker-not-working',
    excerpt:
      'Your refrigerator water tastes funny, ice production is low, or the dispenser is painfully slow. Here are the most common causes and when it\'s time to call a repair pro.',
    date: '2026-04-12',
    readTime: '7 min read',
    category: 'Refrigerator Repair',
  },
  {
    title: 'Why Is There Frost or Moisture in My Refrigerator? Causes and Fixes',
    slug: 'why-is-there-frost-or-moisture-in-my-refrigerator',
    excerpt:
      'Frost buildup, condensation, or water inside your fridge is not normal. Learn the most common causes, from worn door gaskets to a failed defrost system, and what you can do about each one.',
    date: '2026-04-02',
    readTime: '6 min read',
    category: 'Refrigerator Repair',
  },
  {
    title: "APE Appliance Parts Is Closing. Kelly's Expands Parts Department",
    slug: 'ape-closing-kellys-parts-expansion',
    excerpt:
      "After 50 years, APE on Petaluma Hill Road is closing. Kelly's is growing our parts department to help fill the gap for Sonoma County homeowners and DIYers.",
    date: '2026-03-12',
    readTime: '4 min read',
    category: 'Community',
  },
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

