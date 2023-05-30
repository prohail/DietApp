import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../assets/services-1.jpg";
import pic2 from "../assets/services-2.jpg";
import pic3 from "../assets/services-3.jpg";
import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div className="container offers">
      <div className="row justify-content-around pb-3">
        <div className="col-12 col-md-4 p-4">
          <Card>
            <Card.Img variant="top" src={pic2} className="img-fluid" />
            <Card.Body className="px-5 fw-light">
              <Card.Title className="text-center">Nutrition Plans</Card.Title>
              <Card.Text className="text-center">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <div className="text-center">
                <Button variant="outline-primary">Read More</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 p-4">
          <Card className="h-100">
            <Card.Img variant="top" src={pic1} className="img-fluid" />
            <Card.Body className="px-5 fw-light">
              <Card.Title className="text-center">Exersise Program</Card.Title>
              <Card.Text className="text-center">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <div className="text-center">
                <Button variant="outline-primary">Read More</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 p-4">
          <Card>
            <Card.Img variant="top" src={pic3} className="img-fluid" />
            <Card.Body className="px-5 fw-light">
              <Card.Title className="text-center">Diet Program</Card.Title>
              <Card.Text className="text-center">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </Card.Text>
              <div className="text-center">
                <Link to="/services">
                  <Button variant="outline-primary">Read More</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
