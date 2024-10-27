import { FaSearch } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { PiXCircleFill } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

import { useEffect, useRef, useState } from "react";
import DateRangeModal from "../DateRangeModal/DateRangeModal";

const EmployeeHeader = () => {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("Status");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDepart, setIsOpenDepart] = useState(false);

  const [departStatus, setDepartStatus] = useState("Department");
  const dropdownRef = useRef(null);
  const dateRangeRef = useRef(null);
  const departRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target)
      ) {
        setIsOpenDepart(false);
      }

      if (departRef.current && !departRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const departArr = ["Design", "Development", "Product", "Sales"];
  const handleStatus = (open) => {
    setStatus("Status");
    setIsOpen(open);
  };
  const handleDepartment = (open) => {
    setDepartStatus("Department");
    setIsOpenDepart(open);
  };
  // ----------Department
  const handleDepartmentStatus = (status) => {
    setDepartStatus(status);
    setIsOpenDepart(false)
  };
  const handleChange = (status) => {
    setStatus(status);
    setIsOpen(false);
  };
  const handleClose = (active) => {
    console.log(active)
    setActive(active);
  };
  return (
    <div className="header flex  flex-wrap items-center justify-between mb-4 text-gray-600">
      <h2 className="lg:text-3xl md:text-lg sm:text-sm font-bold">
        Employee Time Logs
      </h2>
      <div className="flex -col items-center space-x-3">
        <div className="input relative py-3 transform transition-transform scale-90 focus-within:scale-95">
          <label className="absolute left-5 top-7 px-3 border-none text-gray-400">
            <FaSearch />
          </label>
          <input
            type="text"
            className="w-full sm:w-[10rem] md:w-[20rem] lg:w-[24rem] pl-14 py-2 rounded text-base sm:text-lg md:text-xl focus:outline-none border border-gray-400 focus:ring-1"
            placeholder="Search by ID, Name"
          />
        </div>

        <div className="relative text-lg border py-2 px-3 rounded-lg">
          <button
            onClick={() => handleClose(!active)}
            className="flex flex-wrap items-center space-x-2"
          >
          
            <span className="text-xl sm:text-2xl lg:text-3xl">
              <CgCalendarDates />
            </span>

           
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              Date Range
            </span>

          
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              <GoChevronDown />
            </span>
          </button>
        { active && <DateRangeModal setActive={setActive} active={active}/>}
          
        </div>
        <div className=" relative w-[10rem]" ref={dropdownRef}>
          <button
            onClick={() => handleStatus(!isOpen)}
            className="w-full flex items-center justify-between  border px-3  py-2 rounded-lg text-lg "
          >
            <span>{status}</span>

            <GoChevronDown />
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute left-0 top-10   flex flex-col items-center w-full z-10 `}
          >
            <button
              onClick={() => handleChange("Approved")}
              className="py-2 bg-white flex items-center px-4 space-x-2 hover:bg-gray-50   border rounded-lg text-green-600 w-full"
            >
              <FaCheckCircle />
              <span>Approved</span>
            </button>
            <button
              onClick={() => handleChange("Rejected")}
              className="py-2 bg-white flex items-center px-4 space-x-2 hover:bg-gray-50   border rounded-lg text-red-600 w-full"
            >
              <PiXCircleFill /> <span>Rejected</span>
            </button>
          </div>
        </div>
        {/* --------------daprtment--------------- */}
        <div className=" relative  w-[11rem]">
          <button
            onClick={() => handleDepartment(!isOpenDepart)}
            className="w-full flex items-center justify-between  border px-3  py-2 rounded-lg text-lg"
          >
            <span> {departStatus}</span>
            <GoChevronDown />
          </button>

          {isOpenDepart && (
            <div
              ref={departRef}
              className={`${
                isOpenDepart ? "opacity-100" : "opacity-0 "
              } absolute left-0 top-10   flex flex-col items-center w-full z-20 `}
            >
              {departArr.map((depart, index) => (
                <button
                  key={index}
                  onClick={() => handleDepartmentStatus(depart)}
                  className="py-2 bg-white flex items-center px-4 space-x-2 hover:bg-gray-50   border    w-full"
                >
                  {depart}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
