"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WhyStandApart = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardContent = [
    {
      title: "Data-Driven",
      description:
        "We use behavioral analytics and tracking to measure progress and drive accountability.",
      bgClass: "bg-gradient-to-r from-[#f43d24] to-[#8d2e69]",
    },
    {
      title: "Tailored to Your Organization’s Needs",
      description:
        "Our solutions are not one-size-fits-all. We create customized strategies based on your industry, company culture, and transformation objectives.",
      bgClass: "bg-gradient-to-r from-[#8d2e69] to-[#3D2B66]",
    },
    {
      title: "Proven Track Record",
      description:
        "We’ve helped over x number of organizations successfully navigate change.",
      bgClass: "bg-gradient-to-r from-[#3D2B66] to-[#191982]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-center relative max-w-6xl mx-auto">
      <h3 className="text-xl text-[#151583] mb-2">The RuhCo Approach</h3>

      <h2 className="text-2xl md:text-3xl font-normal text-[#E53935] underline-offset-4 my-3">
        Why We Stand Apart
      </h2>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {cardContent.map((card, index) => (
            <div key={index} className="p-4">
              <div
                className={`p-8 h-80 rounded-xl shadow-lg ${card.bgClass} text-white`}
              >
                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                <p className="text-md">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md"
        >
          <IoIosArrowBack className="w-6 h-6 text-[#151583]" />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md"
        >
          <IoIosArrowForward className="w-6 h-6 text-[#151583]" />
        </button>
      </div>
    </section>
  );
};

export default WhyStandApart;
