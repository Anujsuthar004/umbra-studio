import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink-deep pt-[90px] px-[6vw] pb-[40px] border-t border-[rgba(236,228,214,0.10)] text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-24">
        <div>
          <h2 className="font-display font-medium leading-none tracking-[0.04em] uppercase" style={{ fontSize: "clamp(56px, 9vw, 120px)" }}>
            UMBRA
          </h2>
          <p className="font-sans font-light text-[18px] text-[rgba(236,228,214,0.66)] mt-6 max-w-sm">
            A luxury architecture studio focused on light, shadow, and enduring restraint.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)] mb-6">Navigate</h3>
          <ul className="flex flex-col gap-4 font-sans font-light text-[15px]">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/work" className="hover:text-accent transition-colors">Work</Link></li>
            <li><Link href="/studio" className="hover:text-accent transition-colors">Studio</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)] mb-6">Studios</h3>
          <ul className="flex flex-col gap-4 font-sans font-light text-[15px]">
            <li className="text-[rgba(236,228,214,0.72)]">London</li>
            <li className="text-[rgba(236,228,214,0.72)]">Copenhagen</li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(236,228,214,0.5)] mb-6">Connect</h3>
          <ul className="flex flex-col gap-4 font-sans font-light text-[15px]">
            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Press Kit</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(236,228,214,0.10)] font-mono text-[11px] text-[rgba(236,228,214,0.4)] gap-4">
        <p>© 2026 UMBRA Studio. All rights reserved.</p>
        <p>Design & build — DeepMind ⟶</p>
      </div>
    </footer>
  );
}
