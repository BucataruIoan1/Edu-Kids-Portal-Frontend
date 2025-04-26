import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainPage from '../MainPage/MainPage';
import './Dashboard.css';

const Dashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');

    return (
        <div className="dashboard">
            <div className='dashboard-container'>
                <div className='navbar-container'>
                    <Navbar />
                </div>
                <div className='main-page-container'>
                    <div className='sidebar-component'>
                        <Sidebar setActivePage={setActivePage} />
                    </div>
                    <div className='main-page-component'>
                        <MainPage activePage={activePage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
