import React from "react";
import medi_dp from "../assets/medi-dp.jpg";
import medi_recipe from "../assets/medi-recipe.jpg";
import medi_benifits from "../assets/medi-benifits.jpg";
import medi_incorp from "../assets/medi-incorp.jpg";

const MediterraneanDietPage = () => {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <h1 className="text-center mb-4">Mediterranean Diet</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={medi_dp}
                alt="Mediterranean Diet Plan"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">Mediterranean Diet Plan</h2>
                <p className="card-text">
                  The Mediterranean diet is a heart-healthy eating plan inspired
                  by the traditional dietary patterns of countries bordering the
                  Mediterranean Sea. It emphasizes fresh fruits and vegetables,
                  whole grains, nuts, olive oil, fish, and lean proteins.
                  Discover the health benefits of this balanced and delicious
                  diet and how it can contribute to a longer, healthier life.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={medi_recipe}
                alt="Mediterranean Diet Recipes"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">Mediterranean Diet Recipes</h2>
                <p className="card-text">
                  The Mediterranean diet is renowned for its emphasis on fresh,
                  whole foods and healthy fats. It is inspired by the
                  traditional eating patterns of countries bordering the
                  Mediterranean Sea, such as Greece, Italy, and Spain. The diet
                  is characterized by an abundance of fruits and vegetables,
                  whole grains, legumes, nuts, and seeds. Olive oil is a primary
                  source of healthy fats in this diet, while fish and poultry
                  are consumed in moderation. Red meat and processed foods are
                  limited. <br /> <br />
                  Mediterranean diet recipes often showcase the vibrant flavors
                  of herbs and spices like basil, oregano, garlic, and rosemary,
                  enhancing the natural taste of ingredients. Salads are a
                  staple, featuring colorful combinations of fresh vegetables
                  and olives, dressed with olive oil and vinegar. Seafood dishes
                  are also prevalent, such as grilled fish seasoned with
                  aromatic herbs or a hearty seafood stew. <br /> <br />
                  Incorporating Mediterranean recipes into your diet can offer
                  numerous health benefits. The diet has been linked to reduced
                  risk of heart disease, lower cholesterol levels, improved
                  weight management, and better overall health. Its focus on
                  whole, unprocessed foods and nutrient-rich ingredients makes
                  it a delicious and nutritious way to support your well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={medi_benifits}
                alt="Health Benefits of the Mediterranean Diet"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  Health Benefits of the Mediterranean Diet
                </h2>
                <p className="card-text">
                  The Mediterranean diet is not only delicious but also offers
                  numerous health benefits. Studies have shown that it can
                  reduce the risk of heart disease, improve brain health, and
                  promote weight loss. Discover the science behind the
                  Mediterranean diet and how it can support your overall
                  well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <img
                src={medi_incorp}
                alt="Incorporating the Mediterranean Diet"
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title">
                  Incorporating the Mediterranean Diet
                </h2>
                <p className="card-text">
                  Ready to embrace the Mediterranean lifestyle? Learn how to
                  incorporate the key components of this diet into your daily
                  meals. We'll provide you with practical tips on grocery
                  shopping, meal planning, and making flavorful dishes inspired
                  by the Mediterranean region. Start your journey to a healthier
                  you with the Mediterranean diet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediterraneanDietPage;
