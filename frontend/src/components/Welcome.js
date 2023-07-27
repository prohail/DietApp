import React from "react";
import pic from "../assets/coach-1.jpg";

export default function Welcome() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={pic} alt="Coach" className="img-fluid" />
        </div>

        <div className="col-12 col-md-8 text-start pt-3 ps-2 pe-5">
          <h6 className="display-7 text-primary">WELCOME TO HEALTHCARE</h6>
          <h3 className="text-dark fw-bold fs-4 pe-5">
            Hello! Health Care is a natural way of improving <br /> your health
          </h3>
          <br />
          <p className="display-7 fw-light text-secondary pe-5">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an
            almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World
            of Grammar. <br /> <br /> A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
      </div>
    </div>
  );
}
