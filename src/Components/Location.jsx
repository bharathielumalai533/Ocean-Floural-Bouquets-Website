// src/components/Location.jsx
import React from "react";

const Location = () => {
  return (
    <section
      id="location"
      className="w-full bg-[#f6f1e8] px-4 md:px-8 py-10 md:py-14"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7f7a63] mb-2">
            Visit Us
          </p>
          <h2 className="font-serif text-[1.9rem] sm:text-[2.2rem] text-[#1f4d37]">
            Our Boutique Shop Location
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4e6555] max-w-xl">
            Drop by our studio to explore bouquets in person or pick up your
            custom arrangements.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* Map */}
          <div className="rounded-[20px] overflow-hidden shadow-md border border-[#e3dac9]">
            <div className="relative w-full pt-[65%]">
              <iframe
                title="La Flora Boutique on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.823127216507!2d80.21951097507336!3d12.789990187508929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ3JzI0LjAiTiA4MMKwMTMnMTkuNSJF!5e0!3m2!1sen!2sin!4v1764856234631!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Address + details */}
          <div className="space-y-5 text-[#1f4d37]">
            <div>
              <h3 className="font-serif text-xl mb-1">Ocean Floral Bouquets</h3>
              {/*<p className="text-sm sm:text-base">
                143 Grand Ave<br />
                Los Angeles, CA 90012
              </p>*/}
            </div>

            <div className="space-y-1 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Phone: </span>
                +91 95006 17604
              </p>
              {/*<p>
                <span className="font-semibold">Email: </span>
                hello@lafloraboutique.com
              </p>*/}
            </div>

            <div className="space-y-1 text-sm sm:text-base">
              <p className="font-semibold">Store Hours</p>
              <p>27/7 we are available for you</p>
            </div>

            <button
              className="
                inline-flex items-center justify-center
                px-5 py-2.5
                rounded-full
                bg-[#215632]
                text-[#f6f1e8]
                text-sm
                hover:bg-[#1a4527]
                transition-colors
              "
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.823127216507!2d80.21951097507336!3d12.789990187508929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ3JzI0LjAiTiA4MMKwMTMnMTkuNSJF!5e0!3m2!1sen!2sin!4v1764856234631!5m2!1sen!2sin",
                  "_blank"
                )
              }
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
