export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6">
      {/* The Main Container - Limits width on large screens */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* HEADER SECTION (Avatar + Bio) */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-2">
          {/* Placeholder for your Image - We'll fix this in Phase 3 */}
          <div className="w-24 h-24 rounded-full bg-gray-200 border border-gray-300 shadow-inner flex-shrink-0"></div>

          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">I'm Sourajit Majumder.</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              A Full Stack Developer aiming for AI Engineering. I build pixel-perfect web experiences with modern tools like Next.js, Bun, and Tailwind.
            </p>
          </div>
        </div>

        {/* BENTO GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">

          {/* Card 1: Main Feature (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Spotlight</span>
                  <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">Featured Project</h3>
                </div>
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Arrow icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 dark:text-neutral-400"><path d="M7 7h10v10" /><path d="M7 17L17 7" /></svg>
                </div>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">
                Project description goes here... This space is reserved for a compelling summary of your best work.
              </p>
            </div>

            {/* Improved Image Placeholder */}
            <div className="mt-6 w-full h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
              <span className="relative text-neutral-400 dark:text-neutral-500 font-medium text-sm">Project Preview</span>
            </div>
          </div>

          {/* Card 2: Status (Square) */}
          <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-sm">
            <span className="text-xs font-medium text-gray-500 uppercase">Status</span>
            <div className="text-2xl font-semibold">Coding in Bun 🚀</div>
          </div>

          {/* Card 3: Stack (Square) */}
          <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {/* Badges */}
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 rounded-md">Next.js</span>
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 rounded-md">React</span>
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 rounded-md">Bun</span>
            </div>
          </div>

          {/* Card 4: Map/Location (Spans 2 columns) */}
          <div className="md:col-span-2 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 shadow-sm">
            <h3 className="font-semibold">Based in India 🇮🇳</h3>
            {/* We will add a map image here later */}
          </div>

        </div>
      </div>
    </main>
  );
}