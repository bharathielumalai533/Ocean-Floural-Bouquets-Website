// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    scrollToId(id);
    if (open) setOpen(false);
  };

  const handleAllBouquets = () => {
    navigate("/all-bouquets");
    if (open) setOpen(false);
  };

  const handleMixedBlooms = () => {
    navigate("/mixed-blooms");
    if (open) setOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="
          hidden lg:flex
          h-screen
          w-72
          bg-[#f6f1e8]
          text-[#1f4d37]
          border-r border-[#e3dac9]
          font-serif
          flex-col justify-between
          px-8 py-10
        "
      >
        <div>
          <div className="mb-12">
            <p className="text-3xl leading-none">Ocean Floral</p>
            <p className="text-3xl leading-none">Bouquets</p>
          </div>

          <div className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7f7a63] mb-4">
              Categories
            </p>
            <nav className="space-y-3 text-lg">
              <button
                onClick={handleAllBouquets}
                className="block text-left hover:text-[#2f6b4b]"
              >
                All Bouquets
              </button>
              <button
                onClick={handleMixedBlooms}
                className="block text-left hover:text-[#2f6b4b]"
              >
                Mixed Blooms
              </button>
              <button
                onClick={() => handleNavClick("mono-stems")}
                className="block text-left hover:text-[#2f6b4b]"
              >
                Mono Stems
              </button>
              <button
                onClick={() => handleNavClick("on-sale")}
                className="block text-left hover:text-[#2f6b4b]"
              >
                On Sale
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7f7a63]">
              Contact Info
            </p>
            <div className="space-y-1 text-lg">
              <p>+91 95006 17604 <br /> +91 86107 91637</p>
              <p>21, Susila Nagar, Axis Bank Complex, Kelambakkam - 603103</p>
            </div>
            <div className="pt-4 space-y-2 text-lg">
              <button
                onClick={() => handleNavClick("delivery")}
                className="block text-left hover:text-[#2f6b4b]"
              >
                Delivery
              </button>
              <button
                onClick={() => handleNavClick("about-us")}
                className="block text-left hover:text-[#2f6b4b]"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="block text-left hover:text-[#2f6b4b]"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="text-xs text-[#7f7a63] flex gap-1">
          <button className="hover:text-[#2f6b4b]">Refund Policy</button>
          <span>·</span>
          <button className="hover:text-[#2f6b4b]">Terms &amp; Conditions</button>
        </div>
      </aside>

      {/* Mobile / tablet top bar */}
      <header
        className="
          lg:hidden
          sticky top-0 z-20
          w-full
          bg-[#f6f1e8]
          text-[#1f4d37]
          border-b border-[#e3dac9]
          font-serif
        "
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-xl leading-tight">Ocean Floral</p>
            <p className="text-xl leading-tight">Bouquets</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center text-sm text-[#1f4d37]">
              {/* phone icon omitted for brevity */}
              <span>+91 95006 17604 <br /> +91 89107 91637</span>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="
                w-9 h-9 rounded-full border border-[#d9cfbe]
                flex items-center justify-center
                hover:bg-[#efe5d5]
                transition-colors
              "
              aria-label="Toggle menu"
            >
              {open ? (
                <span className="relative block w-3.5 h-3.5">
                  <span className="absolute inset-0 w-[2px] bg-[#1f4d37] rotate-45 translate-x-[6px]" />
                  <span className="absolute inset-0 w-[2px] bg-[#1f4d37] -rotate-45 translate-x-[6px]" />
                </span>
              ) : (
                <span className="block w-4 h-[2px] bg-[#1f4d37] rounded-sm" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="bg-[#f6f1e8] text-[#1f4d37] font-serif">
            {/* Categories block */}
            <div className="px-4 pt-6 pb-10">
              <p className="text-xs tracking-[0.25em] uppercase text-[#7f7a63] mb-4">
                Categories:
              </p>
              <nav className="space-y-3 text-lg">
                <button
                  onClick={handleAllBouquets}
                  className="block text-left hover:text-[#2f6b4b]"
                >
                  All Bouquets
                </button>
                <button
                  onClick={handleMixedBlooms}
                  className="block text-left hover:text-[#2f6b4b]"
                >
                  Mixed Blooms
                </button>
                <button
                  onClick={() => handleNavClick("mono-stems")}
                  className="block text-left hover:text-[#2f6b4b]"
                >
                  Mono Stems
                </button>
                <button
                  onClick={() => handleNavClick("on-sale")}
                  className="block text-left hover:text-[#2f6b4b]"
                >
                  On Sale
                </button>
              </nav>
            </div>

            {/* Contact band */}
            <div className="border-t border-[#e3dac9] bg-[#f4ebdd] px-4 py-6">
              <p className="text-xs tracking-[0.25em] uppercase text-[#7f7a63] mb-3">
                Contact Info:
              </p>
              <p className="text-lg mb-1">+91 95006 17604 <br /> +91 86107 91637</p>
              <p className="text-lg">21, Susila Nagar, Axis Bank Complex, Kelambakkam - 603103</p>
            </div>

            {/* Bottom links */}
            <div className="px-4 py-5 space-y-4 text-[#1f4d37]">
              <div className="flex flex-wrap gap-6 text-lg">
                <button
                  onClick={() => handleNavClick("delivery")}
                  className="hover:text-[#2f6b4b]"
                >
                  Delivery
                </button>
                <button
                  onClick={() => handleNavClick("about-us")}
                  className="hover:text-[#2f6b4b]"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-[#2f6b4b]"
                >
                  Contact
                </button>
              </div>

              <div className="text-xs text-[#7f7a63] flex flex-wrap gap-1">
                <button className="hover:text-[#2f6b4b]">Refund Policy</button>
                <span>·</span>
                <button className="hover:text-[#2f6b4b]">
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
