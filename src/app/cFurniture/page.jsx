// import cf from "../../../public/assets/cf-bg.webp";

// const cFurniturePage = () => {
//   return (
//     <div>
//       <div
//         className="min-h-screen hero"
//         style={{
//           backgroundImage: `url(${cf.src})`,
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="text-center hero-content text-neutral-content">
//           <div className="">
//             <h1 className="mb-5 text-5xl font-bold">CLASSIC FURNITURE</h1>
//             <p className="mb-5">
//               Bedrooms, Dining rooms, Living rooms, Bathroom furniture,
//               Kitchens, Offices, Furniture for Kids, Auxiliary and Outdoor
//               furniture for any budget.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default cFurniturePage;

import { FaSearch } from "react-icons/fa";
import cf from "../../../public/assets/cf-bg.webp";

const cFurniturePage = () => {
  return (
    <div>
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: `url(${cf.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-6xl font-bold">CLASSIC FURNITURE</h1>
            <p className="text-xl font-bold">
              Bedrooms, Dining rooms, Living rooms, Bathroom furniture,
              Kitchens, Offices, Furniture for Kids, Auxiliary and Outdoor
              furniture for any budget.
            </p>

            {/* 🔍 Search Field */}
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="What are you looking for..."
                className="w-full px-5 py-3 pr-12 text-black rounded-full shadow-md outline-none"
              />
              <FaSearch className="absolute text-gray-600 transform -translate-y-1/2 cursor-pointer top-1/2 right-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cFurniturePage;
