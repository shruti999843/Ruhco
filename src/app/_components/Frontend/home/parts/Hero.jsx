"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

const bannerImages = [
  {
    src: "/new/1.jpg",
    alt: "First Image",
    title: "Organizational Change",
    des: "We work with market leaders to stay relevant and retain their position in a constantly changing and unpredictable market by empowering their leadership teams to develop agility and resilience with our bespoke programs.",
  },
  {
    src: "/new/2.jpg",
    alt: "Second Image",
    title: "Organizational Vision and Culture",
    des: "We work with organizations striving to keep pace with their explosive growth. We help bring stability and structure through turbulent times with our bespoke programs.",
  },
  {
    src: "/new/3.jpg",
    alt: "Third Image",
    title: "Executive Coaching",
    des: "We create safe spaces for C-suite leaders to be strategic, agile, and relevant, and to lead organizations in a constantly changing global marketplace.",
  },
  {
    src: "/new/4.jpg",
    alt: "Fourth Image",
    title: "Coaching Skills",
    des: "We help leaders deepen their conversational intelligence to engage a constantly changing workforce, provide clear and impactful feedback, and support their teams to be agile and resourceful in unprecedented times.",
  },
];

const mobileImages = [
  {
    src: "/new/11.jpg",
    alt: "First Image",
    title: "Organizational Change",
    des: "We work with market leaders to stay relevant and retain their position in a constantly changing and unpredictable market by empowering their leadership teams to develop agility and resilience with our bespoke programs.",
  },
  {
    src: "/new/22.jpg",
    alt: "Second Image",
    title: "Organizational Vision and Culture",
    des: "We work with organizations striving to keep pace with their explosive growth. We help bring stability and structure through turbulent times with our bespoke programs.",
  },
  {
    src: "/new/33.jpg",
    alt: "Third Image",
    title: "Executive Coaching",
    des: "We create safe spaces for C-suite leaders to be strategic, agile, and relevant, and to lead organizations in a constantly changing global marketplace.",
  },
  {
    src: "/new/44.jpg",
    alt: "Fourth Image",
    title: "Coaching Skills",
    des: "We help leaders deepen their conversational intelligence to engage a constantly changing workforce, provide clear and impactful feedback, and support their teams to be agile and resourceful in unprecedented times.",
  },
];

const Hero = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size once + on resize (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Select correct image set
  const imagesToUse = isMobile ? mobileImages : bannerImages;

  return (
    <div className="relative w-full h-screen">
      <Slider ref={sliderRef} {...settings}>
        {imagesToUse.map((img, index) => (
          <div key={index} className="relative w-full h-full">
            <div className="relative w-full h-screen">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="absolute inset-0 object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

              <div className="absolute z-20 inset-0 flex flex-col justify-end items-center text-white text-center pb-20 space-y-4">
                <div className="text-2xl md:text-4xl font-bold px-4">
                  {img.title}
                </div>
                <div className="text-sm md:text-lg max-w-4xl px-4 mb-6">
                  {img.des}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
