import "./EmployeeTable.css";

import { RxDownload } from "react-icons/rx";
<RxDownload />
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
<GoChevronDown />
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { PiXCircleFill } from "react-icons/pi";



import { VscChromeClose } from "react-icons/vsc";

import Pagination from "../../Components/Pagination/Pagination";

import AddEmployeeBtn from "../../Components/AddEmployeeBtn/AddEmployeeBtn";
 
import TablesDataElement from "../../Components/TablesDataElement/TablesDataElement";

const EmployeeTable = () => {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("Status");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDepart, setIsOpenDepart] = useState(false);
  

  const [departStatus, setDepartStatus] = useState("Department");
  const dropdownRef = useRef(null);
  const dateRangeRef = useRef(null);
  const departRef = useRef(null);
 
  const handleStatus = (open) => {
    setStatus("Status");
    setIsOpen(open);
  };
  const handleDepartment = (open) => {
    setDepartStatus("Department");
    setIsOpenDepart(open);
  };
  const handleDepartmentStatus = (status) => {
    setDepartStatus(status);
  };
  const handleChange = (status) => {
    setStatus(status);
    setIsOpen(false);
  };
  const handleClose = (active) => {
    setActive(active);
  };
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div
      className="employeetable min-h-screen"
      style={{ backgroundColor: "#F9F9FF" }}
    >
      <div className=" flex flex-wrap justify-between px-10 ">
        <div className=" flex space-x-4 space-y-3 mt-10 items-center">
          <div className="p-4 bg-white border rounded-lg   text-3xl text-indigo-600">
            <FaUsers />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold  text-xl ">Employee Time</h3>
            <p>Manage your time logs</p>
          </div>
        </div>
        <div className="  flex items-center space-x-6 font-semibold">
          <button className="flex gap-4 border py-3 px-4 bg-white rounded-md transition duration-300 hover:bg-gray-100">
            Export Excel
            <span className="text-2xl">
              <RxDownload />
            </span>
          </button>
          {/* Add Employ */}
          <AddEmployeeBtn />
        </div>
      </div>
      {/* Table */}
      <div className="bg-white border rounded-lg px-10 py-10 mx-10 my-10">
        <div className="header flex items-center justify-between  mb-4">
          <h2 className="lg:text-lg font-semibold">Employee Time Logs</h2>
          <div className="flex items-center space-x-3">
            <div className="input relative  py-3 transform transition-transform scale-90 focus-within:scale-95 ">
              <span className="absolute left-5 top-7 px-3 border-none text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                className="lg:w-[24rem] md:w-[10rem] pl-14 py-2 rounded text-xl focus:outline-none    border border-gray-400 focus:ring-1  "
                placeholder="Search by ID, Name "
              />
            </div>
            <div className="relative text-lg border py-2 px-5 rounded-lg">
              <button
                onClick={() => handleClose(!active)}
                className="flex items-center space-x-2"
              >
                <span className="lg:text-2xl md:text-xl">
                  <CgCalendarDates />
                </span>
                <span className="md:text-base text-sm">Date Range</span>
                <span>
                  <GoChevronDown />
                </span>
              </button>
              <div
                ref={dateRangeRef}
                className={`${
                  active ? "opacity-100" : "opacity-0"
                } absolute   top-16 right-4 rounded-lg shadow-xl border bg-white p-3 z-10  `}
              >
                <div className="p-4 w-[40vw] flex  flex-col items-center   relative space-y-6  ">
                  <button
                    className=" absolute top-5 right-4 hover:bg-gray-50 p-2 rounded-lg text-2xl"
                    onClick={() => handleClose(false)}
                  >
                    <VscChromeClose />
                  </button>
                  <table className="w-full text-base">
                    <thead>
                      <tr className="grid grid-cols-7 gap-3 py-2 font-semibold">
                        <td className="col-span-3">Date Range</td>
                        <td className="col-span-2">Start Date</td>
                        <td className="col-span-2">End Date</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="grid grid-cols-7 gap-4 py-2">
                        <td className="col-span-3">
                          <button className="flex items-center justify-between w-full border border-gray-200 rounded-lg bg-white py-2 px-2">
                            <span>Last 7 Days</span> <GoChevronDown />
                          </button>
                        </td>
                        <td className="col-span-2">
                          <button className="flex items-center justify-between border py-2 px-2 rounded-lg border-gray-200 w-full">
                            <span>15-07-2024</span> <CgCalendarDates />
                          </button>
                        </td>
                        <td className="col-span-2">
                          <button className="flex items-center justify-between border py-2 px-2 rounded-lg border-gray-200 w-full">
                            <span>21-07-2024</span> <CgCalendarDates />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-full flex items-center justify-end">
                    <div className="flex items-center gap-4 space-x-3 justify-center">
                      <button
                        onClick={() => handleClose(false)}
                        className="px-4 py-2 rounded-lg   active:scale-95 focus:outline-none transition-transform duration-200 ease-in-out"
                      >
                        Cancel
                      </button>

                      <button className="px-12 py-1 rounded-lg bg-blue-600 text-white">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

              {
                <div
                  ref={departRef}
                  className={`${
                    isOpenDepart ? "opacity-100 top-10 " : "opacity-0 top-0 "
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
              }
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-9 border rounded-lg mb-4 text-sm md:text-base">
            <div className="font-bold text-gray-700 bg-gray-100 p-3">ID</div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Employee Name
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Duration
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Start Time - End Time
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Due Hours
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Department
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Project
            </div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">Notes</div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3">
              Action
            </div>
          </div>

          {data.map((item, index) => (
            <TablesDataElement key={item.id} data={data} setData={setData} item={item} index={index}/>
            
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default EmployeeTable;
