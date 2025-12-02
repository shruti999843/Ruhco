"use client";

// import Image from "next/image";
// import publication from "../assets/hero/publication.png";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "@/app/_components/Header";
// const Hero = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const router = useRouter();
//   const getTrasformStyles = (isHovered) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0"})`,
//   });
//   return (
//     <div className="relative w-full h-[600px]">
//       <Image
//         src={publication}
//         alt="Transformational Leadership"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <div>
//           <h1 className="text-white text-2xl md:text-[2.5rem] font-semibold mb-4 tracking-wider">
//             Curated Research. Practical Wisdom. Real Impact
//           </h1>
//           <p className="text-white text-lg md:text-xl max-w-5xl mb-6">
//             Explore insightful research by Shruti Sonthalia, covering
//             leadership, business strategy, and market trends. These publications
//             offer practical wisdom to help professionals navigate and thrive in
//             today’s dynamic business world.
//           </p>
//           <button
//             style={{
//               marginTop: "20px",
//               color: "white",
//               backgroundColor: "#151583",
//               padding: "10px 25px",
//               borderRadius: "20px",
//               // fontWeight: "bold",
//               cursor: "pointer",
//               outline: "none",
//               border: "none",
//             }}
//             onClick={() => router.push("/contact-us")}
//             onMouseEnter={() => {
//               setIsHovered(true);
//             }}
//             onMouseLeave={() => {
//               setIsHovered(false);
//             }}
//           >
//             <span className="fancy-button-text-container">
//               <span style={getTrasformStyles(isHovered)}>
//                 Discuss With Shruti
//               </span>
//               <span style={getTrasformStyles(isHovered)}>
//                 Discuss With Shruti
//               </span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Volume2, VolumeX } from "lucide-react"; // You can use any icon library
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const router = useRouter();
//   const getTrasformStyles = (isHovered) => ({
//     transform: `translateY(${isHovered ? "-100%" : "0"})`,
//   });
//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = true;
//       video.play().catch((err) => {
//         console.warn("Autoplay failed", err);
//       });
//     }
//   }, []);

//   return (
//     <div className="relative w-full h-[screen]">
//       <div className="w-full relative">
//         <video
//           ref={videoRef}
//           width="100%"
//           height="100%"
//           autoPlay
//           loop
//           muted
//           playsInline
//           controls={false}
//           style={{ objectFit: "cover" }}
//         >
//           <source src="/Publications.mp4" type="video/mp4" />
//         </video>

//         {/* Sound Toggle Button */}
//         <button
//           onClick={toggleMute}
//           className="absolute bottom-5 right-5 z-100 bg-black bg-opacity-50 p-2 rounded-full text-white"
//         >
//           {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//         </button>
//       </div>

//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-5">
//         <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 tracking-wider uppercase">
//           CURATED RESEARCH. PRACTICAL WISDOM. REAL IMPACT
//         </h1>
//         <p className="text-white text-lg md:text-md max-w-5xl mb-6">
//           Explore insightful research by Shruti Sonthalia, covering leadership,
//           business strategy, and market trends. These publications offer
//           practical wisdom to help professionals navigate and thrive in today’s
//           dynamic business world.
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
//           onClick={() =>
//             router.push(
//               "https://calendly.com/shrutisonthalia"
//             )
//           }
//           onMouseEnter={() => {
//             setIsHovered(true);
//           }}
//           onMouseLeave={() => {
//             setIsHovered(false);
//           }}
//         >
//           <span className="fancy-button-text-container">
//             <span style={getTrasformStyles(isHovered)}>
//               Discuss With Shruti
//             </span>
//             <span style={getTrasformStyles(isHovered)}>
//               Discuss With Shruti
//             </span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;



"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => console.warn("Autoplay failed", err));
    }
  }, []);

  return (
    <div className="relative w-full h-[67vh] md:h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        {/* Desktop Video */}
        <source src="/Publications.mp4" media="(min-width:768px)" type="video/mp4" />

        {/* Mobile Video */}
        <source src="/PublicationsMobile.mp4" media="(max-width:767px)" type="video/mp4" />
      </video>

      {/* Sound Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 pb-5 md:pb-12">
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-3 tracking-wide uppercase">
          CURATED RESEARCH. PRACTICAL WISDOM. REAL IMPACT
        </h1>

        <p className="text-white text-sm sm:text-lg md:text-md max-w-4xl mb-4 md:mb-6">
          Explore insightful research by Shruti Sonthalia, covering leadership,
          business strategy, and market trends. These publications offer
          practical wisdom to help professionals navigate and thrive in today’s
          dynamic business world.
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="fancy-button-text-container">
            <span style={getTrasformStyles(isHovered)}>Discuss With Shruti</span>
            <span style={getTrasformStyles(isHovered)}>Discuss With Shruti</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
