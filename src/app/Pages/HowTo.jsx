import {
  FaCalculator,
  FaDesktop,
  FaRegHandshake,
  FaSmile,
} from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { BsCalendar2CheckFill } from "react-icons/bs";

const HowTo = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-[#ebedf4] shadow-2xl rounded-xl p-8 w-full max-w-6xl text-center">
        <h1 className="mb-8 text-3xl font-light">HOW TO BUY?</h1>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center">
            <FaDesktop className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              REQUEST <br /> CATALOGUES
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GiWhiteBook className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              SELECT <br /> ITEMS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCalculator className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              CHECK <br /> THE PRICE
            </p>
          </div>
          <div className="flex flex-col items-center">
            <BsCalendar2CheckFill className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              CHECK <br /> ALL SAMPLES
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegHandshake className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              ORDER <br /> FURNITURE
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="mb-2 text-6xl text-gray-800" />
            <p className="text-sm font-medium">
              SAVE MONEY <br /> AND ENJOY
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowTo;
