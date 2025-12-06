// src/components/AboutSection.jsx
import React from "react";
import FlowersCard from "../Asserts/3flower.svg"; // right card flowers

const AboutSection = () => {
  return (
    <section className="w-full px-4 md:px-8 pt-10 pb-16 bg-[#f6f1e8]">
      <div
        className="
          grid
          gap-8 lg:gap-10
          items-stretch
          lg:grid-cols-[minmax(90px,140px)_minmax(0,1.2fr)_minmax(260px,0.9fr)]
          grid-cols-1
        "
      >
        {/* LEFT LEAF PANEL */}
        <div className="hidden lg:block">
          <div className="h-full rounded-[28px] overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
            <img
              src="https://framerusercontent.com/images/pj90vOAl33CCxGzMVT4lipu4E.jpg"
              alt="Leaves"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CENTER TEXT COLUMN */}
        <div className="flex flex-col justify-center max-w-xl">
          <span className="inline-flex items-center justify-center rounded-full bg-[#f6efe0] border border-[#e1d4bf] px-4 py-1 text-[11px] tracking-[0.18em] uppercase text-[#1f4d37] mb-4">
            About Ocean Floral
          </span>

          <h2 className="font-serif text-[2rem] sm:text-[2.2rem] lg:text-[2.5rem] text-[#1f4d37] leading-tight mb-5">
            Locally Crafted.
            <br />
            Lovingly Delivered
          </h2>

          <p className="text-[14px] lg:text-[15px] text-[#1f4d37] leading-relaxed mb-4">
            At Ocean Floral Boutique, we believe flowers do more than decorate –
            they connect, comfort, and celebrate life’s most meaningful
            moments. Based in the heart of people, we create elegant,
            handcrafted bouquets designed to leave a lasting impression.
          </p>

          <p className="text-[14px] lg:text-[15px] text-[#1f4d37] leading-relaxed mb-6">
            Each bouquet is carefully handcrafted by local florists using the
            freshest seasonal blooms. Whether you're sending love, thanks, or
            simply brightening a space – every petal holds purpose.
          </p>

          <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#215632] text-[#f6f0e6] text-sm font-medium hover:bg-[#1a4527] transition-colors shadow-sm">
            Learn More
          </button>
        </div>

        {/* RIGHT CARD + RIGHT LEAF PANEL BEHIND */}
        <div className="relative flex items-stretch">
          {/* Right leaf panel behind card (desktop only) */}
          <div className="absolute inset-y-3 right-0 w-[30%] rounded-[28px] overflow-hidden hidden lg:block">
            <img
              src="https://framerusercontent.com/images/pj90vOAl33CCxGzMVT4lipu4E.jpg"
              alt="Leaves"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card itself */}
          <div
            className="
              relative
              w-full
              lg:w-[80%]
              ml-auto
              bg-[#f4eddd]
              rounded-[24px]
              px-6 sm:px-8 lg:px-9
              pt-7
              pb-6
              text-center
              flex flex-col justify-between
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            "
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#7f7a63] mb-3">
                Since 2014
              </p>
              <p className="font-serif text-[1.8rem] sm:text-[2rem] text-[#1f4d37] leading-tight">
                Ocean Floral
                <br />
                Bouquets
              </p>
            </div>

            <div className="mt-6 flex justify-center items-end">
              <img
                src={FlowersCard}
                alt="Floral illustration"
                className="max-h-[200px] sm:max-h-[220px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
