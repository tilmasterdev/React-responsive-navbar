import React, { useEffect, useState } from "react";

import "./Contact.css"; // Import CSS for the ContactForm





const CountdownTimer = ({ expiryTimestamp }) => {
  const calculateTimeLeft = () => {
    const difference = expiryTimestamp - Date.now();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdownTimer">
      <h1>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</h1>
    </div>
  );
};


const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("phone", phone);
    myForm.set("email", email);
    myForm.set("text", text);
    e.preventDefault();
  };
  const expiryTimestamp = new Date('2024-05-01').getTime();

  return (
    <div className="contactUsFormDiv">
      <video src="" controls width="90%" height="auto" />
      <div className="formDiv">
        <form onSubmit={handleSubmit} className="formRow">
          <label htmlFor="inputName">Full Name:</label>
          <input
            type="text"
            className="getInfo"
            id="inputName"
            name="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="inputphone">Phone Number:</label>
          <input
            type="tel"
            className="getInfo"
            id="inputphone"
            name="inputphone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />

          <label htmlFor="inputEmail">Email Address:</label>
          <input
            type="email"
            id="inputEmail"
            name="inputEmail"
            className="getInfo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="inputMessage">XXXXX XXXXX XXXXX</label>
          <input
            type="text"
            id="inputText"
            name="inputText"
            className="getInfo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="btnForm" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="subHeading">
        <h2>Header</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus commodi nam est harum ullam cumque quia sint perferendis inventore. Labore ducimus qui obcaecati aut neque repellat, facere perferendis corporis consectetur porro odit temporibus tenetur commodi placeat ipsa cumque? Quod, ullam quidem! Quibusdam laborum, nam dicta aliquam vitae beatae aliquid quia! Repellendus repellat fugiat, quas possimus nisi rerum consectetur quibusdam excepturi praesentium quae pariatur officia eaque accusantium vitae quo illo, animi magni fuga iste atque! Quam enim voluptatum eius accusamus voluptatem.
        </p>
      </div>
      <div className="additionalInfo">
        <button className="additionalButton">Enquiry Now</button>
        <p>Time is Running Out For Our Limited Offer!</p>
        <CountdownTimer expiryTimestamp={expiryTimestamp} />
      </div>
    </div>
  );
};

export default ContactForm;
