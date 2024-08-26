import { useState } from "react";
import '../styles/WorkExperience.css';

export default function WorkExperience() {
    const [companyName, setCompanyName] = useState('Company Name');
    const [positionTitle, setPositionTitle] = useState('Position Title');
    const [description, setDescription] = useState('Description')//({});
    const [startDate, setStartDate] = useState("TODO")//({});
    const [endDate, setEndDate] = useState("TODO")//({});

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }

    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
    }
    
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleStartDateChange(e) {
        setStartDate(e.target.value);
    }

    function handleEndDateChange(e) {
        setEndDate(e.target.value);
    }

    return (
        <div className="work-experience-container">
            <h1>Experience</h1>
            <input
            type="text"
            value = {companyName}
            onChange={e => {
                handleCompanyNameChange(e);
            }}
            />
            <input
            type="text"
            value = {positionTitle}
            onChange={e => {
                handlePositionTitleChange(e);
            }}
            />
            <input
            type="text"
            value = {description}
            onChange={e => {
                handleDescriptionChange(e);
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