// src/components/Banner1.jsx
import React from "react";

const Banner1 = () => {
  return (
    <section className="w-full bg-[#f6f1e8]">
      {/* background image wrapper */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://framerusercontent.com/images/hG3Ob3hD5iVjF0XEXqFZKVjw.jpg" // replace with your bouquet image
          alt="Custom bouquet"
          className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover"
        />

        {/* centered card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div
            className="
              bg-[#f6f1e8]
              rounded-[28px]
              px-8 sm:px-10 md:px-14
              py-8 sm:py-9 md:py-10
              text-center
              text-[#1f4d37]
              max-w-xl
              shadow-[0_16px_40px_rgba(0,0,0,0.18)]
            "
          >
            {/* badge */}
            <span className="inline-flex items-center justify-center rounded-full border border-[#d9cfbe] px-4 py-1 text-[11px] tracking-[0.18em] uppercase mb-4">
              Custom Blooms
            </span>

            {/* heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.2rem] leading-snug mb-4">
              Special Flowers for
              <br />
              Your Special Moments
            </h2>

            {/* subtext */}
            <p className="text-sm sm:text-[15px] mb-6">
              We craft unique flowers for your moments.
            </p>

            {/* button */}
            <button
              className="
                inline-flex items-center justify-center
                px-6 sm:px-7 py-2.5
                rounded-full
                bg-[#215632]
                text-[#f6f0e6]
                text-sm
                font-medium
                hover:bg-[#1a4527]
                transition-colors
              "
            >
              Let&apos;s Create
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
