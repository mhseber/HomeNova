const Navbar = () => {
  const NavOptions = (
    <>
      <li>
        <a>Classic Furniture</a>
      </li>
      <li>
        <a>Modern Furniture</a>
      </li>
      <li>
        <a>Classic Lighting</a>
      </li>
      <li>
        <a>Modern Lighting</a>
      </li>
      <li>
        <a>Decor</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed z-10 text-black shadow-lg bg-opacity-30 backdrop-blur-md navbar bg-base-100">
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
          <a className="text-xl">HomeNova</a>
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
