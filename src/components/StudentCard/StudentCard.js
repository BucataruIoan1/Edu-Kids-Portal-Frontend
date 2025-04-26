import React, { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaCheckCircle, FaAddressBook } from 'react-icons/fa';
import './StudentCard.css';

const StudentCard = ({ student }) => {
    const [selectedOption, setSelectedOption] = useState('general');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="student-card">
            <div className="student-left">
                <FaUserCircle size={64} />
                <h3>{student.firstName} {student.lastName}</h3>
                <p>Grade {student.grade}</p>
                <div className="student-icons">
                    <FaEnvelope />
                    <FaCheckCircle />
                    <FaAddressBook />
                </div>

                <ul className="student-options">
                    <li
                        className={selectedOption === 'general' ? 'active' : ''}
                        onClick={() => handleOptionClick('general')}
                    >
                        General Info
                    </li>
                    <li
                        className={selectedOption === 'enrollment' ? 'active' : ''}
                        onClick={() => handleOptionClick('enrollment')}
                    >
                        Enrollment Info
                    </li>
                    <li
                        className={selectedOption === 'address' ? 'active' : ''}
                        onClick={() => handleOptionClick('address')}
                    >
                        Address & Contact
                    </li>
                    <li
                        className={selectedOption === 'family' ? 'active' : ''}
                        onClick={() => handleOptionClick('family')}
                    >
                        Family Info
                    </li>
                    <li
                        className={selectedOption === 'medical' ? 'active' : ''}
                        onClick={() => handleOptionClick('medical')}
                    >
                        Medical Info
                    </li>
                    <li
                        className={selectedOption === 'comments' ? 'active' : ''}
                        onClick={() => handleOptionClick('comments')}
                    >
                        Comments
                    </li>
                    <li
                        className={selectedOption === 'documents' ? 'active' : ''}
                        onClick={() => handleOptionClick('documents')}
                    >
                        Documents
                    </li>
                    <li
                        className={selectedOption === 'application' ? 'active' : ''}
                        onClick={() => handleOptionClick('application')}
                    >
                        Application Info
                    </li>
                    <li
                        className={selectedOption === 'course' ? 'active' : ''}
                        onClick={() => handleOptionClick('course')}
                    >
                        Course Schedule
                    </li>
                </ul>
            </div>

            <div className="student-right">
                {selectedOption === 'general' && (
                    <>
                        <h2>General Information</h2>
                        <div className="info-row">
                            <span><strong>Student Name:</strong> {student.firstName} {student.lastName}</span>
                            <span><strong>Student ID:</strong> {student.studentId}</span>
                        </div>
                        <div className="separator"></div>
                        <h3>Demographic Information</h3>
                        <div className="info-row">
                            <span><strong>Date of Birth:</strong> {student.birthDate?.split('T')[0]}</span>
                            <span><strong>Gender:</strong> {student.gender}</span>
                        </div>
                        <div className="info-row">
                            <span><strong>Race:</strong> {student.race}</span>
                            <span><strong>Ethnicity:</strong> {student.ethnicity}</span>
                        </div>
                        <div className="info-row">
                            <span><strong>Country of Birth:</strong> {student.countryOfBirth}</span>
                            <span><strong>Nationality:</strong> {student.nationality}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentCard;
