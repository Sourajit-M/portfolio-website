import Link from 'next/link';
import { ConnectLink } from '@/components/ConnectLink';
import { portfolioData } from '@/data/portfolio';

const navigateLinks = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
];

export function Footer() {
  return (
    <footer className="mt-32 pb-16">
      <div className="container-tight flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Navigate Section */}
        <div className="flex flex-col gap-6 md:w-3/5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ctp-overlay1">NAVIGATE</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {navigateLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-ctp-subtext0 hover:text-ctp-text transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col gap-6 md:w-2/5">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ctp-overlay1">CONNECT</h3>
          <div className="grid grid-cols-4 gap-4 w-fit">
            {portfolioData.connect.map((link, index) => (
              <ConnectLink key={index} {...link} />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}