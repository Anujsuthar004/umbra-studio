"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-[190px] pb-[150px] px-[6vw] flex justify-center">
      <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[90px]">
        {/* Left Col */}
        <Reveal className="flex flex-col">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">/ Enquiries</p>
          <h1 className="font-display font-medium text-[clamp(44px,6vw,92px)] leading-none text-cream mb-8">
            Tell us about <br />
            your project.
          </h1>
          <p className="font-sans font-light text-[16px] text-[rgba(236,228,214,0.66)] leading-[1.8] max-w-[400px] mb-16">
            We take on a limited number of commissions each year to ensure every project receives our full attention. Please share the details of your site, timeline, and vision.
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent mb-4">London</p>
              <p className="font-sans font-light text-[15px] text-[rgba(236,228,214,0.72)] leading-[1.6]">
                18 Rivington Street<br />
                Shoreditch<br />
                EC2A
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent mb-4">Copenhagen</p>
              <p className="font-sans font-light text-[15px] text-[rgba(236,228,214,0.72)] leading-[1.6]">
                Refshalevej 163A<br />
                1432<br />
                København
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent mb-4">Email</p>
              <p className="font-sans font-light text-[15px] text-[rgba(236,228,214,0.72)] leading-[1.6]">
                studio@umbra.arch<br />
                press@umbra.arch
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent mb-4">Telephone</p>
              <p className="font-sans font-light text-[15px] text-[rgba(236,228,214,0.72)] leading-[1.6]">
                +44 20 7946 0102
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Col: Form */}
        <Reveal delay={0.2}>
          {submitted ? (
            <div className="bg-panel border border-[rgba(194,106,61,0.4)] p-[44px] flex flex-col justify-center items-center text-center h-full min-h-[400px]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">Received</p>
              <h2 className="font-display font-medium text-[42px] text-cream mb-4">Thank you.</h2>
              <p className="font-sans font-light text-[16px] text-[rgba(236,228,214,0.66)] leading-[1.8] max-w-[300px]">
                We have received your enquiry and will be in touch within two working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-panel border border-[rgba(236,228,214,0.1)] p-[44px] flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-[rgba(236,228,214,0.2)] pb-3 font-sans font-light text-[15px] text-cream placeholder-[rgba(236,228,214,0.4)] focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-[rgba(236,228,214,0.2)] pb-3 font-sans font-light text-[15px] text-cream placeholder-[rgba(236,228,214,0.4)] focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <select 
                  required 
                  defaultValue=""
                  className="w-full bg-transparent border-b border-[rgba(236,228,214,0.2)] pb-3 font-sans font-light text-[15px] text-cream focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-[rgba(236,228,214,0.4)] bg-panel">Project Type</option>
                  <option value="residential" className="bg-panel">Residential</option>
                  <option value="cultural" className="bg-panel">Cultural</option>
                  <option value="commercial" className="bg-panel">Commercial</option>
                </select>
                <select 
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-[rgba(236,228,214,0.2)] pb-3 font-sans font-light text-[15px] text-cream focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-[rgba(236,228,214,0.4)] bg-panel">Budget Range</option>
                  <option value="500k-1m" className="bg-panel">£500k – £1M</option>
                  <option value="1m-3m" className="bg-panel">£1M – £3M</option>
                  <option value="3m+" className="bg-panel">£3M+</option>
                </select>
              </div>

              <textarea
                required
                placeholder="Message or project details..."
                rows={5}
                className="w-full bg-transparent border-b border-[rgba(236,228,214,0.2)] pb-3 font-sans font-light text-[15px] text-cream placeholder-[rgba(236,228,214,0.4)] focus:outline-none focus:border-accent transition-colors resize-none mt-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full font-mono text-[12px] uppercase tracking-[0.16em] bg-cream text-ink py-[18px] mt-6 transition-colors duration-300 hover:bg-accent disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
