import React from 'react';
import CustomCalendar from '../Calendar/Calendar.js';
import './MainPage.css';

const MainPage = () => {
    return (
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
        <CustomCalendar />
      </div>
    );
  };

export default MainPage;
