import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
 
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
    <nav className="navbar shadow-lg bg-white py-3 px-2">
      <div className="flex items-center  justify-between">
        <Link to='/' className="logo flex items-center lg:translate-x-24 cursor-pointer hover:scale-105 transition-all duration-200">
          <span className="lg:text-5xl sm:text-2xl font-bold">plut</span>
          <img
            className="h-14"
          
            src="../../../public/svg/plan-list-svgrepo-com.svg"
            alt="logog"
          />
        </Link>
        <div className=" flex justify-between lg:gap-10 md:gap-3 lg:text-xl px-6">
          <Link
            onClick={() => handleLinkClick("/")}
            className={`hover:text-blue-500 ${
              activeLink === "/" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => handleLinkClick("/employee")}
            className={`hover:text-blue-500 ${
              activeLink === "/employee" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/employee"
          >
            Employee
          </Link>
          <Link
            onClick={() => handleLinkClick("/hiring")}
            className={`hover:text-blue-500 ${
              activeLink === "/hiring" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/hiring"
          >
           Hiring
          </Link>
        
          <Link
            onClick={() => handleLinkClick("/report")}
            className={`hover:text-blue-500 ${
              activeLink === "/report" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/report"
          >
           Report
          </Link>
          <Link
            onClick={() => handleLinkClick("/files")}
            className={`hover:text-blue-500 ${
              activeLink === "/files" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/files"
          >
           Files
          </Link>
          <Link
            onClick={() => handleLinkClick("/payroll")}
            className={`hover:text-blue-500 ${
              activeLink === "/payroll" ? "text-blue-600" : "text-gray-800"
            } active:text-blue-600`}
            to="/payroll"
          >
           Payroll
          </Link>
        </div>
        <div className="relative scale-90  transform transition-transform duration-300 focus-within:scale-95">
          <input
            type="text"
            placeholder="Search Anything...."
            className="text-xl lg:w-[20rem] md:w-[15rem] px-10 py-2 rounded-md focus:outline-none  focus:ring-1 border border-gray-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
        </div>

        <div className="profile flex gap-4">
          <div className="info">
            <h4 className="text-end">Ratul Islam</h4>
            <div className="date">
              <h1>{formatDate(currentDate)}</h1>
            </div>
          </div>
          <figure className="w-14 h-14 bg-red-100">
            <img src="../../../public/svg/man.svg" alt="" />
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
