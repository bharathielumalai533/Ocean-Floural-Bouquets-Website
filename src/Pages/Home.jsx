// src/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NewArrival from "../Components/NewArrival";
import Client from "../Components/ClientChoice";
import SpecialOffer from "../Components/SpecialOffer";
import OnSale from "../Components/OnSale";
import Review from "../Components/Review";
import About from "../Components/About";
import Location from "../Components/Location";
import HowItWorks from "../Components/HowItWorks";
import Footer from "../Components/Footer";

const Home = () => {
  const handleWhatsAppClick = () => {
    const phone = "919500617604"; // replace with your client's number
    const url = `https://wa.me/${phone}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="
        relative
        bg-[#f6f1e8]
        flex lg:flex-row flex-col
        min-h-screen
        lg:h-screen
        lg:overflow-hidden
      "
    >
      <Navbar />

      <main
        className="
          flex-1 px-4 md:px-8 pb-10 pt-4 lg:pt-10
          lg:overflow-y-auto
        "
      >
        <Hero />
        <NewArrival />
        <hr />
        <Client />
        <SpecialOffer />
        <OnSale />
        <hr />
        <Review />
        <About />
        <hr />
        <Location />
        <br />
        <HowItWorks />
        <hr />
        <Footer />
      </main>

      {/* Floating WhatsApp button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-5 right-5
          z-30
          w-12 h-12
          rounded-full
          bg-[#25D366]
          shadow-lg
          flex items-center justify-center
          hover:bg-[#1ebe5d]
          transition-colors
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M16.01 5.2c-4.96 0-9 4.03-9.01 8.99 0 1.58.42 3.13 1.23 4.49L7 27l8.53-1.12c1.3.57 2.69.87 4.11.87h.01c4.96 0 9-4.03 9.01-8.99.01-2.4-.92-4.65-2.6-6.35a8.93 8.93 0 0 0-6.35-2.6zm5.27 13.16c-.22.62-1.27 1.18-1.78 1.25-.46.07-1.03.1-1.67-.1-.38-.12-.87-.28-1.5-.55-2.64-1.15-4.35-3.84-4.48-4.02-.13-.18-1.07-1.43-1.07-2.73 0-1.3.68-1.93.92-2.19.24-.26.53-.33.7-.33h.5c.16 0 .38-.06.6.46.22.52.75 1.81.82 1.94.06.13.1.28.02.46-.08.18-.12.28-.24.43-.13.15-.26.33-.37.44-.12.12-.24.25-.1.49.13.24.58.95 1.25 1.54.86.76 1.59 1 1.83 1.11.24.12.39.1.54-.06.15-.16.64-.75.82-1.01.18-.26.34-.21.57-.13.24.08 1.54.73 1.8.86.27.13.45.19.52.3.06.11.06.64-.16 1.26z" />
        </svg>
      </button>
    </div>
  );
};

export default Home;
