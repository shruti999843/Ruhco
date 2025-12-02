// import React from "react";
// import hero from "../assets/hero/hero.png";

// const Hero = () => {
//   return (
//     <div className="flex flex-col ">
//       <div className="flex flex-col justify-center items-center space-x-4 text-center space-y-6">
//         <span className="text-[1.4rem] leading-none ">Services</span>
//         <span className="text-[2.5rem] leading-none tracking-wider font-semibold uppercase">
//           Master Transformational
//           <br /> Leadership
//         </span>
//         <span className="text-[1.4rem] leading-6 tracking-wider">
//           Develop essential coaching techniques, enhance leadership abilities,
//           and drive meaningful
//           <br /> transformation in businesses and teams
//         </span>
//         <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black border transition cursor-pointer">
//           Book A Session
//         </button>
//       </div>

//       <div className="mt-12">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-col w-[58%] space-y-8 justify-center">
//             <span className="text-[2.5rem] leading-none font-semibold uppercase">
//               Lead with Influence, Not Authority
//             </span>
//             <span className="text-[1.2rem] leading-7 tracking-widest">
//               In today’s fast-changing business landscape, leaders who embrace
//               coaching skills unlock deeper team engagement, higher performance,
//               and sustainable success. Our Coaching Skills Program isn’t just
//               another leadership course—it is a results-driven program designed
//               to enhance how leaders communicate, inspire, and empower their
//               teams, with measurable improvements in engagement, performance,
//               and collaboration.
//             </span>
//           </div>
//           <div className=" w-[38%]">
//             <div
//               className="hidden md:flex w-full min-h-[322px] md:min-h-[322px] lg:min-h-[350px] xl:min-h-[400px] rounded-[40px] bg-cover bg-center"
//               style={{ backgroundImage: `url(${hero.src})` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Hero;

"use client";

// import Image from "next/image";
// import mask3 from "../assets/mask4.png"
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// const Hero = () => {
//    const [isHovered, setIsHovered] = useState(false);
//    const router = useRouter();
//     const getTrasformStyles = (isHovered) => ({
//       transform: `translateY(${isHovered ? "-100%" : "0"})`,
//     });
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
//         <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider uppercase">
//           Coaching Supervision For Aspiring Coaches
//         </h1>
//         <p className="text-white text-lg md:text-xl max-w-3xl mb-6">
//           Enhance your coaching skills with expert guidance, constructive
//           feedback, and practical insights. Build confidence, refine your
//           approach, and elevate your coaching impact
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

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const getTrasformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-screen md:h-screen h-[67vh]">
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
        <source
          src="/super.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
        {/* Mobile Video */}
        <source
          src="/SuperMobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
      </video>

      {/* Sound Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-30 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Content - ONLY ONE H1 */}
      <div className="relative z-20 flex flex-col justify-end items-center text-center px-4 sm:px-6 md:px-8 h-full md:pb-10 pb-3">

        {/* ONE H1 FOR SEO */}
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 tracking-wide uppercase">
          Coaching Supervision for Aspiring Coaches
        </h1>

        <p className="text-white text-sm sm:text-lg md:text-xl max-w-2xl md:mb-6 mb-0">
          Enhance your coaching supervision with expert guidance, constructive
          feedback, and practical insights. Build confidence, refine your
          approach,          and elevate your coaching impact.
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
            <span style={getTrasformStyles(isHovered)}>Book a Session</span>
            <span style={getTrasformStyles(isHovered)}>Book a Session</span>
          </span>
        </button>
      </div>
    </div>
  );
}


