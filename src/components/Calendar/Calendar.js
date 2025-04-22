import React, { useState } from "react";
import { motion } from "framer-motion";

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date()); // Adăugăm starea pentru data curentă afișată

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleSelect = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  // Funcții pentru navigare
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const prevYear = () => {
    setCurrentDate(new Date(year - 1, month, 1));
    setSelectedDate(null);
  };

  const nextYear = () => {
    setCurrentDate(new Date(year + 1, month, 1));
    setSelectedDate(null);
  };

  const renderDays = () => {
    const cells = [];

    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`empty-${i}`} className="p-4" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      const dayOfWeek = currentDay.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === month && 
                        selectedDate?.getFullYear() === year;

      cells.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSelect(day)}
          className={`text-center p-4 rounded-lg cursor-pointer transition-all
            ${isWeekend ? "bg-red-100 text-red-600" : "bg-white"}
            ${
              isSelected
                ? "!bg-blue-500 !text-white font-bold shadow-lg"
                : "hover:bg-blue-100"
            }
          `}
        >
          {day}
        </motion.div>
      );
    }

    return cells;
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevYear}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          &lt;&lt;
        </button>
        <button 
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          &lt;
        </button>
        <h2 className="text-2xl font-semibold text-center">
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          &gt;
        </button>
        <button 
          onClick={nextYear}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          &gt;&gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm font-medium text-gray-600 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>

      {selectedDate && (
        <div className="mt-4 text-center text-blue-600 font-medium">
          Data selectată: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;