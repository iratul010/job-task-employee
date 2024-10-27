import { RxDownload } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbPencilMinus } from "react-icons/tb";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const ThreeDot = ( ) => {
  const [isOpen,setIsOpen]  = useState(false);
  const handleDotOpen = (open)=>{
       setIsOpen(open);
       
  }
 

  return (
    <div className="absolute -right-6 py-3 hover:cursor-pointer border">
    <div  className="relative">
    <button
      
        onClick={() => handleDotOpen(!isOpen)}
      >
        <BsThreeDotsVertical />
      </button>
    { isOpen &&
      <div
        className={`absolute right-0 w-[10rem] bg-white shadow-lg flex flex-col items-center z-10 overflow-hidden rounded-lg text-lg text-gray-600`}
      >
        <button className="w-full flex items-center  px-3 py-3 gap-5 border-b hover:bg-gray-50">
          <TbPencilMinus />
          <span>Edit Info</span>
        </button>
        <button className="w-full flex items-center  px-3 py-3 gap-5 border-b hover:bg-gray-50">
        <RxDownload />
          <span>Export Excel </span>
          
        </button>
        <button className="w-full flex items-center  px-3 py-3 gap-5 border-b hover:bg-gray-50 text-red-500">
        <RiDeleteBinLine />

          <span>Delete Info</span>
        </button>
      </div>}
    </div>
    </div>
  );
};

export default ThreeDot;
