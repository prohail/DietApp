import React from "react";
import plant1 from "../assets/plant_1.jpg";
import plant2 from "../assets/plant_2.jpg";
import plant3 from "../assets/plant_3.jpg";
import plant4 from "../assets/plant_4.jpg";
import plant5 from "../assets/plant_5.jpg";
import plant6 from "../assets/plant_6.jpg";

export default function PlantBasedPage() {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>What is a Plant-Based Diet?</h2>
            <p>
              A plant-based diet focuses on consuming whole, unprocessed foods
              that come from plants, such as fruits, vegetables, whole grains,
              legumes, nuts, and seeds. It excludes or minimizes the consumption
              of animal products like meat, dairy, and eggs. <br /> <br />
              By choosing a plant-based lifestyle, individuals often aim to
              reduce their consumption of animal products, including meat,
              dairy, and eggs. This decision is driven by various reasons, such
              as ethical concerns for animal welfare, environmental
              sustainability, and the potential health benefits associated with
              plant-focused diets.
            </p>
          </div>
          <div className="col-md-6">
            <img src={plant1} alt=" 1" className="img-fluid" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <img src={plant2} alt=" 2" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h2>Benefits of a Plant-Based Diet</h2>
            <p>
              Adopting a plant-based diet has numerous health benefits. It can
              reduce the risk of heart disease, lower blood pressure, improve
              digestion, promote weight loss, and boost overall energy levels.
              Additionally, plant-based diets are environmentally friendly, as
              they have a lower carbon footprint compared to diets high in
              animal products.
            </p>
          </div>
          <div className="col-md-4">
            <img src={plant3} alt=" 3" className="img-fluid" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <h2>Getting Started with Plant-Based Eating</h2>
            <p>
              If you're new to plant-based eating, it's essential to start
              gradually. Begin by incorporating more fruits and vegetables into
              your meals and reducing the portion size of animal-based foods.
              Experiment with plant-based recipes and explore a variety of
              flavors and cuisines. Remember to ensure you're getting enough
              essential nutrients like protein, iron, and vitamin B12 from
              plant-based sources or supplements.
            </p>
          </div>
          <div className="col-md-8">
            <img src={plant4} alt=" 4" className="img-fluid" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img src={plant5} alt=" 5" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Plant-Based Protein Sources</h2>
            <p>
              One of the concerns about a plant-based diet is protein intake.
              However, there are plenty of excellent plant-based protein
              sources, such as lentils, chickpeas, tofu, tempeh, quinoa, and
              various types of beans. These protein sources are not only
              nutritious but also delicious and versatile in cooking. Including
              a variety of plant-based proteins in your meals can easily meet
              your daily protein needs. <br /> <br /> Various beans, such as
              black beans, kidney beans, and garbanzo beans, are nutrient-dense
              and adaptable to countless dishes. From savory stews to satisfying
              dips, beans provide a hearty protein boost.
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h2>Plant-Based Meal Ideas</h2>
            <p>
              Transitioning to a plant-based diet can be exciting and enjoyable.
              There are countless delicious meal ideas to explore. You can try a
              colorful Buddha bowl with roasted vegetables and a tahini
              dressing, a hearty vegetable stir-fry with tofu, or a comforting
              lentil soup. Don't forget to incorporate a variety of fruits,
              vegetables, grains, and nuts into your meals to ensure a
              well-balanced and satisfying diet. <br /> <br />
              For a delectable dinner, try stuffed bell peppers with quinoa,
              black beans, and a medley of herbs and spices. Indulge in a creamy
              vegetable curry with coconut milk and chickpeas served over fluffy
              basmati rice. Embrace the versatility of plant-based eating with a
              hearty sweet potato and black bean burger topped with avocado and
              a tangy BBQ sauce. <br /> <br />
              Explore international cuisines too, like a Mediterranean tabbouleh
              salad with quinoa and fresh herbs or a spicy Thai vegetable
              stir-fry with cashews. The possibilities are endless, making each
              meal a culinary adventure that nourishes both body and soul.
            </p>
          </div>
          <div className="col-md-6">
            <img src={plant6} alt=" 6" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
