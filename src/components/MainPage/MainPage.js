import React, { useEffect, useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import CustomCalendar from '../Calendar/Calendar';
import StudentList from '../StudentList/StudentList';
import './MainPage.css';

const MainPage = ({ activePage }) => {
    const [stats, setStats] = useState({
        students: 0,
        staff: 0,
        parents: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentsRes, staffRes, parentsRes] = await Promise.all([
                    fetch('http://localhost:5207/api/students'),
                    fetch('http://localhost:5207/api/staff'),
                    fetch('http://localhost:5207/api/parents'),
                ]);

                const [students, staff, parents] = await Promise.all([
                    studentsRes.json(),
                    staffRes.json(),
                    parentsRes.json(),
                ]);

                setStats({
                    students: students.length,
                    staff: staff.length,
                    parents: parents.length,
                });
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-3">
            <h3 className="text-xl font-semibold mb-4">Dashboard</h3>

            <div className="flex flex-wrap gap-4 mb-5">
                <InfoCard type="students" count={stats.students} />
                <InfoCard type="staff" count={stats.staff} />
                <InfoCard type="parents" count={stats.parents} />
            </div>

            {activePage === 'dashboard' ? (
                <CustomCalendar />
            ) : (
                <StudentList />
            )}
        </div>
    );
};

export default MainPage;