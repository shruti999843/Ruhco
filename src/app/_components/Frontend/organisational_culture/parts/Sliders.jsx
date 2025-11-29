// "use client";
// import Image from "next/image";
// import Mask from "../assets/Maskbg.png";
// import { useRef } from "react";
// import Mask1 from "../assets/1.jpg";
// import Mask2 from "../assets/2.jpg";
// import Mask3 from "../assets/3.jpg";

// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "slick-carousel/slick/slick.css"; // Import Slick CSS
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const Sliders = () => {
//   const TwosliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     infinite: true,
//     speed: 1000,
//     loop: true,
//     autoplaySpeed: 500,

//     autoplay: true,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const cardContent = [
//     {
//       title: "Culture Definition & Alignment",
//       description:
//       "Shape a culture that not only reflects your vision—but fuels it. We help you define, articulate, and embed cultural principles that drive alignment, accountability, and long-term strategic momentum.",
//       img: Mask2,
//     },
//     {
//       title: "Tailored to Your Organization’s Needs",
//       description:
//       "No templates. No assumptions. Just solutions built for you—from the ground up. Our approach is deeply contextual, aligning to your unique industry dynamics, cultural nuances, and transformation goals",
//       img: Mask3,
//     },
//     {
//       title: "Proven Track Record",
//       description:
//       "We've guided numerous organizations across diverse industries through complex change journeys—consistently driving measurable progress and delivering outcomes that matter. Our work is grounded in strategy, sustained by trust, and proven in execution.",
//       img: Mask1,
//     },
//   ];
//   return (
//     <div className="relative">
//       <div
//         className="relative bg-cover bg-center h-screen"
//         style={{ backgroundImage: `url(${Mask.src})` }}
//       >
//         <div className="z-20 flex flex-row px-10 justify-center items-center text-left h-[100%]">
//           <div className="w-[40%]">
//             <h1 className="text-white text-2xl md:text-5xl font-semibold mb-4 tracking-wider w-full">
//               What You’ll Take Away?
//             </h1>
//             <h1 className="text-white text-left mb-4 tracking-wider w-full">
//               Our programs are immersive, actionable, and human-centred. You’ll
//               explore:
//             </h1>
//             <button className="flex items-center gap-2 text-[1.4rem] px-6 py-2 bg-[#151583] v text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
//               Book A Consult
//             </button>
//           </div>
//           <div className="bg-white w-[60%] h-[70%] rounded-2xl relative">
//             <div className="h-[100%]">
//               <Slider ref={TwosliderRef} {...settings} className="h-[100%]">
//                 {cardContent.map((card, index) => (
//                   <div
//                     key={index}
//                     className={`p-5 rounded-xl text-white h-[100%]`}
//                   >
//                     <div className="h-[100%] flex flex-row justify-between">
//                       <div className="w-[50%] flex flex-col justify-center">
//                         <h2 className="text-3xl font-semibold text-[#E53935] mb-4">
//                           {card.title}
//                         </h2>
//                         <p className="text-black">{card.description}</p>
//                       </div>
//                       <div className="w-[35%] h-[40%]">
//                         <Image
//                           src={card.img}
//                           alt="Workshop Image"
//                           layout="responsive"
//                           className="rounded-lg shadow-lg"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//             {/* <button
//               onClick={() => TwosliderRef.current.slickPrev()}
//               className="absolute cursor-pointer right-172 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
//             >
//               <IoIosArrowBack className="w-6 h-6" />
//             </button>

//             <button
//               onClick={() => TwosliderRef.current.slickNext()}
//               className="absolute cursor-pointer right-155 bottom-0 border-black border transform -translate-y-1/2 bg-[transparent] text-black p-2 rounded-[10px] shadow-md hover:bg-[white] hover:text-[#151583] transition"
//             >
//               <IoIosArrowForward className="w-6 h-6" />
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sliders;

"use client";
import Image from "next/image";
import Mask from "../assets/Maskbg.png";
import { useRef } from "react";
import Slider from "react-slick";

import Mask1 from "../assets/1.jpg";
import Mask2 from "../assets/2.jpg";
import Mask3 from "../assets/3.jpg";

const Sliders = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardContent = [
    {
      title: "Culture Definition & Alignment",
      description:
        "Shape a culture that not only reflects your vision—but fuels it. We help you define, articulate, and embed cultural principles that drive alignment, accountability, and long-term strategic momentum.",
      img: Mask2,
    },
    {
      title: "Tailored to Your Organization’s Needs",
      description:
        "No templates. No assumptions. Just solutions built for you—from the ground up. Our approach is deeply contextual, aligning to your unique industry dynamics, cultural nuances, and transformation goals.",
      img: Mask3,
    },
    {
      title: "Proven Track Record",
      description:
        "We've guided numerous organizations across diverse industries through complex change journeys—consistently driving measurable progress and delivering outcomes that matter.",
      img: Mask1,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-10 md:h-screen"
      style={{ backgroundImage: `url(${Mask.src})` }}
    >
      {/* Wrapper dynamic for mobile + desktop */}
      <div className="z-20 flex flex-col md:flex-row px-6 md:px-10 items-center justify-center gap-10 h-full">
        
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-[40%] text-white">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4 tracking-wider">
            What You’ll Take Away?
          </h2>

          <p className="text-lg md:text-xl mb-6 tracking-wide">
            Our programs are immersive, actionable, and human-centred. You’ll explore:
          </p>

          <button className="bg-[#151583] text-white text-lg md:text-xl px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
            Book A Consult
          </button>
        </div>

        {/* RIGHT SLIDER SECTION — SAME FOR BOTH VIEWS */}
        <div className="bg-white w-full md:w-[60%] rounded-2xl p-4">
          <Slider ref={sliderRef} {...settings}>
            {cardContent.map((card, index) => (
              <div key={index} className="p-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                  {/* TEXT */}
                  <div className="w-full md:w-[55%]">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#E53935] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-black text-base md:text-lg">
                      {card.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full md:w-[35%]">
                    <Image
                      src={card.img}
                      alt="Workshop Image"
                      layout="responsive"
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Sliders;
