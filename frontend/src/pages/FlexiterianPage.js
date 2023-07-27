import React from "react";
import flexi1 from "../assets/flexi1.jpg";
import flexi2 from "../assets/flexi2.jpg";
import flexi3 from "../assets/flexi3.jpg";
import flexi4 from "../assets/flexi4.jpg";
import flexi5 from "../assets/flexi5.jpg";

export default function FlexiterianPage() {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={flexi1}
              alt="Flexitarian Diet"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>What is a Flexitarian Diet?</h2>
            <p>
              The Flexitarian diet is a flexible and balanced approach to eating
              that primarily focuses on plant-based foods, while occasionally
              incorporating meat and animal products in moderation. This
              flexible approach allows individuals to enjoy the benefits of a
              plant-based diet while still having the freedom to include small
              amounts of animal-based foods if desired.
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src={flexi2}
              alt="Flexitarian Meals"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2>Flexitarian Meal Ideas</h2>
            <p>
              Flexitarian meals are diverse and flavorful, incorporating a
              variety of plant-based ingredients complemented by occasional
              animal-based proteins. Enjoy a colorful vegetable stir-fry with
              cashews, tofu, and a savory sauce. Savor a quinoa and grilled
              chicken salad topped with fresh herbs and a lemon vinaigrette.
              Delight in a hearty lentil and vegetable stew with a side of
              crusty whole-grain bread. <br /> <br />
              For brunch, whip up a mouthwatering spinach and feta frittata made
              with free-range eggs and fresh spinach leaves. Treat yourself to a
              veggie-loaded whole wheat pasta primavera, featuring seasonal
              vegetables and a sprinkle of grated Parmesan cheese. <br /> <br />
              Cap off your day with a luscious dessert like a mixed berry
              crumble made with oats, almonds, and a touch of maple syrup. Or
              indulge in a velvety chocolate avocado mousse, satisfying your
              sweet cravings guilt-free.
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={flexi3}
              alt="Flexitarian Approach"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>The Flexitarian Approach</h2>
            <p>
              Flexitarians have the freedom to personalize their diet based on
              individual preferences and health goals. This approach encourages
              a higher consumption of nutrient-dense plant-based foods like
              fruits, vegetables, whole grains, nuts, and seeds. When including
              animal-based products, opt for lean sources like poultry, fish,
              and dairy. The key is to strike a balance that aligns with your
              lifestyle and promotes overall well-being.
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src={flexi4}
              alt="Flexitarian Benefits"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2>Benefits of a Flexitarian Diet</h2>
            <p>
              The Flexitarian diet offers numerous health benefits. By
              emphasizing plant-based foods, it naturally promotes weight
              management, lowers the risk of chronic diseases, and enhances
              overall vitality. The inclusion of occasional animal-based
              proteins provides essential nutrients, such as vitamin B12 and
              iron, while maintaining a reduced environmental impact. This
              flexible approach fosters a positive relationship with food,
              encouraging enjoyment and mindfulness in eating. <br /> <br />
              Additionally, the Flexitarian diet supports heart health by
              reducing the intake of saturated fats and cholesterol typically
              found in high quantities in animal products. By incorporating more
              fruits, vegetables, and whole grains, the diet provides an
              abundance of vitamins, minerals, and antioxidants that contribute
              to a strengthened immune system and improved overall well-being.
            </p>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Flexitarian Recipes</h2>
            <p>
              Explore a plethora of delectable Flexitarian recipes that will
              tantalize your taste buds. Try a flavorful chickpea and sweet
              potato curry, a zesty black bean and avocado salad, or a
              mouthwatering roasted vegetable and feta quiche. These innovative
              dishes will inspire your culinary creativity and showcase the
              endless possibilities of the Flexitarian diet.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={flexi5}
              alt="Flexitarian Recipes"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
