import React from 'react';

interface BlogPostContentProps {
  children: React.ReactNode;
  title: string;
  date?: string;
  author?: string;
}

export default function BlogPostContent({ children, title, date, author = "Kelly's Appliance Center" }: BlogPostContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Paper/Notepad Effect Container */}
      <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-lg shadow-2xl border border-amber-200/50 overflow-hidden">
        {/* Notebook spiral binding effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-amber-100 to-transparent border-r-2 border-amber-200/50">
          <div className="flex flex-col items-center py-8 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-gray-400 shadow-inner" />
            ))}
          </div>
        </div>

        {/* Content with padding for spiral binding */}
        <div className="pl-16 pr-8 py-10 sm:pl-20 sm:pr-12 sm:py-12">
          {/* Title & Meta */}
          <header className="mb-8 pb-6 border-b-2 border-dashed border-amber-200/70">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-serif">
              {title}
            </h1>
            {(date || author) && (
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {author && <span className="font-medium">By {author}</span>}
                {date && <span>• {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
              </div>
            )}
          </header>

          {/* Blog Content with Styled Typography */}
          <div className="prose prose-lg prose-amber max-w-none 
            prose-headings:font-serif prose-headings:text-gray-900 
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-amber-200 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-green-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-ul:list-disc prose-ul:list-inside
            prose-ol:my-6 prose-ol:list-decimal prose-ol:list-inside
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-green-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-6
            prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
            prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
            ">
            {children}
          </div>

          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQiIGhlaWdodD0iNCI+PHBhdGggZD0iTTAgMGg0djRIMHoiIGZpbGw9Im5vbmUiLz48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMC41IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMDIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30 pointer-events-none mix-blend-overlay" />
        </div>

        {/* Bottom shadow for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-gray-200/20 to-transparent" />
      </div>

      {/* Call to Action Below Article */}
      <div className="mt-12 text-center bg-green-50 rounded-lg p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Appliance Repair?</h3>
        <p className="text-gray-600 mb-6">Our team is here to help with all your appliance repair needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:(707)664-9702" className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Call (707) 664-9702
          </a>
          <a href="/schedule-prep" className="inline-flex items-center justify-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600">
            Book Appointment
          </a>
        </div>
      </div>
    </article>
  );
}
