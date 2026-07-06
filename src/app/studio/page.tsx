import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";

const values = [
  { num: "I", title: "Material honesty", desc: "We believe materials should express their true nature. Concrete should feel heavy, timber should show its grain, steel should carry tension visibly. We do not disguise." },
  { num: "II", title: "Light as structure", desc: "Before we draw walls, we map the sun. Light is treated as a primary building material, used to define volumes, indicate time, and texture surfaces." },
  { num: "III", title: "The long view", desc: "Architecture must outlive its creators. We design for the patina of time, selecting materials that age gracefully and geometries that resist fleeting trends." }
];

const partners = [
  { name: "Ingrid Søholm", role: "Founding Partner" },
  { name: "Tomás Rivera", role: "Founding Partner" },
  { name: "Naomi Okafor", role: "Partner, Interiors" },
  { name: "Henrik Vold", role: "Partner, Technical" }
];

export default function Studio() {
  return (
    <div className="pt-[190px] pb-[150px]">
      <Reveal className="px-[6vw] mb-24">
        <h1 className="font-display font-medium text-[clamp(40px,6vw,92px)] leading-[1.05] text-cream max-w-[1100px]">
          A small practice, deliberately. Twelve people who would rather do three buildings well than thirty at speed.
        </h1>
      </Reveal>

      <Reveal type="clip" className="w-full mb-32">
        <Placeholder label="Image: Studio Workshop" aspect="21/9" />
      </Reveal>

      <div className="px-[6vw]">
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-40">
          <div>
            <p className="font-display text-[28px] md:text-[34px] leading-[1.3] text-cream">
              Umbra was founded in 2011 on a shared belief that architecture had become too fast, too disposable, and too detached from the sensory realities of human experience.
            </p>
          </div>
          <div className="flex flex-col gap-6 font-sans font-light text-[16px] text-[rgba(236,228,214,0.66)] leading-[1.8] max-w-[520px]">
            <p>
              We are a studio of architects, makers, and interior specialists working across scales, from bespoke furniture to expansive cultural masterplans. What unites our work is an uncompromising dedication to craft and context.
            </p>
            <p>
              By remaining intentionally small, we ensure that every project receives the unbroken attention of the founding partners. We do not hand off designs; we interrogate them continuously from the first sketch to the final site inspection.
            </p>
          </div>
        </Reveal>

        <section className="mb-40">
          <Reveal type="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[rgba(236,228,214,0.14)] pt-16">
            {values.map((val) => (
              <Reveal type="stagger-item" key={val.num}>
                <span className="font-mono text-[14px] text-accent block mb-6">{val.num}</span>
                <h3 className="font-display text-[26px] text-cream mb-4">{val.title}</h3>
                <p className="font-sans font-light text-[14px] text-[rgba(236,228,214,0.66)] leading-[1.7]">{val.desc}</p>
              </Reveal>
            ))}
          </Reveal>
        </section>

        <section>
          <Reveal className="mb-16">
            <h2 className="font-display font-medium text-[clamp(38px,5.2vw,72px)] leading-none text-cream">The partners</h2>
          </Reveal>
          
          <Reveal type="stagger" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Reveal type="stagger-item" key={partner.name} className="flex flex-col">
                <div className="mb-6">
                  <Placeholder label={`Portrait: ${partner.name}`} aspect="3/4" />
                </div>
                <h3 className="font-display text-[22px] text-cream mb-2">{partner.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{partner.role}</p>
              </Reveal>
            ))}
          </Reveal>
        </section>
      </div>
    </div>
  );
}
