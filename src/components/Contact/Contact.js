import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form-wrapper d-flex justify-content-center p-5">
      <form action="#" className="contact-form">
        <h2 className="title">Contact Us</h2>
        <p className="description">
          Feel free to contact us if you need any assistance, any help or
          another question.
        </p>
        <div>
          <input
            type="text"
            className="form-control rounded border-white mb-3 form-input"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            className="form-control rounded border-white mb-3 form-input"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            className="form-control rounded border-white mb-3 form-text-area"
            rows="5"
            cols="30"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="submit-button-wrapper">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
