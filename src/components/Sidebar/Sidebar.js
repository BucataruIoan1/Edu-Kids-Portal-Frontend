import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActivePage }) => {
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => setActivePage('dashboard')}>Dashboard</li>
                <li>School</li>
                <li onClick={() => setActivePage('students')}>Students</li>
                <li>Parents</li>
                <li>Staff</li>
                <li>Courses</li>
                <li>Scheduling</li>
                <li>Grades</li>
                <li>Attendance</li>
                <li>Reports</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;