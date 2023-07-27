import React, { useState } from "react";
import axios from "axios";
import touch from "../assets/touch.jpg";
import { useAuthContext } from "../hooks/useAuthContext";

const ContactUsPage = () => {
  const phoneNumber = "+1234567890";
  const emailAddress = "contact@example.com";
  const [msg, setMsg] = useState("");
  const { user } = useAuthContext();

  const handleWhatsAppClick = () => {
    const defaultWhatsAppMessage = encodeURIComponent("Hi, I have a question.");
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultWhatsAppMessage}`
    );
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleSubmit = async () => {
    let name, email, mssg;
    if (user) {
      name = user.name || user.user.name;
      email = user.email || user.user.email;
    } else {
      name = "Anonymous";
      email = "Anonymous";
    }
    mssg = msg;

    try {
      await axios.post("/api/message", {
        name: name,
        email: email,
        mssg: mssg,
      });
      // Optionally, you can handle the successful submission here (e.g., show a success message)
      console.log("Message sent successfully!");
      // Clear the message input after successful submission
      setMsg("");
    } catch (error) {
      console.log(error);
      // Optionally, you can handle the error here (e.g., show an error message)
    }
  };

  return (
    <div className="container pt-5">
      <div className="py-5">
        <h1 className="text-center mb-4">Contact Us</h1>

        <div className="row">
          <div className="col-md-6">
            <img src={touch} alt="Contact Us" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <p>
              We value your inquiries and feedback. Reach out to us for any
              questions, suggestions, or support. Our team is here to assist you
              on your health journey.
            </p>
            <div className="d-flex align-items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-whatsapp me-2"
                viewBox="0 0 16 16"
              >
                {/* WhatsApp SVG path */}
              </svg>
              <span>{phoneNumber}</span>
              <button
                className="btn btn-sm btn-success ms-2"
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </button>
            </div>
            <div className="d-flex align-items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-envelope me-2"
                viewBox="0 0 16 16"
              >
                {/* Email SVG path */}
              </svg>
              <span>{emailAddress}</span>
              <button
                className="btn btn-sm btn-primary ms-2"
                onClick={handleEmailClick}
              >
                Email
              </button>
            </div>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Your Message
              </label>
              <textarea
                id="messageInput"
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
