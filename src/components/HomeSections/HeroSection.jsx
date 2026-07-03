import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true); // Trigger animation after a delay
    }, 200); // Adjust the delay time as needed
  }, []);

  return (
    <div className="hero h-screen flex items-center justify-start relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('/imgs/hero.avif')",
        }}
      ></div>

      {/* Fading Text */}
      <div className="relative z-10 pl-8"> {/* Added padding-left */}
        <h1
          className={`text-4xl md:text-6xl font-bold text-transparent tracking-wider transition-opacity duration-1000 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
          style={{
            letterSpacing: "0em",
            direction: "ltr",
            fill: "rgb(0, 0, 0)",
            fontSize: "41.8668px",
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: "bold",
            fontStyle: "normal",
            background: "linear-gradient(90deg, #00AEEF 0%, #E0F4FC 100%)",
            WebkitBackgroundClip: "text", // This makes the gradient work on text
            color: "transparent",
            position: "relative",
            zIndex: "1",
            textShadow: "2.12px 2.12px 1px #FFFFFF", // Shadow effect
          }}
        >
          VISION TECH BARCODE SOLUTION
        </h1>
        <p
          className={`mt-4 text-xl md:text-2xl text-white font-semibold transition-opacity duration-1000 delay-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}
        >
          Premium Label Printing & Barcode Solutions
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
