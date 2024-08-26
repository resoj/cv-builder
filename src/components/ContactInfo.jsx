import { useState } from "react";
import '../styles/ContactInfo.css';

export default function ContactInfo() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Smith');
    const [emailAddress, setEmailAddress] = useState('john.smith@email.com');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleEmailAddressChange(e) {
        setEmailAddress(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <div className="contact-info-container">
            <h1>Contact Information</h1>
            <input
            type="text"
            value = {firstName}
            onChange={e => {
                handleFirstNameChange(e);
            }}
            />
            <input
            type="text"
            value = {lastName}
            onChange={e => {
                handleLastNameChange(e);
            }}
            />
            <input
            type="text"
            value = {emailAddress}
            onChange={e => {
                handleEmailAddressChange(e);
            }}
            />
            <input
            type="text"
            value = {phoneNumber}
            onChange={e => {
                handlePhoneNumberChange(e);
            }}
            />
        </div>
    )
}