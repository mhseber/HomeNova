import { FaLocationDot } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../public/assets/logo.png";
import Image from "next/image";
import { MdAttachEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className="p-10 font-semibold text-gray-300 footer sm:footer-horizontal bg-slate-800 text-base-content">
        <aside>
          {/* name+logo */}
          <div className="flex items-center gap-4 ">
            <Image
              className="border-2 border-gray-300 border-dotted rounded-full "
              width={60}
              height={60}
              src={logo}
              alt="logo"
            />
            <p className="text-4xl">HomeNova</p>
          </div>
          <p className="pt-3">
            <i>Providing reliable tech since 2025</i>
          </p>
          <p className="flex items-center gap-4 ">
            <FaLocationDot className="text-lg" />
            Dhaka,Bangladesh
          </p>
          <p className="flex items-center gap-4 ">
            <PiBuildingOfficeFill className="text-lg" />
            Office : 44 no s k dash road Gandaria,Dhaka
          </p>
          <p className="flex items-center gap-4 ">
            <FaPhoneAlt className="text-lg" />
            Mobile : +8801799894176
          </p>
          <p className="flex items-center gap-4 ">
            <MdAttachEmail className="text-lg" /> Email : sebermh@gmail.com
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Classic Furniture</a>
          <a className="link link-hover">Modern Furniture</a>
          <a className="link link-hover">Classic Lighting</a>
          <a className="link link-hover">Modern Lighting</a>
          <a className="link link-hover">Decor</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
