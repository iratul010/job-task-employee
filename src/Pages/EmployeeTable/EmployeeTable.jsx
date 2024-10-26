import "./EmployeeTable.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { PiXCircleFill } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { TbPencilMinus } from "react-icons/tb";

const EmployeeTable = () => {
  const [serial, setSerial] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("Status");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDepart, setIsOpenDepart] = useState(false);
  const [isDotOpen, setIsDotOpen] = useState(false);

  const [departStatus, setDepartStatus] = useState("Department");
  const dropdownRef = useRef(null);
  const dateRangeRef = useRef(null);
  const departRef = useRef(null);
  const dotRef = useRef(null);
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // date Range
    const handleclickDateOutside = (event) => {
      if (
        dateRangeRef.current &&
        !dateRangeRef.current.contains(event.target)
      ) {
        setIsOpenDepart(false);
      }
    };
    document.addEventListener("mousedown", handleclickDateOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickDateOutside);
    };
  }, []);
  useEffect(() => {
    // dotRef
    const handleclickDotOutside = (event) => {
      if (dotRef.current && !dotRef.current.contains(event.target)) {
        setIsDotOpen(false);
      }
    };
    document.addEventListener("mousedown", handleclickDotOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickDotOutside);
    };
  }, []);
  useEffect(() => {
    const handleclickDepartOutside = (event) => {
      if (departRef.current && !departRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleclickDepartOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickDepartOutside);
    };
  }, []);


  const departArr = ["Design", "Development", "Product", "Sales"];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('/public/data/data.json'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
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

 
  const handleDotOpen = (index) => {
    console.log(index);
    setData((prevdata) => {
      const newData = [...prevdata];
      newData[index].dotOpen = true;
      console.log(newData);
      return newData;
    });
  };

  const handleColor = (department) => {
    switch (department) {
      case "Design":
        return ["text-green-600", "bg-green-50"];
      case "Development":
        return ["text-blue-600", "bg-blue-50"];
      case "Product":
        return ["text-orange-600", "bg-orange-50"];
      case "Sales":
        return ["text-purple-600", "bg-purple-50"];
    }
  };
  const handleApprove = (index) => {
    console.log("apps");
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].status = "approved";
      return newData;
    });
  };
  const handleReject = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].status = "rejected";
      return newData;
    });
  };
  const handleUndo = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].status = null;
      return newData;
    });
  };
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
            Export Excel{" "}
            <span className="text-2xl">
              <RxDownload />
            </span>
          </button>
          <button className="flex items-center transition duration-300 gap-4 rounded-md py-3 px-4 text-white bg-indigo-500 hover:bg-indigo-600">
            <span className="text-2xl">
              <BsPersonFillAdd />
            </span>
            Add Employee
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white border rounded-lg px-10 py-10 mx-10 my-10">
        <div className="header flex items-center justify-between  mb-4">
          <h2 className="lg:text-xl font-semibold">Employee Time Logs</h2>
          <div className="flex items-center space-x-3">
            <div className="input relative  py-3 transform transition-transform scale-90 focus-within:scale-95     ">
              <span className="absolute left-5 top-7 px-3 border-none text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                className="lg:w-[30rem] md:w-[15rem] pl-14 py-2 rounded text-xl focus:outline-none    border border-gray-400 focus:ring-1  "
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
                <span>Date Range</span>
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
                  <table className=" w-full overflow-hidden text-base">
                    <thead>
                      <tr className="grid grid-cols-7 gap-3 py-2 font-semibold ">
                        <td className="col-span-3">Date Range</td>
                        <td className="col-span-2">Start date</td>
                        <td className="col-span-2">End date</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" grid grid-cols-7 gap-4 py-2  ">
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
                          <button className="flex items-center justify-between border py-2 px-2 rounded-lg border-gray-200  w-full">
                            <span>21-07-2024</span>
                            <CgCalendarDates />
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

            <div className=" relative  w-[11rem]">
              <button
                onClick={() => handleDepartment(!isOpenDepart)}
                className="w-full flex items-center justify-between  border px-3  py-2 rounded-lg text-lg"
              >
                <span> {departStatus}</span>
                <GoChevronDown />
              </button>
              <div
                ref={departRef}
                className={`${
                  isOpenDepart ? "block" : "hidden"
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
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid  grid-cols-9 border rounded-lg mb-4  ">
            <div className="font-bold text-gray-700 bg-gray-100 p-3 ">ID</div>
            <div className="font-bold text-gray-700 bg-gray-100 p-3 ">
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
            <div
              key={item.id}
              className={`relative grid grid-cols-9 hover:bg-slate-50 py-6 px-3 items-center  ${
                index !== data.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="px-3">{item?.id}</div>
              <div className="px-3">{item?.name}</div>
              <div className="px-3">{item?.duration}</div>
              <div className="px-3">{`${item?.startTime}-${item?.endTime}`}</div>
              <div className="px-3">{item?.dueHours}</div>

              <div
                className={`max-w-max  font-semibold px-3 py-1 border rounded-3xl   ${
                  handleColor(item.department)[0]
                } ${handleColor(item.department)[1]}`}
              >
                <span className="text-xl ">&bull; </span>
                {item?.department}
              </div>

              <div className="px-3">{item?.project}</div>
              <div className="px-3">{`${
                item?.notes.length > 10
                  ? `${item.notes.slice(0, 15)}...`
                  : item.notes
              } `}</div>
              <div className="text-sm">
                {item.status === "approved" ? (
                  <div className="flex space-x-3">
                    <button className="flex items-center gap-2 border px-4 py-1 text-green-800 bg-green-50 border-green-800 rounded-lg">
                      <span>
                        <FaCheckCircle />
                      </span>
                      Approved
                    </button>
                    <button
                      className="border px-2 rounded-lg"
                      onClick={() => handleUndo(index)}
                    >
                      Undo
                    </button>
                  </div>
                ) : item.status === "rejected" ? (
                  <div className="flex space-x-3">
                    <button className="text-red-600 flex gap-2 items-center border border-red-600 py-1 rounded-lg px-3  ">
                      <span>
                        <PiXCircleFill />
                      </span>
                      Rejected
                    </button>
                    <button
                      className="rounded-lg border px-2"
                      onClick={() => handleUndo(index)}
                    >
                      Undo
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-3">
                    <button
                      className="text-red-600 font-semibold"
                      onClick={() => handleReject(index)}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-green-600 text-gray-50 border px-4  py-1 rounded-lg"
                      onClick={() => handleApprove(index)}
                    >
                      Approve
                    </button>
                  </div>
                )}
              </div>

              <div
                onClick={() => handleDotOpen(index)}
                className="absolute -right-6 py-3 hover:cursor-pointer  border "
              >
                <BsThreeDotsVertical />
              </div>

              {
                <div
                  ref={dotRef}
                  className={`${
                    item.dotOpen || isDotOpen ? "block" : "hidden"
                  } absolute right-0 w-[10rem] bg-white shadow-lg flex flex-col items-center z-10 overflow-hidden`}
                >
                  <button className="flex items-center px-3 py-3">
                    <TbPencilMinus />
                    <span>Edit Info</span>
                  </button>
                  <button className="flex items-center px-3 py-3">
                    <TbPencilMinus />
                    <span>Export Excel</span>
                  </button>
                  <button className="flex items-center px-3 py-3">
                    <TbPencilMinus />
                    <span>Delete Info</span>
                  </button>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center px-10 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-3">
            {" "}
            <span className="text-2xl text-gray-600">
              <GoArrowLeft />
            </span>
            Prev
          </div>
          <div className="flex items-center justify-between gap-4">
            {serial.map((index) => (
              <div
                key={index}
                className="cursor-pointer border px-3 py-1 rounded-lg active::bg-white"
              >
                {index}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            Next{" "}
            <span className="text-2xl text-gray-600">
              <GoArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
