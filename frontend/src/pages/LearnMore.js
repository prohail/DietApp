import React from "react";
import typesofdiet from "../assets/typesofdiet.jpg";
import importance from "../assets/importance.jpg";
import ideas from "../assets/ideas.jpg";
import started from "../assets/started.jpg";
import exercise from "../assets/exercise.jpg";
import hydration from "../assets/hydaration.jpg";
import habits from "../assets/eatinghabits.jpg";
import gsleep from "../assets/sleep.jpg";

export default function LearnMore() {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="learn-more-card">
              <img
                src={typesofdiet}
                alt="Different Types of Diets"
                className="img-fluid"
              />
              <div className="learn-more-card-content">
                <h2 className="learn-more-card-title">
                  <br />
                  Different Types of Diets
                </h2>
                <p className="learn-more-card-text">
                  Different types of diets offer diverse approaches to achieving
                  specific health and lifestyle goals. <br /> The Mediterranean
                  diet, renowned for its heart-healthy benefits, focuses on
                  consuming fresh fruits, vegetables, whole grains, and olive
                  oil while minimizing red meat intake. <br /> The ketogenic
                  diet, on the other hand, emphasizes high-fat, low-carb foods
                  to induce ketosis, prompting the body to burn fat for fuel.{" "}
                  <br /> Vegans follow a plant-based diet, avoiding all animal
                  products, and typically opt for vegetables, fruits, legumes,
                  nuts, and seeds. <br /> The paleo diet is designed to mimic
                  the eating habits of ancient humans, emphasizing lean meats,
                  fish, fruits, and vegetables, while excluding processed foods
                  and grains. <br /> <br /> Each diet has its merits and caters
                  to individual preferences and nutritional needs. Consulting a
                  healthcare professional is vital in determining which diet
                  suits one's health objectives best.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="learn-more-card">
              <img
                src={importance}
                alt="Importance of a Good Diet"
                className="img-fluid"
              />
              <div className="learn-more-card-content">
                <h2 className="learn-more-card-title">
                  <br />
                  Importance of a Good Diet
                </h2>
                <p className="learn-more-card-text">
                  A balanced and nutritious diet is essential for maintaining
                  good health and overall well-being. Discover the importance of
                  a good diet and how it can positively impact your energy
                  levels, weight management, and disease prevention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="learn-more-card">
              <img src={ideas} alt="Healthy Meal Ideas" className="img-fluid" />
              <div className="learn-more-card-content">
                <h2 className="learn-more-card-title">
                  {" "}
                  <br />
                  Healthy Meal Ideas
                </h2>
                <p className="learn-more-card-text">
                  Healthy meal ideas revolve around nourishing the body with
                  nutrient-dense ingredients while being both delicious and
                  satisfying. Opt for colorful salads packed with leafy greens,
                  vibrant vegetables, and lean proteins like grilled chicken or
                  tofu. Prepare flavorful stir-fries with an assortment of
                  veggies and lean meats or try wholesome grain bowls featuring
                  quinoa, brown rice, or sweet potatoes topped with roasted
                  vegetables and a protein source of choice. Incorporate fruits,
                  nuts, and seeds into yogurt or oatmeal for a nutritious
                  breakfast. <br />
                  Experiment with herbs and spices to add flavor without excess
                  salt or unhealthy fats.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="learn-more-card">
              <img
                src={started}
                alt="Get Started on Your Health Journey"
                className="img-fluid"
              />
              <div className="learn-more-card-content">
                <h2 className="learn-more-card-title">
                  <br />
                  Get Started on Your Health Journey
                </h2>
                <p className="learn-more-card-text">
                  Getting started on your health journey is an empowering step
                  towards a better lifestyle. Begin by setting clear and
                  realistic health goals, whether it's improving fitness, losing
                  weight, or adopting a balanced diet. Consult a healthcare
                  professional or a certified nutritionist to create a
                  personalized plan tailored to your needs and preferences.
                  Incorporate regular exercise, such as walking, jogging, or
                  yoga, into your routine to stay active. Focus on making small,
                  sustainable changes to your diet, like adding more fruits and
                  vegetables and reducing processed foods. <br />
                  <br />
                  Stay consistent, be patient with yourself, and celebrate every
                  progress made along the way. Remember, it's about progress,
                  not perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="learn-more-card">
            <img
              src={exercise}
              alt="Benefits of Regular Exercise"
              className="img-fluid text-center"
            />
            <div className="learn-more-card-content">
              <h2 className="learn-more-card-title">
                <br />
                Benefits of Regular Exercise
              </h2>
              <p className="learn-more-card-text">
                Exercise plays a crucial role in overall well-being. Discover
                the numerous benefits of regular physical activity, including
                improved cardiovascular health, enhanced mood, and increased
                energy levels. Explore various workouts and find the one that
                suits your fitness preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="learn-more-card">
            <img
              src={hydration}
              alt="Hydration and Its Importance"
              className="img-fluid"
            />
            <div className="learn-more-card-content">
              <h2 className="learn-more-card-title">
                <br />
                Hydration and Its Importance
              </h2>
              <p className="learn-more-card-text">
                Staying hydrated is key to maintaining optimal health. Learn
                about the importance of proper hydration, how it supports
                digestion, skin health, and overall body functions. Discover
                tips to help you drink enough water throughout the day and
                incorporate hydrating foods into your diet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="learn-more-card">
            <img
              src={habits}
              alt="Mindful Eating Habits"
              className="img-fluid"
            />
            <div className="learn-more-card-content">
              <h2 className="learn-more-card-title">
                {" "}
                <br />
                Mindful Eating Habits
              </h2>
              <p className="learn-more-card-text">
                Mindful eating is about developing a positive relationship with
                food and being present during meals. Learn how to savor every
                bite, listen to your body's hunger cues, and distinguish
                emotional eating from genuine hunger. Incorporate mindful
                practices into your eating routine to foster healthier habits
                and better digestion.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="learn-more-card">
            <img
              src={gsleep}
              alt="Importance of Sleep for Health"
              className="img-fluid"
            />
            <div className="learn-more-card-content">
              <h2 className="learn-more-card-title">
                <br />
                Importance of Sleep for Health
              </h2>
              <p className="learn-more-card-text">
                Quality sleep is vital for overall well-being. Discover the
                importance of getting sufficient rest for physical and mental
                health. Learn about the benefits of restorative sleep, its
                impact on cognitive function, immune system, and stress
                management. Find effective strategies to improve your sleep
                hygiene and enhance your sleep quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
