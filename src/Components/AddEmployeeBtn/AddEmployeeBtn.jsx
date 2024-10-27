import { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";

const AddEmployeeBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="">
      <button
        onClick={() => openModal()}
        className="flex items-center transition duration-300 gap-4 rounded-md py-3 px-4 text-white bg-indigo-500 hover:bg-indigo-600"
      >
        <span className="text-2xl">
          <BsPersonFillAdd />
        </span>
        Add Employee
      </button>
      {isModalOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm text-gray-600">
          <div className="w-[45vw] bg-white rounded-2xl p-6">
            <div className=" w-full flex items-center justify-between px-4 py-3">
              {" "}
              <h2 className=" text-center lg:text-3xl md:text-2xl">
                Employee Information
              </h2>
              <button
                onClick={() => {
                  closeModal();
                }}
                className="font-semibold text-2xl "
              >
                <RxCross1 />
              </button>{" "}
            </div>

            <div className="px-4 py-3 text-md">
              <label className="block text-sm font-medium text-gray-700 py-2">
                Employee ID
              </label>
              <input
                type="text"
                value="#1250"
                className=" border w-[10rem] rounded-lg py-2 border-gray-200 focus:outline-none px-2 text-lg"
              />
            </div>
            <div className="px-4 py-3 text-md  ">
              <label className="block text-sm font-medium text-gray-700 py-3">
                Type Employee Name <span className="text-gray-500">*</span>
              </label>
              <input
                type="text"
                value="Sadik Hasan"
                className=" border lg:w-[27rem] rounded-lg py-2 border-gray-200 focus:outline-none px-2 text-lg"
              />
            </div>
            <div className="px-4 py-3 text-md flex flex-col lg:flex-row lg:items-center  ">
              <div className="mb-4 lg:mb-0 lg:mr-20">
                <p className="py-3">
                  Select Department<span className="text-gray-500">*</span>
                </p>
                <div className="flex items-center">
                  <button className="border rounded-lg py-2 border-gray-200 focus:outline-none px-6 text-lg flex items-center space-x-2">
                    <span>Department</span> <GoChevronDown />
                  </button>
                  <button className="border border-indigo-400 p-1 rounded-lg ml-4 text-indigo-600">
                    <LuPlus />
                  </button>
                </div>
              </div>

              <div>
                <p className="py-3">Select Project</p>
                <div className="flex items-center">
                  <button className="border rounded-lg py-2 border-gray-200 focus:outline-none px-6 lg:text-lg text-md flex items-center space-x-2">
                    <span>CRM Project</span> <GoChevronDown />
                  </button>
                  <button className="border border-indigo-400 p-1 rounded-lg ml-4 text-indigo-600">
                    <LuPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 text-md flex   items-center flex-wrap">
              <div className="lg:mr-20  ">
                <p className="py-3 ">
                  Select Start Time<span>*</span>
                </p>
                <button className="border w-[10rem] rounded-lg py-2 border-gray-200 focus:outline-none px-2 text-lg ">
                  10:15 am
                </button>

                <button className="border border-indigo-400 p-[.4rem] rounded-lg ml-4 text-indigo-600">
                  <LuPlus />
                </button>
              </div>
              <div>
                <p className="py-3 ">Select End Time </p>
                <button className="border w-[10rem] rounded-lg py-2 border-gray-200 focus:outline-none px-2 text-lg ">
                  8:15 pm
                </button>

                <button className="border border-indigo-400 p-[.4rem] rounded-lg ml-4 text-indigo-600">
                  <LuPlus />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center gap-4 p-3">
              <button className="lg:text-xl md:text-md">Cancel</button>
              <button className="lg:text-lg md:text-md bg-indigo-600 text-white p-3 rounded-lg">
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmployeeBtn;
