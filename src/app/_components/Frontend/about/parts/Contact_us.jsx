// import AnimatedButton from "@/app/utils/Butoon";
// import React from "react";

// const Contact_us = ({ heading, line1, line2, button_Name, bg_image }) => {
//   return (
//     <div
//       className="mx-5 p-16 flex flex-col items-center justify-between mt-12 bg-cover bg-center relative"
//       style={{
//         backgroundImage: `url(${bg_image?.src})`,
//         backgroundColor: "#151583",
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

//       <div className="text-white items-center flex flex-col space-y-8 z-20">
//         <h2 className="text-[2.5rem] text-center leading-none font-medium uppercase">
//           {heading}
//         </h2>
//         <div className="items-center flex flex-col space-y-6 leading-12">
//           <p className="text-[1.4rem] text-center leading-8">{line1}</p>
//           <p className="text-[1.4rem] leading-none text-center ">{line2}</p>
//         </div>
//         <AnimatedButton name={button_Name ? button_Name : "Contact Us"} />
//       </div>
//     </div>
//   );
// };

// export default Contact_us;


"use client";  

import AnimatedButton from "@/app/utils/Butoon";
import React from "react";

const Contact_us = ({ heading, line1, line2, button_Name, bg_image, mob_bg_image }) => {
  return (
    <div
      className="mx-5 p-10 md:p-16 flex flex-col items-center justify-between mt-5 md:mt-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bg_image?.src})`,
        backgroundColor: "#151583",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="text-white items-center flex flex-col space-y-8 z-20">
        <h2 className="text-2xl md:text-4xl text-center leading-none font-medium uppercase">
          {heading}
        </h2>
        <div className="items-center flex flex-col space-y-6 leading-12">
          <p className="text-lg md:text-xl text-center leading-7">{line1}</p>
          <p className="text-lg md:text-xl text-center leading-none">{line2}</p>
        </div>
        <AnimatedButton name={button_Name || "Contact Us"} />
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          div[style] {
            background-image: url(${mob_bg_image?.src});
          }
        }
      `}</style>
    </div>
  );
};

export default Contact_us;
