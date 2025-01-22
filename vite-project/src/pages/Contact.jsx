import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailBlur = () => {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      setEmailError("Your email is invalid.");
    } else {
      setEmailError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactName("");
  };

  return (
    <div>
      <h1>Contact</h1>
      <div className="container text-center">
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="contactName">Name:</label>
            <input
              className="input-field"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              name="contactName"
              type="text"
              placeholder="Name"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="emailAddress">Email address:</label>
            <input
              className="input-field"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              onBlur={handleEmailBlur}
              name="emailAddress"
              type="text"
              placeholder="Email Address"
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows="4"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button className="submit-button" type="submit">
            Submit
          </button>

          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </form>
      </div>
    </div>
  );
}
