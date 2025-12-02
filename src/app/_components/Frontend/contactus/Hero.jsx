// "use client";

// import Image from "next/image";
// import blog from "./assets/bgCont.jpg";
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
//     <div className="relative w-full h-[700px]">
//       <Image
//         src={blog}
//         alt="Transformational Leadership"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />
//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

//       <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-42">
//         <h2 className="text-[2.5rem] font-bold mt-2 tracking-wider w-[100%] text-white">
//           START YOUR JOURNEY WITH RUHCO TODAY
//         </h2>
//         <p className="mt-4 text-white max-w-xxl mx-auto">
//           Reach out today for expert guidance, personalized coaching, and
//           strategies to unlock your full potential.
//         </p>
//         <p className="mt-4 text-white max-w-xxl mx-auto">
//           You can also reach out to us at support@ruhco.org
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
import blog from "./assets/bgCont.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_components/Header";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const getTransformStyles = (isHovered) => ({
    transform: `translateY(${isHovered ? "-100%" : "0"})`,
    transition: "transform 0.3s ease-in-out",
  });

  return (
    <div className="relative w-full h-[90vh]">
      <Image
        src={blog}
        alt="Transformational Leadership"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end items-center text-center px-4 md:px-8 py-10 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 tracking-wide text-white">
          START YOUR JOURNEY WITH RUHCO TODAY
        </h1>
        <p className="mt-4 text-sm md:text-lg text-white max-w-xl mx-auto">
          Reach out today for expert guidance, personalized coaching, and
          strategies to unlock your full potential.
        </p>
        <p className="mt-2 text-sm md:text-base text-white max-w-xl mx-auto">
          You can also reach out to us at support@ruhco.org
        </p>
        <button
          className="mt-6 bg-[#151583] text-white font-bold py-2 px-6 rounded-full"
          onClick={() =>
            router.push(
              "https://calendly.com/shrutisonthalia"
            )
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative inline-block overflow-hidden h-6">
            <span className="block" style={getTransformStyles(!isHovered)}>
              Book a Consult
            </span>
            <span
              className="block absolute left-0 top-0"
              style={getTransformStyles(isHovered)}
            >
              Book a Consult
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
