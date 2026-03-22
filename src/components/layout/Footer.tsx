import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

const socialLinks = [
  { icon: Github,   href: profile.social.github,   label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin,  label: 'LinkedIn' },
  { icon: Twitter,  href: profile.social.twitter,   label: 'Twitter' },
  { icon: Mail,     href: `mailto:${profile.email}`, label: 'Email' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#06090F]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-[#06090F] font-bold text-xs">
              W
            </div>
            <span className="text-sm font-semibold text-white">{profile.name}</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © {year} {profile.name}. Built with{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="text-slate-500 hover:text-gold-400 transition-colors"
            >
              Next.js
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
