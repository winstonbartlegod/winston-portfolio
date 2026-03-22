import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-extrabold text-gradient-gold mb-4">404</div>
        <div className="flex justify-center mb-5">
          <SearchX size={40} className="text-slate-600" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={14} /> Back Home
        </Link>
      </div>
    </div>
  );
}
