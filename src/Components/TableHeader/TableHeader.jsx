const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;