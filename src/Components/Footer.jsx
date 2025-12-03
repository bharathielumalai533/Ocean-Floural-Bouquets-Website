// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f1e8] border-t border-[#e3dac9] px-4 md:px-8 pt-12 pb-10">
      <div className="max-w-6xl mx-auto grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.8fr)]">
        {/* Left: brand + contact */}
        <div>
          <div className="mb-4">
            <p className="font-serif text-3xl leading-tight text-[#1f4d37]">
              Ocean Floral
              <br />
              Bouquets
            </p>
          </div>

          <p className="text-sm text-[#1f4d37] leading-relaxed mb-6 max-w-sm">
            We create handcrafted flower bouquets with same‑day delivery across
            Los Angeles. Fresh, elegant, and made with care.
          </p>

          <ul className="space-y-2 text-sm text-[#1f4d37]">
            <li>+91 95006 17604 <br /> +91 86107 91637</li>
            <li>21, Susila Nagar, Axis Bank Complex, Kelambakkam - 603103</li>
            <li>oceanfloral_official</li>
          </ul>
        </div>

        {/* Right: link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-[#1f4d37] text-sm">
          {/* Categories */}
          <div>
            <h4 className="uppercase tracking-[0.18em] text-xs text-[#7f7a63] mb-3">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>All Bouquets</li>
              <li>Mixed Blooms</li>
              <li>Mono Stems</li>
              <li>On Sale</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="uppercase tracking-[0.18em] text-xs text-[#7f7a63] mb-3">
              Follow Us
            </h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>X (Twitter)</li>
              <li>Pinterest</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="uppercase tracking-[0.18em] text-xs text-[#7f7a63] mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Delivery</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="uppercase tracking-[0.18em] text-xs text-[#7f7a63] mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>Refund Policy</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
