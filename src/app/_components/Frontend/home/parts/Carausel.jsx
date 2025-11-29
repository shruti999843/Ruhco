"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "../assets/logos/1.png";
import img2 from "../assets/logos/2.png";
import img3 from "../assets/logos/3.jpg";
import img4 from "../assets/logos/4.png";
import img5 from "../assets/logos/5.png";
import img6 from "../assets/logos/6.png";
import img13 from "../assets/logos/AIA.png";
import img7 from "../assets/logos/7.png";
import img8 from "../assets/logos/8.png";
import img9 from "../assets/logos/9.png";
import img10 from "../assets/logos/10.png";
import img11 from "../assets/logos/11.png";
import img12 from "../assets/logos/12.png";
import img16 from "../assets/logos/12.png";
import img14 from "../assets/logos/12.png";
import img15 from "../assets/logos/12.png";


const carausel = [
  { id: 0, img: img },
  { id: 1, img: img2 },
  { id: 2, img: img3 },
  { id: 3, img: img4 },
  { id: 4, img: img5 },
  { id: 5, img: img6 },
  { id: 6, img: img15 },
  { id: 7, img: img16 },
];

const carausel2 = [
  { id: 6, img: img7 },
  { id: 7, img: img8 },
  { id: 8, img: img9 },
  { id: 9, img: img10 },
  { id: 10, img: img11 },
  { id: 11, img: img12 },
  { id: 12, img: img13 },
  { id: 13, img: img14 },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  loop:true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1440, settings: { slidesToShow: 8 } },
    { breakpoint: 1220, settings: { slidesToShow: 7 } },
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 5 } },
    { breakpoint: 420, settings: { slidesToShow: 3 } },
    { breakpoint: 370, settings: { slidesToShow: 2 } },
  ],
};

const settingsRight = {
  ...settings,
  rtl: true,
};

export default function Carausal() {
  return (
    <div className="px-5 xl:px-12 py-5">
      <div className="flex justify-center py-5">
        <h2 className="text-2xl md:text-3xl font-normal text-center text-[#E53935] underline-offset-4 capitalize">
          Success stories built with leaders at
        </h2>
      </div>
      <div className="space-y-10 py-5">
        <Slider {...settings}>
          {carausel.map((el) => (
            <Images key={el.id} el={el} />
          ))}
        </Slider>
        <Slider {...settingsRight}>
          {carausel2.map((el) => (
            <Images key={el.id} el={el} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Images({ el }) {
  return (
    <div className="flex items-center justify-center">
      <Image width={100} height={100} src={el.img} alt="client image" />
    </div>
  );
}
