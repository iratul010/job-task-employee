import React from 'react';
import PropTypes from 'prop-types';
import ActionBtnElement from "../ActionBtnElement/ActionBtnElement";
import ThreeDot from "../ThreeDot/ThreeDot";

const TablesDataElement = ({ item, index, data, setData }) => {
  
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
      default:
        return ["text-gray-600", "bg-gray-50"]; // Default case if needed
    }
  };

  return (
    <div
      key={item?.id}
      className={`relative grid grid-cols-9 hover:bg-slate-50 py-4 px-3 items-center ${index !== data?.length - 1 ? "border-b" : ""}`}
    >
      <div className="px-3">{item?.id}</div>
      <div className="px-3">{item?.name}</div>
      <div className="px-3">{item?.duration}</div>
      <div className="px-3">{`${item?.startTime} - ${item?.endTime}`}</div>
      <div className="px-3">{item?.dueHours}</div>
      <div className={`max-w-max font-semibold px-3 py-1 border rounded-3xl ${handleColor(item?.department)[0]} ${handleColor(item?.department)[1]}`}>
        <span className="text-xl">&bull; </span>
        {item?.department}
      </div>
      <div className="px-3">{item?.project}</div>
      <div className="px-3">
        {item?.notes.length > 10 ? `${item?.notes.slice(0, 15)}...` : item?.notes}
      </div>
      {/* action Element */}
      <ActionBtnElement itemStatus={item?.status} setData={setData} index={index} />
      {/* Three Dot */}
      <ThreeDot />
    </div>
  );
};

// PropTypes 
TablesDataElement.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    dueHours: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default TablesDataElement;
