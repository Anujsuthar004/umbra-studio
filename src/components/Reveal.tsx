"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  type?: "up" | "clip" | "stagger" | "stagger-item";
  delay?: number;
  className?: string;
}

export function Reveal({ children, type = "up", delay = 0, className }: RevealProps) {
  const baseViewport = { once: true, margin: "0px 0px -8% 0px", amount: 0.14 };

  if (type === "stagger") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={baseViewport as any}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.085,
              delayChildren: delay,
            },
          },
          hidden: {},
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "stagger-item") {
    return (
      <motion.div
        className={className}
        variants={{
          hidden: { opacity: 0, y: 28 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.85, ease: [0.2, 0.7, 0.2, 1] },
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (type === "clip") {
    return (
      <motion.div
        className={cn("overflow-hidden", className)}
        initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.06 }}
        whileInView={{ clipPath: "inset(0 0% 0 0)", scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.25, ease: [0.16, 0.84, 0.24, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  // Default "up"
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={baseViewport as any}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
