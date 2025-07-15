import { FaGraduationCap } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { IoTrophySharp } from "react-icons/io5";
import { FaFighterJet } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
const Video = () => {
  return (
    <div className="p-5 sm:p-10">
      <div className="mt-10  bg-[#ebedf4] shadow-2xl  rounded-xl">
        {/* Video + Form section */}
        <div className="flex flex-col-reverse items-center justify-between gap-10 p-5 lg:flex-row">
          {/* Form */}
          <section className="w-full lg:w-1/2">
            <h1 className="mb-4 text-4xl font-light text-center">
              REQUEST CATALOGS NOW!
            </h1>

            {/* Inputs */}
            <div className="flex flex-col items-center mt-20 space-y-4">
              <input
                type="text"
                placeholder="Primero"
                className="w-full max-w-md input input-bordered"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full max-w-md input input-bordered"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full max-w-md input input-bordered"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap justify-center gap-4 pt-10">
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Classic
              </label>
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Modern
              </label>
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Furniture
              </label>
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Lighting
              </label>
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Accessories
              </label>
              <label>
                <input type="checkbox" className="mr-1 checkbox" />
                Projects
              </label>
            </div>

            {/* Button */}
            <div className="mt-5 text-center">
              <button className="btn bg-[#555879] border-none text-white">
                REQUEST CATALOGS
              </button>
            </div>
          </section>

          {/* Video */}
          <div className="w-full mb-20 text-center lg:w-1/2">
            <h1 className="mb-4 text-2xl font-light">HOW DO WE WORK?</h1>
            <div className="max-w-xl mx-auto overflow-hidden rounded-lg shadow-2xl">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/faZdW2DGHmM?si=tas1WaxzfF3hZfWz"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CHOOSE icons section */}
        <section className="px-4 py-10">
          <div className="flex items-center gap-4">
            <div className="flex-grow border-t-2 border-black" />
            <span className="text-xl font-semibold whitespace-nowrap">
              WHY TO CHOOSE US
            </span>
            <div className="flex-grow border-t-2 border-black" />
          </div>
          {/* icons + text */}
          <section className="flex flex-wrap justify-center gap-20 py-10 text-center">
            <div>
              <FaGraduationCap className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                30 YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div>
              <GiCutDiamond className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                EXCELLENT <br />
                SERVICE
              </p>
            </div>
            <div>
              <IoTrophySharp className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                TOP <br />
                QUALITY
              </p>
            </div>
            <div>
              <FaFighterJet className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                FAST <br />
                SOLUTIONS
              </p>
            </div>
            <div>
              <TiWorld className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                WORLDWIDE <br />
                DELIVERY
              </p>
            </div>
            <div>
              <MdPriceChange className="mx-auto text-7xl" />
              <p className="mt-2 font-semibold">
                BEST PRICE <br />
                GUARANTEE
              </p>
            </div>
          </section>
          {/* Button */}
          <div className="mt-5 text-center">
            <button className="btn bg-[#555879] border-none text-white">
              <MdOutlineRoundaboutRight />
              ABOUT OUR COMPANY
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Video;
