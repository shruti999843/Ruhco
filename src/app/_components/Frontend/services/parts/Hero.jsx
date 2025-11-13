
// "use client";
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
//           <source src="/Ser.mp4" type="video/mp4" />
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
//           OUR EXECUTIVE COACHING INTEGRATES:
//         </h1>
//         <p className="text-white text-lg md:text-xl max-w-4xl mb-6">
//           Multi-Touchpoint Learning for Sustainable Impact
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
//             <span style={getTrasformStyles(isHovered)}>Book a Session</span>
//             <span style={getTrasformStyles(isHovered)}>Book a Session</span>
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

  const getTransformStyles = (hover) => ({
    transform: `translateY(${hover ? "-100%" : "0"})`,
    transition: "transform 0.3s ease-in-out",
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
      video.play().catch((err) => {
        console.warn("Autoplay failed", err);
      });
    }
  }, []);

  return (
    <>
      <div className="relative w-full h-screen md:block hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="/Ser.mp4" type="video/mp4" />
          </video>

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-5 right-5 z-30 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-end items-center text-center px-4 sm:px-6 md:px-8 h-full pb-10">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 tracking-wide uppercase">
          Our executive coaching encompasses
          </h1>
          <p className="text-white text-sm sm:text-lg md:text-xl max-w-2xl mb-6">
            Multi-Touchpoint Learning for Sustainable Impact
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
              <span style={getTransformStyles(isHovered)}>Book a Session</span>
              <span style={getTransformStyles(isHovered)}>Book a Session</span>
            </span>
          </button>
        </div>
      </div>
      <div className="relative w-full h-[67vh] md:hidden block">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="/SerMobile.mp4" type="video/mp4" />
          </video>

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-5 right-5 z-30 bg-black bg-opacity-50 p-2 rounded-full text-white"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end items-center text-center px-4 sm:px-6 md:px-8 h-full md:pb-10 pb-3">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-2 tracking-wide uppercase">
            Coaching Supervision for Aspiring Coaches
          </h1>
          <p className="text-white text-sm sm:text-lg md:text-xl max-w-2xl md:mb-6 mb-0">
            Enhance your coaching skills with expert guidance, constructive
            feedback, and practical insights. Build confidence, refine your
            approach, and elevate your coaching impact.
          </p>
          <button
            style={{
              margin: "20px 0",
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
              <span style={getTransformStyles(isHovered)}>Book a Session</span>
              <span style={getTransformStyles(isHovered)}>Book a Session</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
