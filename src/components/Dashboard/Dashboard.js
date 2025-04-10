import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className='dashboard-container'>
            <div className='navbar-container'>
                <Navbar />
            </div>
            <div className='main-page-container'>
                <div className='sidebar-component'>
                    <Sidebar />
                </div>
                <div className='main-page-component'>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;