// src/components/NewArrival.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Lilly Flower Bouquet",
    image:
      "https://img.freepik.com/premium-photo/attractive-vibrant-white-lily-flowers-arranged-bouquet_880278-10986.jpg",
    badge: "On Sale",
  },
  {
    id: 2,
    name: "Orchid Flower Bouquet",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.wgDVzTGJ7aZ9Or9TpC3ougHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Rose Bouquet",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.URAlRxBJ8ZyVsAQsKf_zqAHaIN?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Gerbera Flower Bouquet",
    image:
      "https://i.pinimg.com/originals/64/f0/c1/64f0c15bb1fce54fd00e7d36b3547ab8.jpg",
  },
  {
    id: 5,
    name: "Sunflower Bouquet",
    image:
      "https://www.lsflowerdesign.com.au/wp-content/uploads/2020/02/Sunflower-bouquet1-scaled.jpeg",
  },
  {
    id: 6,
    name: "Tulip Flower Bouquet",
    image:
      "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1583476465/vendor/5355/catalog/product/2/0/20190417044719_file_5cb6afd71a972.jpg",
  },
  {
    id: 7,
    name: "Mixed Flower Bouquet",
    image:
      "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1680058371/vendor/9028/catalog/product/2/0/20230220031401_file_63f38e39b241e_63f38eb3d0bbe.jpg",
  },
  {
    id: 8,
    name: "Gypso Flower",
    image:
      "https://whitedewflower.com/cdn/shop/products/17A14981-9D76-4F99-98E1-6FC391B12FF4.jpg?v=1689824753&width=1200",
  },
  {
    id: 9,
    name: "Carnation Flower Bouquet",
    image:
      "https://fioredorato.com.sg/cdn/shop/files/2.PeonyPerfection_2048x.jpg?v=1712543816",
  },
];

const NewArrival = () => {
  return (
    <section className="w-full px-3 sm:px-4 md:px-8 pt-8 pb-10">
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-6 gap-4">
        <h2 className="font-serif text-[1.9rem] sm:text-[2.2rem] text-[#1f4d37]">
          Fresh Flower Bouquets
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
