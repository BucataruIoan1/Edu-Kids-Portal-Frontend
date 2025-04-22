import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';

const icons = {
  students: <FaUserGraduate />,
  staff: <FaChalkboardTeacher />,
  parents: <FaUserFriends />,
};

const InfoCard = ({ type, count }) => {
  const config = {
    students: { title: 'Students', color: 'bg-red-500' },
    staff: { title: 'Staff', color: 'bg-green-500' },
    parents: { title: 'Parents', color: 'bg-blue-600' },
  };

  return (
    <div className={`rounded-lg shadow-md text-white p-4 flex items-center justify-between w-full sm:w-60 ${config[type].color}`}>
      <div className="text-3xl">{icons[type]}</div>
      <div className="text-right">
        <p className="text-lg">{config[type].title}</p>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default InfoCard;