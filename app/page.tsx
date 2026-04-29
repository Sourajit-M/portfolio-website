import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-ctp-crust font-sans selection:bg-ctp-mauve/30 selection:text-ctp-mauve">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-ctp-base rounded-2xl shadow-2xl border border-ctp-surface0 my-8 sm:items-start animate-fade-in">
        <Image
          className="ctp-blue-filter"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
          style={{ filter: "brightness(0) saturate(100%) invert(82%) sepia(21%)" }}
        />
        
        <div className="flex flex-col items-center gap-8 mt-12 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-ctp-text sm:text-5xl">
            Welcome to the <span className="text-ctp-mauve">Catppuccin</span> Portfolio
          </h1>
          
          <p className="max-w-lg text-lg leading-relaxed text-ctp-subtext1">
            This project has been themed with the beautiful Mocha palette. 
            Get started by editing <code className="px-2 py-1 bg-ctp-surface0 rounded text-ctp-pink">app/page.tsx</code>.
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-12 w-full sm:flex-row sm:w-auto">
          <a
            className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-ctp-mauve px-8 text-ctp-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-ctp-mauve/20 md:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={18}
              height={18}
              style={{ filter: "brightness(0)" }}
            />
            Deploy Now
          </a>
          
          <a
            className="flex h-14 w-full items-center justify-center rounded-xl border-2 border-ctp-surface0 px-8 text-ctp-text font-semibold transition-all hover:bg-ctp-surface0 hover:border-ctp-surface1 active:scale-95 md:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        
        <footer className="mt-20 flex gap-6 text-ctp-subtext0 text-sm">
          <a href="#" className="hover:text-ctp-blue transition-colors">Github</a>
          <a href="#" className="hover:text-ctp-blue transition-colors">Twitter</a>
          <a href="#" className="hover:text-ctp-blue transition-colors">LinkedIn</a>
        </footer>
      </main>
    </div>
  );
}
