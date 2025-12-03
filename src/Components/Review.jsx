// src/components/Review.jsx
import React from "react";

const reviews = [
  {
    id: 1,
    bouquet: "White Reverie",
    quote:
      "The bouquet was even more beautiful than the photos. Fast delivery and amazing quality!",
    author: "Alisa M.",
    rating: "5.0",
    image:
      "https://framerusercontent.com/images/4fjG2EQX0K0tTRhriGUBZt27Qdc.jpg?scale-down-to=1024", // replace
  },
  {
    id: 2,
    bouquet: "Skyline Bloom",
    quote:
      "Ordered for my mom’s birthday – she cried happy tears. Thank you for making it special!",
    author: "Daniel K.",
    rating: "5.0",
    image:
      "https://framerusercontent.com/images/zDuutEsoJYKPX4KWjsDhYTVewE.jpg?scale-down-to=1024", // replace
  },
  {
    id: 3,
    bouquet: "Floral Flirt",
    quote:
      "Loved the design and care in the packaging. You can tell these are handcrafted with love.",
    author: "Lina G.",
    rating: "4.9",
    image:
      "https://framerusercontent.com/images/P7NySzkKzg3ndAwLXqNIaI4lRI.jpg?scale-down-to=1024", // replace
  },
];

const Review = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-10 pb-12">
      {/* header row */}
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1f4d37]">
          What Customers Say
        </h2>

        <button className="text-sm sm:text-base text-[#1f4d37] hover:text-[#2f6b4b]">
          View All &rsaquo;
        </button>
      </div>

      {/* cards */}
      <div className="grid gap-5 lg:gap-6 grid-cols-1 md:grid-cols-3">
        {reviews.map((item) => (
          <article
            key={item.id}
            className="
              bg-[#f6f1e8]
              rounded-[24px]
              overflow-hidden
              shadow-[0_0_0_1px_rgba(0,0,0,0.03)]
              flex flex-col
            "
          >
            {/* top text block */}
            <div className="px-6 pt-5 pb-6 flex-1">
              {/* bouquet label */}
              <p className="text-xs uppercase tracking-[0.22em] text-[#7f7a63] mb-2">
                Bouquet:{" "}
                <span className="normal-case tracking-normal text-[#1f4d37]">
                  {item.bouquet}
                </span>
              </p>

              {/* quote */}
              <p className="font-serif text-lg leading-relaxed text-[#1f4d37] mb-5">
                “{item.quote}”
              </p>

              {/* bottom meta row */}
              <div className="flex items-center justify-between text-sm text-[#1f4d37]">
                <span>{item.author}</span>

                <span className="flex items-center gap-1">
                  <span className="text-[#1f4d37] text-base">★</span>
                  <span>{item.rating}</span>
                </span>
              </div>
            </div>

            {/* image block */}
            <div className="w-full">
              <img
                src={item.image}
                alt={item.bouquet}
                className="w-full h-auto object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Review;
