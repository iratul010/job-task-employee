 
 import { PiXCircleFill } from "react-icons/pi";
 import { FaCheckCircle } from "react-icons/fa";
 // eslint-disable-next-line react/prop-types
 const ActionBtnElement = ({itemStatus,setData,index}) => {
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
   return (
    <div className="text-sm">
    {itemStatus === "approved" ? (
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
    ) : itemStatus === "rejected" ? (
      <div className="flex space-x-3">
        <button className="text-red-600 flex gap-2 items-center border border-red-600 py-1 rounded-lg px-3">
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
          className="bg-green-600 text-gray-50 border px-4 py-1 rounded-lg"
          onClick={() => handleApprove(index)}
        >
          Approve
        </button>
      </div>
    )}
  </div>
   );
 };
 
 export default ActionBtnElement;