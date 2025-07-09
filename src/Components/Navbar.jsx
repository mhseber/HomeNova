import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const NavOptions = (
    <>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/cFurniture"}>Classic Furniture</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/mFurniture"}>Modern Furniture</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/cLighting"}>Classic Lighting</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/mLighting"}>Modern Lighting</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <Link href={"/decor"}>Decor</Link>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
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
          <div className="w-16 h-16 ml-8 overflow-hidden rounded-full">
            <Image src="/assets/logo.png" alt="logo" width={120} height={40} />
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex px-1 space-x-6 text-xl font-medium ">
            {NavOptions}
          </ul>
        </div>
        <div className="pr-16 navbar-end ">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
