import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic1 from "../assets/keto.png";
import pic2 from "../assets/lowcarb.png";
import pic3 from "../assets/Mediterranean.png";
import pic4 from "../assets/Nocarb.png";
import pic5 from "../assets/vegan.png";
import pic6 from "../assets/protein.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container">
      <div className="p-5">
        <div className="row pt-5 pb-2">
          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic1} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center">
                  Intermittent Fasting
                </Card.Title>
                <Card.Text className="text-center">
                  Intermittent fasting is an eating pattern that alternates
                  between fasting and eating periods for various health
                  benefits.
                </Card.Text>
                <div className="text-center">
                  <Link to="/intermittent-diet">
                    <Button variant="outline-primary">Read More</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic2} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center">
                  Mediterranean Diet
                </Card.Title>
                <Card.Text className="text-center">
                  The Mediterranean diet is a heart-healthy eating plan that
                  emphasizes fruits, vegetables, whole grains, legumes, fish,
                  and olive oil.
                </Card.Text>
                <div className="text-center">
                  <Link to="/medi-diet">
                    <Button variant="outline-primary">Read More</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic3} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center">Plant Based</Card.Title>
                <Card.Text className="text-center">
                  Plant-based diet: Plants rule! Fruits, veggies, whole grains,
                  and more for a healthy and sustainable lifestyle.
                </Card.Text>
                <div className="text-center">
                  <Button variant="outline-primary">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row py-2">
          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic4} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center pt-2">
                  Flexiterian Diet
                </Card.Title>
                <Card.Text className="text-center">
                  Mostly plant-based with occasional meat, providing flexibility
                  and health benefits for balanced eating.
                </Card.Text>
                <div className="text-center">
                  <Button variant="outline-primary">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic5} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center">Ketogenic Diet</Card.Title>
                <Card.Text className="text-center">
                  Low carb, high fat. Promotes ketosis for weight loss and
                  potential health benefits.
                </Card.Text>
                <div className="text-center">
                  <Button variant="outline-primary">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col p-3">
            <Card className="h-100">
              <Card.Img variant="top" src={pic6} className="img-fluid" />
              <Card.Body className="px-5 fw-light">
                <Card.Title className="text-center pt-5">
                  The Mind Diet
                </Card.Title>
                <Card.Text className="text-center">
                  Focus on brain health. Emphasizes fruits, vegetables, whole
                  grains, nuts, and healthy fats for cognitive well-being.
                </Card.Text>
                <div className="text-center">
                  <Button variant="outline-primary">Read More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
