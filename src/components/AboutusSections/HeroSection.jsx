import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-72 bg-cover bg-center" style={{ backgroundImage: "url('imgs/aboutUs/hero.avif')" }}>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default HeroSection;
