
// "use client";

// import Image from "next/image";
// import mask3 from "../assets/Mask3.png"
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// const Hero = () => {
//    const [isHovered, setIsHovered] = useState(false);
//      const router = useRouter();
//       const getTrasformStyles = (isHovered) => ({
//         transform: `translateY(${isHovered ? "-100%" : "0"})`,
//       });
//   return (
//     <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
//       <Image
//         src={mask3}
//         alt="Transformational Leadership"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider">
//           MASTER TRANSFORMATIONAL LEADERSHIP
//         </h1>
//         <p className="text-white text-lg md:text-xl max-w-3xl mb-6">
//           Develop essential coaching techniques, enhance leadership abilities,
//           and drive meaningful transformation in businesses and teams
//         </p>
//         <button
//           style={{
//             marginTop: "20px",
//             color: "white",
//             backgroundColor: "#151583",
//             padding: "10px 25px",
//             borderRadius: "20px",
//             fontWeight: "bold",
//             cursor: "pointer",
//             outline: "none",
//             border: "none",
//           }}
//           onClick={() => router.push("/contact-us")}
//           onMouseEnter={() => {
//             setIsHovered(true);
//           }}
//           onMouseLeave={() => {
//             setIsHovered(false);
//           }}
//         >
//           <span className="fancy-button-text-container">
//             <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
//             <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";
import mask3 from "../assets/Mask3.png";
import mobmask3 from "../assets/bannerMob.jpg";

import { useState } from "react";
import { useRouter } from "next/navigation";
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });
  return (
    <>
    <div className="relative w-full h-[700px]">
      <Image
        src={mask3}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:block flex"
        priority
      />
      <Image
        src={mobmask3}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0 md:hidden block"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-4 tracking-wider uppercase">
         Master Coaching Skills for Transformational Leaders
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mb-6">
          Develop essential coaching techniques, enhance leadership abilities,
          and drive meaningful transformation in businesses and teams
        </p>
        <button
          style={{
            marginTop: "20px",
            color: "white",
            backgroundColor: "#151583",
            padding: "10px 25px",
            borderRadius: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            outline: "none",
            border: "none",
          }}
          onClick={() => router.push("https://calendly.com/shrutisonthalia")}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
            <span style={getTrasformStyles(isHovered)}>Book a Consult</span>
          </span>
        </button>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
