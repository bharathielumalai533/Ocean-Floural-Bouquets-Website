// src/components/Hero.jsx
import React from "react";
import LeftFlowers from "../Asserts/left-flowers.svg";
import RightFlowers from "../Asserts/right-flowers.svg";

const Hero = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-2 pb-4 sm:pt-3 sm:pb-5">
      <div
        className="
          relative w-full
          rounded-[32px]
          bg-[#215632]
          text-[#f6f0e6]
          overflow-hidden
          flex items-center justify-center
          min-h-[220px] sm:min-h-[260px] md:min-h-[280px]
        "
      >
        {/* left flowers */}
        <img
          src={LeftFlowers}
          alt="Left flowers"
          className="
            absolute left-0 bottom-0
            w-24 sm:w-32 md:w-40 lg:w-48
            max-h-full
            object-contain
          "
        />

        {/* right flowers */}
        <img
          src={RightFlowers}
          alt="Right flowers"
          className="
            absolute right-0 bottom-0
            w-24 sm:w-32 md:w-40 lg:w-48
            max-h-full
            object-contain
          "
        />

        {/* center content */}
        <div className="relative z-10 text-center max-w-2xl px-3 sm:px-4">
          <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1 mb-2 sm:mb-3 rounded-full bg-[#1b4728] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase">
            3-Hour Delivery
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug mb-3 sm:mb-4 md:mb-5">
            Ocean Floral Bouqets,
            <br className="hidden sm:block" />
            <span className="block">Locally Crafted in Chennai</span>
          </h1>

          <button
            className="
              inline-flex items-center justify-center
              px-6 sm:px-7 md:px-8
              py-2 sm:py-2.5
              rounded-full
              bg-[#f6f0e6]
              text-[#215632]
              text-xs sm:text-sm
              font-medium
              hover:bg-[#e7ddcc]
              transition-colors
            "
          >
            Browse Bouquets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
