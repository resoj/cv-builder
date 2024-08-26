import { useState } from "react";
import '../styles/EducationalInfo.css';

export default function EducationalInfo() {
    const [schoolName, setSchoolName] = useState('University of Kentucky');
    const [titleOfStudy, setTitleOfStudy] = useState('Computer Science');
    const [startDate, setStartDate] = useState("TODO")//({});
    const [endDate, setEndDate] = useState("TODO")//({});

    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function handleTitleOfStudyChange(e) {
        setTitleOfStudy(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    return (
        <div className="educational-info-container">
            <h1>Education</h1>
            <input
            type="text"
            value = {schoolName}
            onChange={e => {
                handleSchoolNameChange(e);
            }}
            />
            <input
            type="text"
            value = {titleOfStudy}
            onChange={e => {
                handleTitleOfStudyChange(e);
            }}
            />
            <input
            type="text"
            value = {startDate}
            onChange={e => {
                handleStartDateChange(e);
            }}
            />
            <input
            type="text"
            value = {endDate}
            onChange={e => {
                handleEndDateChange(e);
            }}
            />
        </div>
    )
}