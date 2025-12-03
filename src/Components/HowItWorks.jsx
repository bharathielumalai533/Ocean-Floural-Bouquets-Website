// src/components/HowItWorks.jsx
import React from "react";

const steps = [
  {
    id: "01",
    title: "Choose Bouquet",
    text: "Explore our collection and pick the perfect arrangement for any occasion.",
  },
  {
    id: "02",
    title: "Contact to Order",
    text: "Call or message us to place your order and add thoughtful personal touches.",
  },
  {
    id: "03",
    title: "We Deliver",
    text: "Handcrafted with care and delivered fresh, right on schedule – every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-4 md:px-8 pt-12 pb-16 bg-[#f6f1e8]">
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-10 gap-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1f4d37]">
          How It Works
        </h2>

        <button className="text-sm sm:text-base text-[#1f4d37] hover:text-[#2f6b4b] whitespace-nowrap">
          See Delivery &rsaquo;
        </button>
      </div>

      {/* Steps row */}
      <div className="grid gap-10 lg:gap-16 grid-cols-1 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-5">
            {/* Number badge */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-[18px] bg-[#f4eddd] flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                <span className="font-serif text-lg text-[#1f4d37]">
                  {step.id}
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-serif text-xl text-[#1f4d37] mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#1f4d37] leading-relaxed max-w-xs">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
