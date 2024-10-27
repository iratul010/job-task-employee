import "./EmployeeTable.css";
import { RxDownload } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import TablesDataElement from "../../Components/TablesDataElement/TablesDataElement";
import TableHeader from "../../Components/TableHeader/TableHeader";
import EmployeeHeader from "../../Components/EmployeeHeader/EmployeeHeader";
import AddEmployeeBtnModal from "../../Components/AddEmployeeBtnModal/AddEmployeeBtnModal";

const EmployeeTable = () => {
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
          <AddEmployeeBtnModal />
        </div>
      </div>
      {/* Table */}
      <div className="bg-white border rounded-lg px-10 py-10 mx-10 my-10">
        <EmployeeHeader />
        <div className="">
          <TableHeader />

          {data.map((item, index) => (
            <TablesDataElement
              key={item.id}
              data={data}
              setData={setData}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default EmployeeTable;
