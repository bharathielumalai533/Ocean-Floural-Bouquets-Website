// src/components/NewArrival.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Mugs",
    image:
      "https://d1mhq73dsagkr8.cloudfront.net/media/product/1/1/1672104663_11.jpg",
    badge: "On Sale",
  },
  {
    id: 2,
    name: "Cushions",
    image:
      "https://i.etsystatic.com/15444160/r/il/d4b6f1/4949034959/il_1080xN.4949034959_npvm.jpg",
  },
  {
    id: 3,
    name: "Sippers",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.t7xt_hD7tBZHxoyEehxBSQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Photo Frames",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.OnuorEoxkUjGsXbsCI8JvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    name: "Neon Lights",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.kSWdirzjn_yBteuEkw1B_gHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    name: "stationary",
    image:
      "https://th.bing.com/th/id/R.6d6aa558aa5eac599b077400295d7ef3?rik=PKQZDJiqN%2fIZig&riu=http%3a%2f%2fwww.chaarpai.com%2fcdn%2fshop%2fproducts%2f24_5111e7ac-5b71-4099-80bd-536bd666523f.jpg%3fv%3d1672480946&ehk=XHOf%2fJN6UZJUZnUE0kFatn078z7sUiMExS68lqV7RQs%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 7,
    name: "Flowers",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.mcrW_A7ImLTGPaXiXbeTPQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "combos",
    image:
      "https://pickerworld.com/wp-content/uploads/2022/02/Personalized-Gifts-combo.jpg",
  },
  {
    id: 9,
    name: "Hampers",
    image:
      "https://i.pinimg.com/originals/2d/a5/a3/2da5a3778146f030510aa91502913022.jpg",
  },
  {
    id: 10,
    name: "Fridge Magnets",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.flPH43DifqWIRHuvPD_teAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 11,
    name: "Accessories",
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2018-11/19/16/asset/buzzfeed-prod-web-06/sub-buzz-10969-1542663506-1.jpg",
  },
  {
    id: 12,
    name: "Caricatures",
    image:
      "https://i.etsystatic.com/38359146/c/600/600/0/0/il/b0e8e9/4409495201/il_800x800.4409495201_7g7z.jpg",
  },
];

const NewArrival = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-8 pb-10">
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-6 gap-4">
        <h2 className="font-serif text-[1.9rem] sm:text-[2.2rem] text-[#1f4d37]">
          Personalised Gifts
        </h2>

        
      </div>

      {/* Product cards */}
      <div className="
        grid
        gap-4 sm:gap-6 lg:gap-8
        grid-cols-2          /* 2 per row on smallest screens */
        xs:grid-cols-3       /* if you have an xs breakpoint; otherwise remove */
        md:grid-cols-3
        xl:grid-cols-4
      ">
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
            <div className="relative px-3 sm:px-4 mb-3 flex-1 flex items-center justify-center">
              {item.badge && (
                <span className="absolute left-4 sm:left-5 top-4 rounded-full bg-[#f7f1e7] px-3 py-1 text-xs text-[#1f4d37] shadow-sm">
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
            <div className="px-4 sm:px-6 mt-1">
              <p className="font-serif text-sm sm:text-lg text-[#1f4d37] mb-1">
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

export default NewArrival;
