import React from "react";

export default function Contactus() {
  return (
    <div className="container p-5 bg-dark rounded-3">
      <h3 className="text-light text-center fw-semibold pb-4">Contact Us</h3>
      <form className="w-50 text-light mx-auto bg-dark">
        <input
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          className="form-control bg-dark text-light"
          placeholder="Enter Your Email"
        />
        <input
          type="text"
          className="form-control bg-dark text-light py-5"
          placeholder="Enter Your Message"
        />
        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-light w-50"
          />
        </div>
      </form>
    </div>
  );
}
