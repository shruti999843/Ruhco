// import Image from "next/image";
// import React from "react";
// import img from "../assets/stand/1.jpg"
// import img2 from "../assets/stand/2.jpg";
// import img3 from "../assets/stand/3.jpg";
// import img4 from "../assets/stand/4.jpg";
// import img5 from "../assets/stand/5.jpg";
// import img6 from "../assets/1.png";


// const features = [
//   {
//     title: "Data-Driven",
//     description:
//       "We utilize proprietary diagnostics and benchmarking tools to assess vision alignment and impact. Our tools are research-backed, topical modules. Our strategic organisational mapping helps leaders ascertain their present status and align it with their future goals.",
//     image: img,
//   },
//   {
//     title: "Incorporate PESTLE Analysis",
//     description:
//       "We use PESTLE analysis to assess external factors impacting your organization and help you adapt your strategy.",
//     image: img2,
//   },
//   {
//     title: "End-to-End Implementation",
//     description:
//       "From strategy to execution, we partner with you throughout your transformation journey.",
//     image: img,
//   },
//   {
//     title: "Employee Engagement",
//     description:
//       "We foster environments that empower employees, boosting morale and productivity.",
//     image: img,
//   },
//   {
//     title: "Customized for Your Industry",
//     description:
//       "Our solutions are tailored to the specific challenges and needs of your industry.",
//     image: img,
//   },
//   {
//     title: "Proven Results",
//     description:
//       "Our data-backed approach delivers measurable improvements across your organization.",
//     image: img,
//   },
// ];

// const topFeatures = [
//   {
//     title: "Data-Driven",
//     description:
//       "We utilize proprietary diagnostics and benchmarking tools to assess vision alignment and impact. Our tools are research-backed, topical modules. Our strategic organisational mapping helps leaders ascertain their present status and align it with their future goals.",
//     image: img,
    
//   },
//   {
//     title: "Incorporate PESTLE Analysis",
//     description:
//       "We use PESTLE analysis to assess external factors impacting your organization and help you adapt your strategy.",
//     image: img2,
//   },
// ];

// const bottomFeatures = [
//   {
//     title: "End-to-End Implementation",
//     description:
//       "From strategy to execution, we partner with you throughout your transformation journey.",
//     image: img3,
//   },
//   {
//     title: "Employee Engagement",
//     description:
//       "We foster environments that empower employees, boosting morale and productivity.",
//     image: img4,
//   },
//   {
//     title: "Customized for Your Industry",
//     description:
//       "Our solutions are tailored to the specific challenges and needs of your industry.",
//     image: img5,
//   },
//   {
//     title: "Proven Results",
//     description:
//       "Our data-backed approach delivers measurable improvements across your organization.",
//     image: img6,
//   },
// ];

// const WhyWeStandApart = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-10">
//       <div className="text-center mb-12">
//         <h3 className="text-indigo-800 font-medium text-xl">
//           The RuhCo Approach
//         </h3>
//         <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize my-2">
//           Why We Stand Apart
//         </h2>
//       </div>

//       {/* Top Row - 2 Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {topFeatures.map((feature, index) => (
//           <FeatureCard key={index} feature={feature} />
//         ))}
//       </div>

//       {/* Bottom Row - 4 Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {bottomFeatures.map((feature, index) => (
//           <FeatureCard key={index} feature={feature} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const FeatureCard = ({ feature }) => {
//   return (
//     <div className="relative group rounded-[2rem] overflow-hidden shadow-lg h-64">
//       {/* Image Background */}
//       <div className="relative w-full h-full group">
//         <Image
//           src={feature.image}
//           alt={feature.title}
//           fill
//           className="object-cover transition-all duration-500 group-hover:scale-105"
//         />
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40 transition-all duration-500 group-hover:opacity-0"></div>

//         {/* Centered Title Initially */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h3 className="text-xl font-bold text-white text-center transition-opacity duration-500 group-hover:opacity-0 px-4">
//             {feature.title}
//           </h3>
//         </div>
//       </div>

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-5 text-center">
//         <div className="absolute inset-0 bg-black opacity-20 transition-all duration-500"></div>
//         <h3 className="text-xl font-bold mb-2 relative z-10">
//           {feature.title}
//         </h3>
//         <p className="text-sm relative z-10">{feature.description}</p>
//       </div>
//     </div>
//   );
// };
"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../assets/stand/1.jpg";
import img2 from "../assets/stand/2.jpg";
import img3 from "../assets/stand/3.jpg";
import img4 from "../assets/stand/4.jpg";
import img5 from "../assets/stand/5.jpg";
import img6 from "../assets/1.png";

const topFeatures = [
  {
    title: "Data-Driven",
    description:
      "We utilize proprietary diagnostics and benchmarking tools to assess vision alignment and impact. Our tools are research-backed, topical modules. Our strategic organisational mapping helps leaders ascertain their present status and align it with their future goals.",
    image: img,
  },
  {
    title: "Incorporate PESTLE Analysis",
    description:
      "We use PESTLE analysis to assess external factors impacting your organization and help you adapt your strategy.",
    image: img2,
  },
];

const bottomFeatures = [
  {
    title: "End-to-End Implementation",
    description:
      "From strategy to execution, we partner with you throughout your transformation journey.",
    image: img3,
  },
  {
    title: "Employee Engagement",
    description:
      "We foster environments that empower employees, boosting morale and productivity.",
    image: img4,
  },
  {
    title: "Customized for Your Industry",
    description:
      "Our solutions are tailored to the specific challenges and needs of your industry.",
    image: img5,
  },
  {
    title: "Proven Results",
    description:
      "Our data-backed approach delivers measurable improvements across your organization.",
    image: img6,
  },
];

const WhyWeStandApart = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="text-center mb-12">
        <h3 className="text-indigo-800 font-medium text-xl">
          The RuhCo Approach
        </h3>
        <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 capitalize my-2">
          Why We Stand Apart
        </h2>
      </div>

      {/* Top Row - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {topFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>

      {/* Bottom Row - 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bottomFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <div
      className="relative group rounded-[2rem] overflow-hidden shadow-lg h-64 cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Background */}
      <div className="relative w-full h-full">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 transition-all duration-500 group-hover:opacity-0"></div>
      </div>

      {/* Single H3 for SEO and visual title */}
      <h3
        className={`absolute inset-0 flex items-center justify-center text-white text-center px-4 text-xl font-bold transition-opacity duration-500 ${
          isMobile ? (clicked ? "opacity-0" : "opacity-100") : "group-hover:opacity-0 opacity-100"
        }`}
      >
        {feature.title}
      </h3>

      {/* Description Overlay */}
      <div
        className={`absolute inset-0 bg-opacity-60 flex flex-col justify-center items-center text-white p-5 text-center transition-opacity duration-300 ${
          isMobile ? (clicked ? "opacity-100" : "opacity-0") : "group-hover:opacity-100 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <p className="text-sm relative z-10">{feature.description}</p>
      </div>
    </div>
  );
};

export default WhyWeStandApart;
