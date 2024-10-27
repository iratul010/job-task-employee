import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
 import logo from '../../assets/svg/plan-list-svgrepo-com.svg'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
 
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const formatDate = (date) => {
    const options = { weekday: "long", day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };
  const currentDate = new Date();

  return (
    <nav className="navbar shadow-lg bg-white py-3 px-4 md:px-8 lg:px-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="logo flex items-center cursor-pointer hover:scale-105 transition-all duration-200"
        >
          <span className="text-2xl lg:text-4xl font-bold">plut</span>
          <img
            className="h-10 lg:h-14 ml-2"
            src={logo}
            alt="logo"
          />
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex flex-grow justify-center gap-4 md:gap-6 lg:gap-10">
          {["/", "/employee", "/hiring", "/report", "/files", "/payroll"].map((path, index) => (
            <Link
              key={index}
              onClick={() => handleLinkClick(path)}
              className={`hover:text-blue-500  font-semibold   sm:text-xl md:text-lg lg:text-xl ${
                activeLink === path ? "text-blue-600" : "text-gray-600"
              } active:text-blue-600`}
              to={path}
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mt-4 md:mt-0 w-full md:w-auto md:mx-4">
          <input
            type="text"
            placeholder="Search Anything...."
            className="w-full md:w-72 px-10 py-2 rounded-md text-base border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="info text-sm lg:text-base text-right">
            <h4 className="font-medium">Ratul Islam</h4>
            <div className="text-gray-500">{formatDate(currentDate)}</div>
          </div>
          <figure className="w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-gray-200">
            <img src="../../../public/svg/man.svg" alt="profile" className="w-full h-full" />
          </figure>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden mt-4 space-x-2">
        {["/", "/employee", "/hiring", "/report", "/files", "/payroll"].map((path, index) => (
          <Link
            key={index}
            onClick={() => handleLinkClick(path)}
            className={`text-base ${
              activeLink === path ? "text-blue-600" : "text-gray-800"
            } hover:text-blue-500`}
            to={path}
          >
            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
