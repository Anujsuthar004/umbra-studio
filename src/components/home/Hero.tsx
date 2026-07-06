"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      const cx = (e.clientX / window.innerWidth) * 2 - 1;
      const cy = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x: cx, y: cy });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const smoothX = useSpring(mousePos.x, { damping: 20, stiffness: 50, mass: 0.5 });
  const smoothY = useSpring(mousePos.y, { damping: 20, stiffness: 50, mass: 0.5 });

  const bgTranslateX = useTransform(smoothX, (v) => v * 22);
  const bgTranslateY = useTransform(smoothY, (v) => v * 22);
  
  const contentTranslateX = useTransform(smoothX, (v) => v * -16);
  const contentTranslateYBase = useTransform(smoothY, (v) => v * -16);
  const contentTranslateYScroll = useTransform(scrollY, (v) => v * 0.30);
  
  // Combine scroll and mouse Y for content
  const contentY = useTransform(
    [contentTranslateYBase, contentTranslateYScroll],
    ([mouseY, scrollY]) => (mouseY as number) + (scrollY as number)
  );

  const contentOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-ink-deep">
      {/* Background Texture & Parallax */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none origin-center"
        style={{
          scale: 1.14,
          x: bgTranslateX,
          y: bgTranslateY,
        }}
      >
        <Image src="/images/hero_bg.png" alt="Hero Background" fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,11,9,0.8)_100%),linear-gradient(to_bottom,transparent_0%,rgba(13,11,9,1)_100%)]" />

      {/* Content Block */}
      <motion.div
        className="relative z-20 w-full max-w-[min(1240px,92vw)] px-[6vw] flex flex-col items-start"
        style={{
          x: contentTranslateX,
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.6)] mb-8"
        >
          Est. 2011 — London · Copenhagen
        </motion.p>

        <h1 className="font-display font-medium text-cream mb-8 flex flex-col" style={{ fontSize: "clamp(52px, 8.4vw, 140px)", lineHeight: 0.96 }}>
          <motion.span
            className="block overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 0.84, 0.24, 1], delay: 0.2 }}
          >
            We build in
          </motion.span>
          <motion.span
            className="block font-light italic text-cream-soft overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
            animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 0.84, 0.24, 1], delay: 0.4 }}
          >
            light & shadow.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans font-light text-[16px] md:text-[18px] text-[rgba(236,228,214,0.72)] leading-[1.8] max-w-[520px] mb-12"
        >
          We are a luxury architecture studio focused on creating spaces that endure. 
          By combining rigorous restraint with material honesty, we craft environments that elevate the human experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <Link
            href="/work"
            className="font-mono text-[12px] uppercase tracking-[0.16em] bg-cream text-ink px-[28px] py-[16px] transition-colors duration-300 hover:bg-accent hover:text-ink"
          >
            View Selected Work
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-cream border-b border-accent hover:text-accent transition-colors pb-1 flex items-center gap-2 group"
          >
            Enquire <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-[6vw] flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-12 bg-[rgba(236,228,214,0.2)] relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-cream"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.4)] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 right-[6vw] font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.4)] text-right hidden md:block z-20"
      >
        32 projects · 9 countries<br />
        14 awards
      </motion.div>
    </section>
  );
}
