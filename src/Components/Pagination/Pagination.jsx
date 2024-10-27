import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Pagination = () => {
  const [serial, setSerial] = useState([1, 2, 3, 4, '...', 6, 7, 8]);
  return (
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
            className={`cursor-pointer border px-3 py-1 rounded-lg ${index===4? 'bg-white':'bg-transparent'}`}
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
  );
};

export default Pagination;