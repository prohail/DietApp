import React from "react";
import Offers from "../components/Offers";
import Welcome from "../components/Welcome";
import Feedback from "../components/Feedback";
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <>
      <div className="landingpage">
        <div className="container py-5">
          <div className="py-5">
            <div className="d-none d-md-block">
              <br />
            </div>
            <p className="fs-5 pt-5">Welcome to Health Coach</p>
            <h1 className="fw-semibold text-dark">
              Unlock Your True
              <span className="fw-bold text-black"> Potential</span> with <br />
              Good Nutrition.
            </h1>
            <span>
              <Link to="/learnmore">
                <button className="btn btn-primary my-3 mx-1">
                  Learn More
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="btn btn-outline-dark my-3 mx-1">
                  Contact Us
                </button>
              </Link>
            </span>
          </div>
          <h3 className="fw-light pt-3 text-dark">
            Get in Shape Faster, Live Your Happy Life.
          </h3>
        </div>
      </div>
      <Offers />
      <Welcome />
      <Feedback />
    </>
  );
}
