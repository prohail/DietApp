import React from "react";
import MediterraneanDietPlan from "../components/MediterraneanDietPlan";

const Mediterranean = () => {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <h1 className="text-center text-dark fw-semibold">
          Mediterranean Diet
        </h1>
        <br />
        <h2>What is the Mediterranean Diet?</h2>
        <p className="fs-5 text-dark">
          The Mediterranean diet is a way of eating inspired by the traditional
          dietary patterns of the Mediterranean region. It emphasizes whole,
          nutrient-rich foods and is known for its association with numerous
          health benefits.
        </p>
        <br />

        <h2>Benefits of the Mediterranean Diet</h2>
        <p className="fs-5 text-dark">
          The Mediterranean diet has been extensively studied and has been
          linked to various health benefits, including:
        </p>
        <ul>
          <li>Promotes heart health and reduces the risk of heart disease</li>
          <li>Supports weight management and healthy weight loss</li>
          <li>Provides a wide range of essential nutrients</li>
          <li>
            Reduces the risk of chronic diseases, such as diabetes and certain
            cancers
          </li>
          <li>Improves brain health and cognitive function</li>
          <li>Enhances overall well-being and longevity</li>
        </ul>
        <br />

        <h2>Tips for Getting Started with the Mediterranean Diet</h2>
        <ul>
          <li>Incorporate plenty of fruits and vegetables into your meals</li>
          <li>Choose whole grains instead of refined grains</li>
          <li>Include legumes, such as beans and lentils, in your diet</li>
          <li>Opt for healthy fats like olive oil and nuts</li>
          <li>
            Consume moderate amounts of lean proteins, such as fish and poultry
          </li>
          <li>
            Reduce red meat consumption and replace with plant-based proteins
          </li>
          <li>
            Enjoy dairy products in moderation, focusing on low-fat options
          </li>
          <li>Stay hydrated by drinking water and limiting sugary beverages</li>
          <li>
            Use herbs and spices to flavor your dishes instead of excessive salt
          </li>
          <li>Practice mindful eating and savor your meals with loved ones</li>
        </ul>
        <br />

        <h2>Important Considerations</h2>
        <p className="fs-5 text-dark">
          While the Mediterranean diet offers numerous benefits, it's important
          to note that individual dietary needs may vary. It's always a good
          idea to consult with a healthcare professional or a registered
          dietitian before making any significant changes to your diet.
        </p>
        <p className="fs-5 text-dark">
          Additionally, the Mediterranean diet is more than just a list of foods
          to eat; it's a lifestyle that includes regular physical activity,
          enjoying meals with others, and embracing the overall Mediterranean
          way of life.
        </p>
      </div>
      <h1 className="text-center text-dark fw-semibold">
        Start Your Mediterranean Journey Today!
      </h1>
      <br />
      <MediterraneanDietPlan />
    </div>
  );
};

export default Mediterranean;
