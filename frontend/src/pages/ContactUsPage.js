import React, { useState } from "react";
import axios from "axios";
import touch from "../assets/touch.jpg";
import { useAuthContext } from "../hooks/useAuthContext";

const ContactUsPage = () => {
  const phoneNumber = "+923159877908";
  const emailAddress = "hameed.khan3501@gmail.com";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
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
