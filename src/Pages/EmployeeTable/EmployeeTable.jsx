import "./EmployeeTable.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import {  useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { PiXCircleFill } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";

const EmployeeTable = () => {
  const [data, setData] = useState([
    {
      id: "#1248",
      name: "Sadik Hasan",
      duration: "03 hr",
      startTime: "07:15 AM",
      endTime: "10:15 AM",
      dueHours: "05 hr",
      department: "Design",
      project: "CRM Project",
      notes: "Working on Data Management",
    },
    {
      id: "#1249",
      name: "Rahim Khan",
      duration: "05 hr",
      startTime: "09:00 AM",
      endTime: "02:00 PM",
      dueHours: "03 hr",
      department: "Development",
      project: "HRM Project",
      notes: "Implementing UI components",
    },
    {
      id: "#1250",
      name: "Mina Akter",
      duration: "04 hr",
      startTime: "08:30 AM",
      endTime: "12:30 PM",
      dueHours: "04 hr",
      department: "Product",
      project: "CRM Project",
      notes: "Analyzing product feedback",
    },
    {
      id: "#1251",
      name: "Hasib Uddin",
      duration: "02 hr",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      dueHours: "06 hr",
      department: "Sales",
      project: "HRM Project",
      notes: "Preparing sales reports",
    },
    {
      id: "#1252",
      name: "Nadia Islam",
      duration: "03 hr",
      startTime: "07:45 AM",
      endTime: "10:45 AM",
      dueHours: "05 hr",
      department: "Design",
      project: "CRM Project",
      notes: "Designing new layout",
    },
    {
      id: "#1253",
      name: "Fahim Rahman",
      duration: "06 hr",
      startTime: "09:00 AM",
      endTime: "03:00 PM",
      dueHours: "02 hr",
      department: "Development",
      project: "HRM Project",
      notes: "Developing backend API",
    },
    {
      id: "#1254",
      name: "Arif Chowdhury",
      duration: "04 hr",
      startTime: "08:15 AM",
      endTime: "12:15 PM",
      dueHours: "04 hr",
      department: "Product",
      project: "CRM Project",
      notes: "Updating product specs",
    },
    {
      id: "#1255",
      name: "Rumi Akhter",
      duration: "03 hr",
      startTime: "07:00 AM",
      endTime: "10:00 AM",
      dueHours: "05 hr",
      department: "Sales",
      project: "HRM Project",
      notes: "Meeting with clients",
    },
    {
      id: "#1256",
      name: "Tariq Islam",
      duration: "05 hr",
      startTime: "11:00 AM",
      endTime: "04:00 PM",
      dueHours: "03 hr",
      department: "Design",
      project: "CRM Project",
      notes: "Finalizing mockups",
    },
    {
      id: "#1257",
      name: "Salma Khatun",
      duration: "04 hr",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
      dueHours: "04 hr",
      department: "Development",
      project: "HRM Project",
      notes: "Code review",
    },
  ]);

  const handleColor = (department) => {
    switch (department) {
      case "Design":
        return ["text-green-400", "bg-green-50"];
      case "Development":
        return ["text-blue-400", "bg-blue-50"];
      case "Product":
        return ["text-orange-400", "bg-orange-50"];
      case "Sales":
        return ["text-purple-400", "bg-purple-50"];
    }
  };
  const handleApprove = (index) => {
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
            <h3 className="font-bold text-xl">Employee Time</h3>
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
        <div className="header flex items-center justify-between  ">
          <h2 className="text-xl font-semibold">Employee Time Logs</h2>
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
            <div className="flex items-center space-x-3 text-lg border py-2 px-5 rounded-lg">
              <span className="text-2xl">
                <CgCalendarDates />
              </span>
              <p>Date Range</p>
              <span>
                <GoChevronDown />
              </span>
            </div>
            <div className="flex items-center border px-5 py-2 rounded-lg text-lg space-x-3">
              <p>Status</p>
              <span>
                <GoChevronDown />
              </span>
            </div>

            <div className="flex items-center border px-5 py-2 rounded-lg text-lg space-x-3">
              <p>Department</p>
              <span>
                <GoChevronDown />
              </span>
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
                className={`max-w-max   px-3 py-1 border rounded-3xl   ${
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
              <div className="">
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
                    <button className="text-red-800 flex gap-2 items-center border border-red-800 py-1 rounded-lg px-3  ">
                      <span className="text-lg">
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
              <div className="absolute -right-6 py-3 hover:cursor-pointer  border ">
                <BsThreeDotsVertical />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
