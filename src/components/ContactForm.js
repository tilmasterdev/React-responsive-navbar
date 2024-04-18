import React, { useEffect, useState } from "react";

import './ContactForm.css'; // Import CSS for the ContactForm

const ContactForm = () => {
   
  const [name, setName] = useState("");
  const [company, setcompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("company", company);
    myForm.set("email", email);
    myForm.set("message", message);
    e.preventDefault();
   
  };


  
  
    
return (
    <div className="contactUsFormDiv">
        
        <div className="rightDiv">
            <div className="formDiv">
            <form onSubmit={handleSubmit} className="formRow">
                <label htmlFor="inputName">Name:</label>
                <input
                type="text"
                className="getInfo"
                id="inputName"
                name="inputName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <label htmlFor="inputcompany">Company Name:</label>
                <input
                type="text"
                className="getInfo"
                id="inputcompany"
                name="inputcompany"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                required
                />

                <label htmlFor="inputEmail">Email:</label>
                <input
                type="email"
                id="inputEmail"
                name="inputEmail"
                className="getInfo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <label htmlFor="inputMessage">Message:</label>
                <textarea
                id="inputMessage"
                name="inputMessage"
                className="getInfoText"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                />

                <button className="btnForm" type="submit">
                Submit
                </button>
            </form>
            </div>
        </div>
     </div>
    );
}

export default ContactForm;
