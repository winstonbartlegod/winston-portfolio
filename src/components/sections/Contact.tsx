'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

const socialLinks = [
  { icon: Github,   href: profile.social.github,   label: 'GitHub',   handle: '@winstonbartlegod' },
  { icon: Linkedin, href: profile.social.linkedin,  label: 'LinkedIn', handle: 'Winston Bartle' },
  { icon: Twitter,  href: profile.social.twitter,   label: 'Twitter',  handle: '@winnieflyhigh' },
  { icon: Mail,     href: `mailto:${profile.email}`, label: 'Email',   handle: profile.email },
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          06. Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 mt-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p className="text-slate-400 leading-relaxed text-sm">
                I&rsquo;m always open to discussing interesting AI & finance problems, consulting engagements, research collaborations, or just connecting with fellow fintech enthusiasts.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mt-3">
                Drop me a message and I&rsquo;ll get back to you within 48 hours.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 text-sm text-slate-500">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <MapPin size={14} className="text-gold-400" />
              </div>
              Based in {profile.location}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 glass-card hover:border-white/15 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/[0.04] group-hover:bg-gold-400/10 transition-colors">
                    <Icon size={14} className="text-slate-400 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-300">{label}</p>
                    <p className="text-[11px] text-slate-600">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="glass-card p-10 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[400px]">
                <CheckCircle size={48} className="text-teal" />
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&rsquo;ll reply within 48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-4 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              // Netlify form — works with static export
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="glass-card p-6 flex flex-col gap-5"
              >
                {/* Required hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-400">
                      Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-400">
                      Email <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-slate-400">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">
                    Message <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what's on your mind..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs">
                    Something went wrong. Please try emailing me directly at{' '}
                    <a href={`mailto:${profile.email}`} className="underline">
                      {profile.email}
                    </a>
                    .
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center mt-1"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#06090F]/30 border-t-[#06090F] rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
