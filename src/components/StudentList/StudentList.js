import React, { useState, useEffect } from 'react';
import StudentCard from '../StudentCard/StudentCard.js';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5207/api/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="student-list">
            {students.map((student) => (
                <StudentCard key={student.studentId} student={student} />
            ))}
        </div>
    );
};

export default StudentList;