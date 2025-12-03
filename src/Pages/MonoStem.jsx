// src/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import AllHero3 from "../Components/AllHero3";
import MonoStem from "../Components/MonoStem"
import Banner1 from "../Components/Banner1";
import HowItWorks from "../Components/HowItWorks";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div
      className="
        bg-[#f6f1e8]
        flex lg:flex-row flex-col
        min-h-screen
        lg:h-screen
        lg:overflow-hidden
      "
    >
      {/* Navbar: sidebar on lg, top bar on small (handled inside component) */}
      <Navbar />

      {/* Main content */}
      <main
        className="
          flex-1 px-4 md:px-8 pb-10 pt-4 lg:pt-10
          lg:overflow-y-auto
        "
      >
        <AllHero3 />
        <hr />
        <MonoStem />
        <Banner1 />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
