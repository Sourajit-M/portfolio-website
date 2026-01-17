import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 shadow-sm">
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link href="#stack" className="hover:text-blue-600 transition-colors">Stack</Link>
        <Link href="mailto:sourajitm19@gmail.com" className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-semibold hover:opacity-80 transition-opacity">
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}