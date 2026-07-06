import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const works = [
  {
    index: "01",
    category: "Residence",
    name: "Casa Penumbra",
    desc: "A sprawling brutalist residence carved into the hillside, using deep overhangs and textured concrete to sculpt the intense Mediterranean light into livable volumes.",
    meta: "Marbella, ES · 2024 · 620 m²",
    image: "/images/casa_penumbra.jpg"
  },
  {
    index: "02",
    category: "Cultural",
    name: "The Meridian Pavilion",
    desc: "A public gallery and gathering space constructed entirely from mass timber and glass. The structure is designed to disappear into the surrounding forest.",
    meta: "Oslo, NO · 2023 · 1,900 m²",
    image: "/images/meridian_pavilion.jpg"
  },
  {
    index: "03",
    category: "Residence",
    name: "Vantage House",
    desc: "Perched on a cliff edge, this minimal volume frames the Pacific Ocean through careful apertures, acting as an optical instrument for viewing the landscape.",
    meta: "Big Sur, US · 2022 · 430 m²",
    image: "/images/vantage_house.jpg"
  }
];

const services = [
  { num: "01", title: "Architecture", desc: "Full-service architectural design from concept to completion." },
  { num: "02", title: "Interior Design", desc: "Holistic interior spaces crafted with bespoke materials." },
  { num: "03", title: "Master Planning", desc: "Large-scale strategic planning for estates and developments." },
  { num: "04", title: "Restoration", desc: "Sensitive adaptation of historic structures for modern use." },
  { num: "05", title: "Furniture & Objects", desc: "Custom pieces designed specifically for our architectural contexts." },
  { num: "06", title: "Art Direction", desc: "Comprehensive visual narrative and styling." },
];

const movements = [
  { num: "01", title: "Dialogue", desc: "Understanding the site, the client, and the constraints." },
  { num: "02", title: "Concept", desc: "Establishing the core volumetric and material truth." },
  { num: "03", title: "Craft", desc: "Rigorous detailing and technical resolution." },
  { num: "04", title: "Delivery", desc: "Execution on site with trusted makers and builders." },
];

const awards = [
  { name: "International Architecture Award", year: "2024" },
  { name: "Emerging Practice of the Year", year: "2023" },
  { name: "Sustainable Design Prize", year: "2022" },
  { name: "Concrete & Craft Medal", year: "2021" },
];

const press = ["FORMA", "PLINTH", "Séance", "ARCH·Q", "OBJET", "NORD—"];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Manifesto Strip */}
      <section className="w-full border-t border-b border-[rgba(236,228,214,0.1)] px-[6vw] py-[34px] flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-display italic text-[24px] md:text-[30px] text-cream">
          "Restraint is the most enduring luxury."
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          — The Studio Manifesto
        </span>
      </section>

      {/* Selected Works */}
      <section className="py-[140px] px-[6vw]">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ Selected Works</p>
            <h2 className="font-display font-medium text-[clamp(38px,5.2vw,72px)] leading-none text-cream">Recent commissions</h2>
          </div>
          <Link href="/work" className="font-mono text-[12px] uppercase tracking-[0.16em] text-[rgba(236,228,214,0.6)] hover:text-cream transition-colors border-b border-transparent hover:border-cream pb-1">
            All Projects (32) →
          </Link>
        </Reveal>

        <div className="flex flex-col gap-[120px]">
          {works.map((work, i) => (
            <div key={work.index} className={`grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-[56px] items-center ${i % 2 !== 0 ? 'md:grid-cols-[1fr_1.35fr]' : ''}`}>
              <div className={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Reveal type="clip">
                  <div className="relative w-full aspect-[4/3] bg-ink-deep">
                    <Image src={work.image} alt={`Image: ${work.name}`} fill className="object-cover" />
                  </div>
                </Reveal>
              </div>
              <Reveal type="up" delay={0.2} className={`flex flex-col ${i % 2 !== 0 ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
                  {work.index} — {work.category}
                </p>
                <h3 className="font-display font-medium text-[clamp(34px,3.6vw,52px)] text-cream mb-8">
                  {work.name}
                </h3>
                <p className="font-sans font-light text-[16px] text-[rgba(236,228,214,0.66)] leading-[1.8] max-w-[400px] mb-10">
                  {work.desc}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)]">
                  {work.meta}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream text-ink-text py-[150px] px-[6vw] mt-[80px]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-deep mb-12">/ Philosophy</p>
          <h2 className="font-display font-medium text-[clamp(30px,4.4vw,58px)] leading-[1.1] max-w-[1100px] mb-24">
            We believe that <span className="italic text-accent-deep">true luxury is invisible</span>. It is found in the perfect alignment of materials, the silent efficiency of space, and the way a room catches the morning light.
          </h2>
        </Reveal>
        
        <Reveal type="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-[rgba(33,29,23,0.16)]">
          <Reveal type="stagger-item">
            <span className="font-display font-medium text-[52px] block mb-2">13</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(33,29,23,0.6)]">Years in practice</span>
          </Reveal>
          <Reveal type="stagger-item">
            <span className="font-display font-medium text-[52px] block mb-2">32</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(33,29,23,0.6)]">Completed works</span>
          </Reveal>
          <Reveal type="stagger-item">
            <span className="font-display font-medium text-[52px] block mb-2">14</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(33,29,23,0.6)]">International awards</span>
          </Reveal>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="py-[150px] px-[6vw]">
        <Reveal className="mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ Capabilities</p>
          <h2 className="font-display font-medium text-[clamp(38px,5.2vw,72px)] leading-none text-cream">A single studio, end to end.</h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[rgba(236,228,214,0.14)]">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.1} className={`p-10 border-b border-[rgba(236,228,214,0.14)] md:border-r ${i % 3 === 2 ? 'md:border-r-0' : ''}`}>
              <span className="font-mono text-[12px] text-accent mb-6 block">{service.num}</span>
              <h3 className="font-display font-medium text-[26px] text-cream mb-4">{service.title}</h3>
              <p className="font-sans font-light text-[14px] text-[rgba(236,228,214,0.66)] leading-[1.7]">{service.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-panel py-[150px] px-[6vw] border-t border-[rgba(236,228,214,0.1)]">
        <Reveal className="mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ How We Work</p>
          <h2 className="font-display font-medium text-[clamp(38px,5.2vw,72px)] leading-none text-cream">Four movements.</h2>
        </Reveal>

        <Reveal type="stagger" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {movements.map((move) => (
            <Reveal type="stagger-item" key={move.num}>
              <span className="font-display text-[64px] text-[rgba(194,106,61,0.9)] block mb-6 leading-none">{move.num}</span>
              <h3 className="font-display font-medium text-[24px] text-cream mb-4">{move.title}</h3>
              <p className="font-sans font-light text-[14px] text-[rgba(236,228,214,0.66)] leading-[1.7]">{move.desc}</p>
            </Reveal>
          ))}
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="py-[150px] px-[6vw] flex flex-col items-center text-center">
        <Reveal className="w-full max-w-[1000px] mx-auto mb-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-12">/ In Their Words</p>
          <blockquote className="font-display font-medium text-[clamp(28px,4vw,50px)] leading-[1.1] text-cream mb-10">
            "Umbra didn't just design a house for us; they crafted an instrument for living. The way the structure frames the landscape and orchestrates light throughout the day is nothing short of profound."
          </blockquote>
          <cite className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)] not-italic block">
            — Client, Vantage House
          </cite>
        </Reveal>
        
        <Reveal type="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[1200px] text-left">
          <Reveal type="stagger-item" className="border-t border-[rgba(236,228,214,0.1)] pt-10">
            <p className="font-display text-[22px] text-cream leading-[1.4] mb-8">
              "Their uncompromising dedication to material honesty resulted in a gallery space that humbles the architecture to elevate the art."
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)]">
              — Director, The Meridian Pavilion
            </span>
          </Reveal>
          <Reveal type="stagger-item" className="border-t border-[rgba(236,228,214,0.1)] pt-10">
            <p className="font-display text-[22px] text-cream leading-[1.4] mb-8">
              "Working with Umbra is a masterclass in restraint. Every detail is essential; nothing is superfluous."
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)]">
              — Partner, Ash & Oak
            </span>
          </Reveal>
        </Reveal>
      </section>

      {/* Recognition */}
      <section className="bg-panel py-[150px] px-[6vw] border-t border-[rgba(236,228,214,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-20 mb-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ Recognition</p>
            <h2 className="font-display font-medium text-[clamp(38px,5.2vw,72px)] leading-none text-cream">Awarded & published</h2>
          </Reveal>
          
          <Reveal type="stagger" className="flex flex-col">
            {awards.map((award, i) => (
              <Reveal type="stagger-item" key={i} className="flex justify-between items-center py-6 border-b border-[rgba(236,228,214,0.1)] first:border-t">
                <span className="font-display text-[22px] text-cream">{award.name}</span>
                <span className="font-mono text-[12px] text-accent">{award.year}</span>
              </Reveal>
            ))}
          </Reveal>
        </div>
        
        <Reveal type="stagger" className="flex flex-wrap justify-between items-center gap-10 opacity-60">
          {press.map((logo, i) => (
            <Reveal type="stagger-item" key={i} className={`font-display text-[24px] tracking-widest ${logo === 'Séance' ? 'italic' : 'uppercase'} text-cream`}>
              {logo}
            </Reveal>
          ))}
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section className="relative py-[170px] px-[6vw] text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-ink-deep z-0" style={{ backgroundImage: "repeating-linear-gradient(122deg, rgba(236,228,214,0.035) 0 2px, transparent 2px 15px)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,rgba(194,106,61,0.16),transparent_60%)] z-10" />
        
        <Reveal className="relative z-20 flex flex-col items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-8">/ Start a Conversation</p>
          <h2 className="font-display font-medium text-cream flex flex-col items-center leading-[0.9] mb-16" style={{ fontSize: "clamp(44px, 7vw, 108px)" }}>
            <span>Let's build something</span>
            <span className="italic text-cream-soft">enduring.</span>
          </h2>
          <Link href="/contact" className="font-mono text-[13px] uppercase tracking-[0.2em] bg-cream text-ink px-[32px] py-[18px] transition-colors duration-300 hover:bg-accent hover:text-ink">
            Begin an Enquiry →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
