// import React from "react";
// // import ring from "../assets/about_ruhco/ring.gif";
// import about2 from "../assets/4.png";
// import Image from "next/image";

// const About_ruhco = () => {
//   return (
//     <>
//       <div className="text-center">
//         <h2 className="text-3xl font-medium">
//           About {""} <span className="text-[#151582] font-bold">Ruh</span>
//           <span className="text-[#E53935] font-bold">Co</span>
//         </h2>
//       </div>
//       <section className="py-8 px-4 md:px-12 bg-white">
//         <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Left Text Column */}
//           <div className="space-y-6 text-gray-800 text-lg leading-relaxed w-[100%]">
//             <p>
//               <span className="text-red-600 font-semibold">Ruh</span> expresses
//               spirit, essence, source. Honouring the life force that is abundant
//               and wise.
//             </p>
//             <p>
//               <span className="text-red-600 font-semibold">Co.</span> invokes a
//               company, yours and ours. The material container in which we create
//               and act. It speaks of connection and cocreation, the relational
//               fabric of our existence.
//             </p>
//             <p>
//               <span className="text-red-600 font-semibold">RuhCo.</span>{" "}
//               encapsulates the core of our mission. The alignment of infinite
//               source and grounded action in a powerful, purposeful force for
//               good.
//             </p>
//             <p>
//               <span className="text-red-600 font-semibold">Rukō</span>{" "}
//               <span className="text-sm text-gray-600">[Hindi]: ‘halt’</span>
//               <br />
//               The sacred pause is the seed of all transformation. When we stop
//               and rest unapologetically into being, a quantum shift is possible
//               – opening the door to new paradigms in leadership.
//             </p>
//           </div>

//           {/* Right Image Column */}
//           <div className="w-[100%]">
//             <video
//               width="100%"
//               autoPlay
//               loop
//               muted
//               controls={false}
//               style={{ objectFit: "cover" }}
//             >
//               <source src="/Flower.mp4" type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About_ruhco;
import React from "react";
import about2 from "../assets/4.png"; // Add this import if needed
import Image from "next/image";

const About_ruhco = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-medium">
          About {""} <span className="text-[#151582] font-bold">Ruh</span>
          <span className="text-[#E53935] font-bold">Co</span>
        </h1>
      </div>
      <section className="py-8 px-4 md:px-12 bg-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Column */}
          <div className="space-y-6 text-gray-800 text-lg leading-relaxed w-full">
            <p>
              <span className="text-red-600 font-semibold">Ruh</span> expresses
              spirit, essence, source. Honouring the life force that is abundant
              and wise.
            </p>
            <p>
              <span className="text-red-600 font-semibold">Co.</span> invokes a
              company, yours and ours. The material container in which we create
              and act. It speaks of connection and cocreation, the relational
              fabric of our existence.
            </p>
            <p>
              <span className="text-red-600 font-semibold">RuhCo.</span>{" "}
              encapsulates the core of our mission. The alignment of infinite
              source and grounded action in a powerful, purposeful force for
              good.
            </p>
            <p>
              <span className="text-red-600 font-semibold">Rukō</span>{" "}
              <span className="text-sm text-gray-600">[Hindi]: ‘halt’</span>
              <br />
              The sacred pause is the seed of all transformation. When we stop
              and rest unapologetically into being, a quantum shift is possible
              – opening the door to new paradigms in leadership.
            </p>
          </div>

          {/* Right Video Column */}
          <div className="w-full md:w-[100%]">
            <video
              width="100%"
              autoPlay
              loop
              muted
              controls={false}
              className="rounded-[20px]"
              style={{ objectFit: "cover" }}
            >
              <source src="/Flower.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_ruhco;
