import React from "react";
import Offers from "../components/Offers";
import Welcome from "../components/Welcome";
import Feedback from "../components/Feedback";
import Contactus from "../components/Contactus";

export default function Landingpage() {
  return (
    <>
      <div className="landingpage">
        <div className="container py-5">
          <div className="py-5">
            <div className="d-none d-md-block">
              <br /> <br /> <br /> <br />
            </div>
            <p className="fs-5 pt-5">Welcome to Health Coach</p>
            <h1 className="fw-semibold text-dark">
              Unlock Your True
              <span className="fw-bold text-black"> Potential</span> with <br />
              Good Nutrition.
            </h1>
            <span>
              <button className="btn btn-primary my-3 mx-1">Learn More</button>
              <a href="#contactus" className="link text-decoration-none">
                <button className="btn btn-outline-dark my-3 mx-1">
                  Contact Us
                </button>
              </a>
            </span>
          </div>
          <h3 className="fw-light pt-5 text-dark">
            Get in Shape Faster, Live Your Happy Life.
          </h3>
        </div>
      </div>
      <Offers />
      <Welcome />
      <Feedback />
      <span id="contactus">
        <Contactus />
      </span>
    </>
  );
}
