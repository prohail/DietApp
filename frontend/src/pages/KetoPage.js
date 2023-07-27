import React from "react";
import keto1 from "../assets/keto1.jpg";
import keto2 from "../assets/keto2.jpg";
import keto3 from "../assets/keto3.jpg";
import keto4 from "../assets/keto4.jpg";

const KetoPage = () => {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>What is the Keto Diet?</h2>
            <p>
              The Keto diet, short for ketogenic diet, is a high-fat,
              low-carbohydrate eating plan that aims to shift your body into a
              state of ketosis. In ketosis, your body starts using fat as its
              primary source of energy instead of carbohydrates. This process
              can lead to weight loss and improved metabolic health. <br />{" "}
              <br />
              In addition to promoting weight loss, the Keto diet has shown
              potential in improving various health markers. By reducing
              carbohydrate intake, the diet can help stabilize blood sugar
              levels and enhance insulin sensitivity, making it beneficial for
              individuals with type 2 diabetes or insulin resistance.
            </p>
          </div>
          <div className="col-md-6">
            <img src={keto1} alt="Keto Diet" className="img-fluid rounded" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h2>Keto Meal Ideas</h2>
            <p>
              Keto meals are rich in healthy fats and moderate in protein, with
              very few carbohydrates. Enjoy a delicious avocado and bacon
              omelette for breakfast, followed by a creamy spinach and mushroom
              chicken for lunch. For dinner, savor a mouthwatering cauliflower
              crust pizza topped with cheese and vegetables. <br /> <br />
              When it's time for dessert, treat yourself to a delectable
              keto-friendly cheesecake made with almond flour crust and topped
              with fresh berries. Alternatively, relish in a rich and satisfying
              chocolate avocado mousse, sweetened with a hint of stevia or
              erythritol.
              <br />
              <br />
              For a refreshing beverage, enjoy a creamy keto coffee made with
              coconut oil and heavy cream, or opt for a matcha green tea latte
              prepared with unsweetened almond milk.
              <br />
              <br />
              Remember that the key to success on the Keto diet is to prioritize
              nutrient-dense foods, ensure you're getting enough electrolytes
              and hydration, and listen to your body's hunger and fullness cues.
              Embrace the creativity of the Keto lifestyle, explore new recipes,
              and savor the diverse array of delicious meals that align with
              your health and wellness goals. Bon appétit!
            </p>
          </div>
          <div className="col-md-6">
            <img src={keto2} alt="Keto Meals" className="img-fluid rounded" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img
              src={keto3}
              alt="Ketosis Process"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>How Ketosis Works</h2>
            <p>
              When following the Keto diet, your carbohydrate intake is
              significantly reduced, causing your body to produce ketones from
              stored fat. These ketones become the primary source of fuel for
              your body and brain. Achieving and maintaining ketosis can lead to
              various health benefits, but it's essential to monitor your
              nutrient intake and stay hydrated throughout the process.
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h2>Benefits of the Keto Diet</h2>
            <p>
              The Keto diet has been associated with numerous health benefits.
              Some people experience significant weight loss due to the shift in
              metabolism and reduced appetite. It can also help improve insulin
              sensitivity, blood sugar levels, and triglyceride levels.
              Additionally, the Keto diet has shown promise in managing
              epilepsy, and ongoing research is exploring its potential
              therapeutic effects on other neurological conditions.
              <br />
              <br />
              Another significant benefit of the Keto diet is its positive
              impact on insulin sensitivity and blood sugar levels. By limiting
              carbohydrate intake, the diet can help stabilize blood glucose
              levels and improve insulin sensitivity, which is beneficial for
              individuals with type 2 diabetes or insulin resistance. This can
              also contribute to better overall metabolic health and reduce the
              risk of developing chronic conditions related to insulin
              dysregulation.
              <br />
              <br />
              Elevated triglyceride levels are often associated with an
              increased risk of heart disease, so the ability of the Keto diet
              to improve these levels may have positive implications for
              cardiovascular health.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={keto4}
              alt="Keto Benefits"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KetoPage;
