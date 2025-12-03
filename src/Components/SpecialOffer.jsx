// src/components/SpecialOffer.jsx
import React from "react";
import FlowersIllustration from "../Asserts/2flower.svg";

const SpecialOffer = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-6 pb-8">
      <div
        className="
          w-full
          bg-[#dde3cf]
          text-[#1f4d37]
          flex flex-col sm:flex-row
          items-center
          justify-between
          rounded-[0.75rem]
          overflow-hidden
          py-5 sm:py-6
        "
      >
        {/* left text block */}
        <div className="w-full sm:w-auto pl-6 sm:pl-10 lg:pl-14 pb-4 sm:pb-0">
          <span className="inline-flex items-center justify-center border border-[#1f4d37] rounded-full px-4 py-1 text-[11px] tracking-[0.18em] uppercase mb-3">
            Special Offer
          </span>

          <h3 className="font-serif text-2xl sm:text-[1.7rem] leading-snug mb-3">
            Enjoy 20% Off
            <br />
            Your First Bouquet!
          </h3>

          <button
            className="
              inline-flex items-center justify-center
              px-6 py-2.5
              rounded-full
              bg-[#215632]
              text-[#f6f0e6]
              text-sm
              font-medium
              hover:bg-[#1a4527]
              transition-colors
            "
          >
            Order Bouquet
          </button>
        </div>

        {/* right flowers */}
        <div className="w-full sm:flex-1 flex items-end justify-center sm:justify-end pr-4 sm:pr-10 lg:pr-16 mt-2 sm:mt-0">
          <img
            src={FlowersIllustration}
            alt="Flower illustration"
            className="h-32 sm:h-40 md:h-44 lg:h-48 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
