import Image from "next/image";
import img1 from "../../../public/assets/classic-furniture.jpg";
import img2 from "../../../public/assets/classic-lighting.jpg";
import img3 from "../../../public/assets/decoration.jpg";
import img4 from "../../../public/assets/modern-furniture.jpg";
import img5 from "../../../public/assets/modern-lighting.jpg";
import img6 from "../../../public/assets/projects.jpg";

const images = [
  { src: img1, alt: "Classic Furniture" },
  { src: img2, alt: "Classic Lighting" },
  { src: img3, alt: "Accessories" },
  { src: img4, alt: "Modern Furniture" },
  { src: img5, alt: "Modern Lighting" },
  { src: img6, alt: "Projects" },
];

const Img = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden shadow-lg group">
          <Image
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-semibold text-white transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
              {img.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Img;
