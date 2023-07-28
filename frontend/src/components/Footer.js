import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="mb-3">EatThisMuch</h5>
            <p>Your go-to source for healthy eating and meal planning.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link
                  to="/learnmore"
                  className="text-light text-decoration-none"
                >
                  Learn More
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/contact-us"
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} EatThisMuch. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
