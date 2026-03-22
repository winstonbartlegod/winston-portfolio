'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles, Download } from 'lucide-react';
import { profile } from '@/data/profile';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const socialLinks = [
  { icon: Github,   href: profile.social.github,   label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin,  label: 'LinkedIn' },
  { icon: Twitter,  href: profile.social.twitter,   label: 'Twitter' },
];

// Floating badge component
function FloatingBadge({
  text, icon, className,
}: {
  text: string; icon: string; className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className={`absolute hidden lg:flex items-center gap-2 glass-card px-3.5 py-2 text-xs font-medium text-slate-300 shadow-card pointer-events-none ${className}`}
    >
      <span className="text-base">{icon}</span>
      {text}
    </motion.div>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dots: { x: number; y: number; vx: number; vy: number; alpha: number }[] = [];
    const NUM = 80;

    for (let i = 0; i < NUM; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 165, 0, ${d.alpha})`;
        ctx.fill();
      });

      // Draw lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(240, 165, 0, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden
      />

      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)] py-20">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none">
                <span className="block text-white">{profile.name.split(' ')[0]}</span>
                <span className="block text-gradient-gold">{profile.name.split(' ')[1]}</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p {...fadeUp(0.3)} className="text-base md:text-lg text-slate-400 font-medium flex items-center gap-2">
              <Sparkles size={16} className="text-gold-400 shrink-0" />
              {profile.headline}
            </motion.p>

            {/* Tagline */}
            <motion.p {...fadeUp(0.4)} className="text-slate-400 leading-relaxed max-w-xl text-sm md:text-base">
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mt-2">
              <Link href="/#experience" className="btn-primary">
                View Work History
                <ArrowDown size={15} className="rotate-[-90deg]" />
              </Link>
              <Link href="/#contact" className="btn-secondary">
                Contact Me
              </Link>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={14} /> Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-1 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Floating badges */}
            <FloatingBadge
              text="EY Senior Consultant"
              icon="💼"
              className="-top-4 -left-8 whitespace-nowrap"
            />
            <FloatingBadge
              text="BSc Econometrics — UvA" 
              icon="🎓"
              className="-bottom-2 -right-6 whitespace-nowrap"
            />
            <FloatingBadge
              text="MSc FinTech — HKUST"
              icon="🎓"
              className="top-1/2 -right-24 whitespace-nowrap"
            />
            <FloatingBadge
              text="AI · ML · Finance"
              icon="🤖"
              className="top-1/3 -left-16 whitespace-nowrap"
            />

            {/* Photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Spinning border ring */}
              <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-dashed border-gold-400/10 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Glow */}
              <div className="absolute inset-6 rounded-full bg-gold-400/10 blur-2xl" />

              {/* Avatar */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-gold-400/30 shadow-[0_0_40px_rgba(240,165,0,0.2)]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 200px, 320px"
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback: show initials if image missing
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.initials-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'initials-fallback absolute inset-0 flex items-center justify-center text-4xl font-bold text-gold-400 bg-[#0D1117]';
                      div.textContent = profile.initials;
                      parent.appendChild(div);
                    }
                  }}
                />
                {/* Initials placeholder (visible if no image) */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-gold-400/80 bg-[#0D1117] select-none"
                  style={{ display: 'none' }} /* hidden by default, shown via JS fallback */
                >
                  {profile.initials}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={14} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
