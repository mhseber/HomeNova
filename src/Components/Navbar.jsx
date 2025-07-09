import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const NavOptions = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/cFurniture"}>Classic Furniture</Link>
      </li>
      <li>
        <Link href={"/mFurniture"}>Modern Furniture</Link>
      </li>
      <li>
        <Link href={"/cLighting"}>Classic Lighting</Link>
      </li>
      <li>
        <Link href={"/mLighting"}>Modern Lighting</Link>
      </li>
      <li>
        <Link href={"/decor"}>Decor</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed z-10 p-5 text-black shadow-lg bg-opacity-30 backdrop-blur-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {NavOptions}
            </ul>
          </div>
          <div>
            <Image src="/assets/logo.png" alt="logo" width={120} height={40} />
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{NavOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
