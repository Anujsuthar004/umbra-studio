"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Studio", href: "/studio" },
  { name: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] py-[22px] transition-all duration-300",
        scrolled
          ? "bg-[rgba(20,18,15,0.82)] backdrop-blur-[16px] border-b border-[rgba(236,228,214,0.10)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Link href="/" className="font-display font-medium text-[24px] tracking-[0.42em] uppercase text-cream">
        UMBRA
      </Link>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-mono text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-cream",
                  isActive ? "text-cream" : "text-[rgba(236,228,214,0.6)]"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <Link
          href="/contact"
          className="font-mono text-[12px] uppercase tracking-[0.16em] bg-accent text-ink px-[22px] py-[12px] transition-colors duration-300 hover:bg-accent-hover"
        >
          Start a Project
        </Link>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}
