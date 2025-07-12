"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import f1 from "../../../public/assets/f1.jpg";
import f2 from "../../../public/assets/f2.jpg";
import f3 from "../../../public/assets/f3.jpg";
import f4 from "../../../public/assets/f4.jpg";

const Banner = () => {
  const slides = [
    { img: f1, text: "Modern Living Spaces" },
    { img: f2, text: "Quality Craftsmanship" },
    { img: f3, text: "Comfort Meets Style" },
    { img: f4, text: "Designed for You" },
  ];

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* HomeNova site name overlay */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        showArrows={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-[600px] relative overflow-hidden">
            <Image
              src={slide.img}
              alt={`Slide ${index + 1}`}
              fill
              sizes="100vw"
              quality={100}
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="px-6 py-3 text-4xl font-bold text-white bg-black rounded shadow-md select-none md:text-5xl bg-opacity-40">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
