"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  return (
    <div className="relative w-full">
      <video
        width="100%"
        className="h-[60vh] md:h-screen object-cover"
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>

      {/* ONE SINGLE H1 FOR SEO — responsive using CSS */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-6 md:px-8 pb-10">
        <div className="max-w-4xl">

          {/* ONE H1 ONLY */}
          <h1 className="text-white text-2xl md:text-[2.5rem] font-semibold mb-4 tracking-wider uppercase">
            Organisational Culture
          </h1>

          <p className="text-white text-base md:text-xl mb-6 leading-relaxed">
            Organizational culture defines workplace values and behaviors,
            shaping employee engagement and productivity. A strong culture
            fosters collaboration, innovation, and long-term success.
          </p>

          <button
            className="bg-[#151583] px-6 py-3 rounded-full text-white font-medium transition cursor-pointer"
            onClick={() =>
              router.push("https://calendly.com/shrutisonthalia")
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="fancy-button-text-container">
              <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
              <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
