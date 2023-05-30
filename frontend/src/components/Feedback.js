import React from "react";

export default function Feedback() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-3 border border-secondary p-5">
          <h3 className="fw-light text-dark text-center">
            Healthcare Services
          </h3>
          <p className="text-center fw-light px-4">
            A small river named Duden flows by their place and supplies
          </p>
          <p className="link text-center text-primary">See Services</p>
        </div>

        <div className="col-12 col-md-6 text-light px-1">
          <div className="container bg-primary h-100">
            <h3 className="text-center pt-5 fw-semibold">Feedback</h3>
            <div className="row">
              <div className="col m-4">
                <input
                  type="text"
                  className="form-control border-0 bg-primary border-bottom text-light"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control border-0 bg-primary border-bottom text-light"
                  placeholder="Weight"
                />
              </div>

              <div className="col m-4">
                <input
                  type="text"
                  className="form-control border-0 bg-primary border-bottom text-light"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className="form-control border-0 bg-primary border-bottom text-light"
                  placeholder="Time"
                />
              </div>

              <div className="col m-4">
                <input
                  type="text"
                  className="form-control border-0 bg-primary border-bottom text-light"
                  placeholder="Service or Plan"
                />
                <input
                  type="submit"
                  className="btn btn-light text-primary"
                  placeholder="Submit"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 border border-secondary p-5">
          <h3 className="fw-light text-dark text-center">
            Find a Health Expert
          </h3>
          <p className="text-center fw-light px-4">
            A small river named Duden flows by their place and supplies
          </p>
          <p className="link text-center text-primary">Meet our Coach</p>
        </div>
      </div>
    </div>
  );
}
