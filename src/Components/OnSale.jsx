// src/components/NewArrival.jsx
import React from "react";
import img1 from "../Asserts/garland.jpg"

const products = [
  {
    id: 1,
    name: "Garland",
    image:img1
  },
  {
    id: 2,
    name: "Car Decoration",
    image:
      "https://cdn.balloondekor.com/15/1739887278936.webp",
  },
  {
    id: 3,
    name: "Events Hall Decoration",
    image:
      "https://i.pinimg.com/originals/9c/01/f5/9c01f50987a59c007d04c0a768fd6ebd.jpg",
  },
  {
    id: 4,
    name: "Customised Gifts",
    image:
      "https://cdnnew.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-wiser-and-bolder-gift-set-406071-m.jpg",
  },
  {
    id: 5,
    name: "Customised Flower Bouquet",
    image:
      "https://apis.xogrp.com/media-api/images/2b89c14a-70ca-11e4-843f-22000aa61a3e",
  },
];

const OnSale = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-8 pb-10">
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-6 gap-4">
        <h2 className="font-serif text-[1.9rem] sm:text-[2.2rem] text-[#1f4d37]">
          Our Services
        </h2>

        
      </div>

      {/* Product cards */}
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((item) => (
          <article
            key={item.id}
            className="
              group
              bg-[#f7f1e7]
              rounded-[20px]
              pt-3 pb-5
              flex flex-col
              shadow-[0_0_0_1px_rgba(0,0,0,0.03)]
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {/* image area */}
            <div className="relative px-4 mb-3 flex-1 flex items-center justify-center">
              {item.badge && (
                <span className="absolute left-5 top-4 rounded-full bg-[#f7f1e7] px-3 py-1 text-xs text-[#1f4d37] shadow-sm">
                  {item.badge}
                </span>
              )}

              <div className="w-full rounded-[18px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full h-full
                    aspect-[4/5]
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />
              </div>
            </div>

            {/* text area */}
            <div className="px-5 sm:px-6 mt-1">
              <p className="font-serif text-base sm:text-lg text-[#1f4d37] mb-1">
                {item.name}
              </p>

              <div className="flex items-baseline gap-2 text-xs sm:text-sm">
                {item.oldPrice && (
                  <span className="text-[#b7a894] line-through">
                    {item.oldPrice}
                  </span>
                )}
                <span className="text-[#1f4d37]">{item.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OnSale;
