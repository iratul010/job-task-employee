import { VscChromeClose } from "react-icons/vsc";
import { GoChevronDown } from "react-icons/go";
import { CgCalendarDates } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateRangeModal.css';

// eslint-disable-next-line react/prop-types
const DateRangeModal = ({ active, setActive }) => {
  const dateRangeRef = useRef(null);
  const [isOpenStartCalendar, setIsOpenStartCalendar] = useState(false);
  const [isOpenEndCalendar, setIsOpenEndCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActive]);

  const handleClose = () => {
    setActive(false);
  };

  return (
    <div
      ref={dateRangeRef}
      className={`${
        active ? "block" : "hidden"
      } absolute top-16 right-4 rounded-lg shadow-xl border bg-white p-3 z-10`}
    >
      <div className="p-4 w-[40vw] flex flex-col items-center relative space-y-6">
        <button
          className="absolute top-5 right-4 hover:bg-gray-50 p-2 rounded-lg text-2xl"
          onClick={handleClose}
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

              {/* Start Date */}
              <td className="col-span-2 relative">
                <button
                  onClick={() => setIsOpenStartCalendar(!isOpenStartCalendar)}
                  className="flex flex-1 items-center justify-between border py-2 px-2 rounded-lg border-gray-200 w-full"
                >
                  <span>
                    {startDate ? startDate.toLocaleDateString() : "15-07-2024"}
                  </span>
                  <CgCalendarDates className="text-2xl" />
                </button>
                {isOpenStartCalendar && (
                  <div
                    className="w-auto absolute left-0 top-14 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-20"
                  >
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        setIsOpenStartCalendar(false);  
                      }}
                      inline
                      calendarClassName="calendar-datepicker !border-none !rounded-lg"
                    />
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsOpenStartCalendar(false)}
                        className="flex-1 mt-3 px-4 py-2 bg-white rounded-lg transition-colors border"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsOpenStartCalendar(false)}
                        className="flex-1 mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Set Date
                      </button>
                    </div>
                  </div>
                )}
              </td>

              {/* End Date */}
              <td className="col-span-2 relative">
                <button
                  onClick={() => setIsOpenEndCalendar(!isOpenEndCalendar)}
                  className="flex flex-1 items-center justify-between border py-2 px-2 rounded-lg border-gray-200 w-full"
                >
                  <span>
                    {endDate ? endDate.toLocaleDateString() : "21-07-24"}
                  </span>
                  <CgCalendarDates className="text-2xl" />
                </button>
                {isOpenEndCalendar && (
                  <div
                    className="w-auto absolute left-0 top-14 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-20"
                  >
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);
                        setIsOpenEndCalendar(false);  
                      }}
                      inline
                      calendarClassName="calendar-datepicker !border-none !rounded-lg"
                    />
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsOpenEndCalendar(false)}
                        className="flex-1 mt-3 px-4 py-2 bg-white rounded-lg transition-colors border"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsOpenEndCalendar(false)}
                        className="flex-1 mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Set Date
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex items-center justify-end">
          <div className="flex items-center gap-4 space-x-3 justify-center">
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-lg active:scale-95 focus:outline-none transition-transform duration-200 ease-in-out"
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
  );
};

export default DateRangeModal;
