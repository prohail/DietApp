import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function Feedback() {
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [weight, setWeight] = useState();
  const [feedback, setFeedback] = useState("");
  const [time, setTime] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      weight: weight,
      feedback: feedback,
      time: time,
      plan: selectedPlan,
    };

    try {
      // Send the form data to the server using Axios
      await axios.post("/api/feedback", formData);

      // Reset the form after submitting
      setName("");
      setWeight(0);
      setFeedback("");
      setTime("");
      setSelectedPlan("");
    } catch (error) {
      // Handle any errors that occur during the POST request
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-3 border border-secondary pt-3 px-2">
          <h3 className="fw-light text-dark text-center">
            Healthcare Services
          </h3>
          <p className="text-center fw-light px-1">
            Our healthcare services are dedicated to providing compassionate and
            comprehensive care, focusing on both preventive measures and
            innovative treatments to enhance your well-being.
          </p>
          <p className="link text-center text-primary">
            {user && <Link to="/services"> See Services</Link>}
            {!user && <Link to="/login">Login to See Services</Link>}
          </p>
        </div>

        <div className="col-12 col-md text-light px-1">
          <div className="container bg-primary h-100">
            <h3 className="text-center pt-5 fw-semibold">Feedback</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col m-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control border-0 bg-primary border-bottom text-light"
                    placeholder="Name"
                  />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="form-control border-0 bg-primary border-bottom text-light"
                    placeholder="Weight"
                  />
                </div>

                <div className="col m-4">
                  <input
                    type="text"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="form-control border-0 bg-primary border-bottom text-light"
                    placeholder="Feedback"
                  />
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control border-0 bg-primary border-bottom text-light"
                    placeholder="Time"
                  />
                </div>

                <div className="col m-4">
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="form-control border-0 bg-primary border-bottom text-light"
                    placeholder="Service or Plan"
                  >
                    <option value="" selected>
                      Select a Plan
                    </option>
                    <option value="intermittent">Intermittent fasting</option>
                    <option value="medi">Mediterranean Diet</option>
                    <option value="plantbased">Plant Based Diet</option>
                    <option value="flexi">Flexiterian Diet</option>
                    <option value="keto">Ketogenic Diet</option>
                    <option value="minddiet">The Mind Diet</option>
                  </select>
                  <input
                    type="submit"
                    className="btn btn-light text-primary"
                    placeholder="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
