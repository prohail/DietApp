import React from "react";
import fasting_dp from "../assets/fasting_dp.jpg";
import fasting_recipe from "../assets/fasting_recipe.jpg";
import fasting_benifits from "../assets/fasting_benifits.jpg";
import fasting_incorp from "../assets/fasting_incorp.jpg";

const IntermittentFastingPage = () => {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <h1 className="text-center mb-4">Intermittent Fasting Plan</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={fasting_dp}
                alt="Intermittent Fasting Plan"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <br />
                  Intermittent Fasting Plan
                </h2>
                <p className="card-text">
                  Intermittent fasting is an eating pattern that alternates
                  between periods of fasting and eating. It does not prescribe
                  specific foods but rather focuses on when you should eat. Some
                  popular methods include the 16/8 method, where you fast for 16
                  hours and eat during an 8-hour window, and the 5:2 method,
                  where you eat normally for 5 days and restrict calorie intake
                  on the other 2 days. Explore the different types of
                  intermittent fasting plans and discover how it can help with
                  weight management, improved metabolism, and overall health.{" "}
                  <br />
                  <br />
                  Intermittent fasting is a versatile approach to healthy eating
                  that can be adapted to suit individual preferences and
                  lifestyles. While the 16/8 and 5:2 methods are popular, there
                  are other variations, such as the Eat-Stop-Eat method (24-hour
                  fasts once or twice a week) and the Warrior Diet (20-hour fast
                  with a 4-hour eating window). It is essential to remember that
                  intermittent fasting may not be suitable for everyone,
                  especially those with certain medical conditions or dietary
                  needs. As with any dietary plan, consulting with a healthcare
                  professional or registered dietitian is crucial to ensure that
                  intermittent fasting is safe and suitable for individual
                  health goals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={fasting_benifits}
                alt="Health Benefits of Intermittent Fasting"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  <br />
                  Health Benefits of Intermittent Fasting
                </h2>
                <p className="card-text">
                  Intermittent fasting has gained popularity not only for its
                  potential benefits for weight management but also for various
                  other health benefits. Studies suggest that intermittent
                  fasting may improve insulin sensitivity, support brain
                  function, reduce inflammation, and promote longevity. Learn
                  about the science-backed health benefits of intermittent
                  fasting and how it can contribute to overall well-being when
                  incorporated into a balanced lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 order-md-2">
            <div className="card">
              <img
                src={fasting_incorp}
                alt="Incorporating Intermittent Fasting"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  <br />
                  Incorporating Intermittent Fasting
                </h2>
                <p className="card-text">
                  Intermittent fasting can be a powerful tool for some people,
                  but it may not be suitable for everyone. If you're interested
                  in trying intermittent fasting, it's essential to approach it
                  in a way that works best for your body and lifestyle. Learn
                  how to incorporate intermittent fasting safely and
                  effectively, including tips on adjusting your eating windows
                  and staying hydrated during fasting periods. Consulting with a
                  healthcare professional or a registered dietitian can provide
                  personalized guidance to ensure you adopt a fasting plan that
                  aligns with your individual needs and health goals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 order-md-4">
            <div className="card">
              <img
                src={fasting_recipe}
                alt="Intermittent Fasting Recipes"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  <br />
                  Intermittent Fasting Recipes
                </h2>
                <p className="card-text">
                  While intermittent fasting doesn't prescribe specific foods,
                  it's essential to maintain a balanced and nutritious diet
                  during eating windows. Discover a collection of delicious and
                  filling recipes that are suitable for intermittent fasting
                  periods. From nutrient-packed smoothies to hearty salads and
                  nourishing soups, these recipes will keep you satiated and
                  energized throughout your fasting plan. Remember to prioritize
                  nutrient-dense foods during your eating windows to support
                  your health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermittentFastingPage;
