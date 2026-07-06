"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Residential", "Cultural", "Commercial", "Interiors"];

const projects = [
  { name: "Casa Penumbra", category: "Residential", location: "Marbella", year: "2024", image: "/images/casa_penumbra.jpg" },
  { name: "The Meridian Pavilion", category: "Cultural", location: "Oslo", year: "2023", image: "/images/meridian_pavilion.jpg" },
  { name: "Vantage House", category: "Residential", location: "Big Sur", year: "2022", image: "/images/vantage_house.jpg" },
  { name: "Ash & Oak Loft", category: "Interiors", location: "London", year: "2024", image: "/images/ash_oak.jpg" },
  { name: "Lumen Gallery", category: "Commercial", location: "Berlin", year: "2023", image: "/images/lumen_gallery.jpg" },
  { name: "Fold House", category: "Residential", location: "Kyoto", year: "2022", image: "/images/fold_house.jpg" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-[190px] px-[6vw] pb-[150px] min-h-screen">
      <Reveal className="mb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ Portfolio — 2019 to 2024</p>
        <h1 className="font-display font-medium text-[clamp(48px,8vw,120px)] leading-none text-cream mb-16">
          Selected Work
        </h1>
        
        <div className="flex flex-wrap gap-8 border-b border-[rgba(236,228,214,0.1)] pb-6">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-[12px] uppercase tracking-[0.16em] transition-colors relative ${
                activeFilter === filter ? 'text-cream' : 'text-[rgba(236,228,214,0.5)] hover:text-cream'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[56px]">
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={project.name}
              className="group cursor-pointer flex flex-col"
            >
              <div className="overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full aspect-[4/3] bg-ink-deep"
                >
                  <Image src={project.image} alt={project.name} fill className="object-cover" />
                </motion.div>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-[30px] text-cream">{project.name}</h3>
                <span className="font-mono text-[13px] text-[rgba(236,228,214,0.6)]">{project.year}</span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {project.category} · {project.location}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
