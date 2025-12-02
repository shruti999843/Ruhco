"use client";
import Image from "next/image";
import Mask from "../assets/Maskbg.png";
import { useRef } from "react";
import Mask1 from "../assets/slider/1.jpg";
import Mask2 from "../assets/slider/2.jpg";
import Mask3 from "../assets/slider/3.jpg";
import Mask4 from "../assets/slider/4.jpg";
import Mask5 from "../assets/slider/5.jpg";
import Mask6 from "../assets/slider/6.jpg";
import Mask7 from "../assets/slider/7.jpg";
import Mask12 from "../assets/slider/12.jpg";
import Slider from "react-slick";

const Sliders = () => {
  const sliderRef = useRef(null);

  const responsiveSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          dots: true,
          speed: 700,
        },
      },
      {
        breakpoint: 3000, // Desktop
        settings: {
          dots: false,
          speed: 1000,
        },
      },
    ],
  };

  const cardContent = [
    {
      title: "Employee Resistance:",
      description:
        "65% of employees resist change due to fear of the unknown or lack of communication (Deloitte, 2023). We help you build trust and transparency.",
      img: Mask12,
    },
    {
      title: "Leadership Gaps:",
      description:
        "Only 25% of leaders feel confident leading change initiatives (Korn Ferry, 2022). We equip your leaders with the tools and mindset to drive transformation.",
      img: Mask1,
    },
    {
      title: "Change Fatigue:",
      description:
        "45% of employees report feeling overwhelmed by constant changes (Gartner, 2023). Our program ensures sustainable pacing and employee well-being.",
      img: Mask2,
    },
    {
      title: "Ineffective Communication:",
      description:
        "Poor communication is the #1 reason change initiatives fail (Prosci, 2023). We design clear, consistent communication plans to keep everyone aligned.",
      img: Mask3,
    },
    {
      title: "Lack of Measurable Outcomes:",
      description:
        "60% of organizations struggle to track the success of change initiatives (BCG, 2023). Our data-driven approach ensures you can measure progress and ROI.",
      img: Mask4,
    },
    {
      title: "Evolving work models:",
      description:
        "Hybrid and remote work models have made change management essential. We provide strategies to manage distributed teams and maintain productivity.",
      img: Mask5,
    },
    {
      title: "Unexpected market fluctuations:",
      description:
        "Sudden market changes make change management crucial. We help organizations build resilience and react quickly to disruptions.",
      img: Mask6,
    },
    {
      title: "Acquisitions and mergers:",
      description:
        "Mergers overwhelm employees and leaders. We help integrate cultures, align leadership, and maintain stability during transitions.",
      img: Mask7,
    },
  ];

  return (
    <div className="relative">
      {/* Background */}
      <div
        className="relative bg-cover bg-center md:h-screen h-[60vh] flex items-center"
        style={{ backgroundImage: `url(${Mask.src})` }}
      >
        {/* Shared Text */}
        <div className="z-20 px-6 md:px-10 text-white w-full md:w-[40%] space-y-4">
          <h2 className="font-medium tracking-wider">
            ō Why Navigating Change Matters
          </h2>

          <h2 className="font-semibold text-3xl md:text-5xl tracking-wider">
            The Challenge We Solve?
          </h2>

          <button className="flex items-center gap-2 text-lg md:text-[1.4rem] px-6 py-2 bg-[#151583] text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer w-fit">
            Book A Consult
          </button>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block absolute right-10 w-[55%] h-[70%] bg-white p-4 rounded-2xl shadow-lg">
          <Slider ref={sliderRef} {...responsiveSettings} className="h-full">
            {cardContent.map((card, index) => (
              <div key={index} className="p-5 h-full flex">
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="w-[55%]">
                    <p className="text-3xl font-semibold text-[#E53935] mb-3">
                      {card.title}
                    </p>

                    <p className="text-black">{card.description}</p>
                  </div>

                  <div className="w-[35%]">
                    <Image
                      src={card.img}
                      alt="Slider Image"
                      className="rounded-lg shadow-lg"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden bg-white rounded-2xl my-6 px-4 py-6 shadow-md">
        <Slider ref={sliderRef} {...responsiveSettings}>
          {cardContent.map((card, index) => (
            <div key={index} className="p-3 flex flex-col">
              <p className="text-2xl font-semibold text-[#E53935] mb-2">
                {card.title}
              </p>

              <p className="mb-4">{card.description}</p>

              <div className="w-full h-[180px]">
                <Image
                  src={card.img}
                  alt="Slider Image"
                  className="rounded-lg shadow-lg"
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
