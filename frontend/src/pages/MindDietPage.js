import React from "react";
import mind1 from "../assets/mind1.jpg";
import mind2 from "../assets/mind2.jpg";
import mind3 from "../assets/mind3.jpg";
import mind4 from "../assets/mind4.jpg";

const MindDietPage = () => {
  return (
    <div className="container pt-5">
      <div className="py-5">
        <div className="row">
          <div className="col">
            <img
              src={mind1}
              alt="MIND Diet Foods 1"
              className="img-fluid rounded mb-3"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h2>What is the MIND Diet?</h2>
            <p>
              The MIND diet is a dietary pattern that combines aspects of the
              Mediterranean diet and the DASH (Dietary Approaches to Stop
              Hypertension) diet. It is designed to promote brain health and
              reduce the risk of neurodegenerative diseases, such as Alzheimer's
              disease. The MIND diet emphasizes the consumption of
              brain-boosting foods while limiting those that may negatively
              impact cognitive function. <br /> <br />
              This diet encourages the consumption of nutrient-rich foods that
              are beneficial for the brain, such as leafy greens, berries, nuts,
              seeds, whole grains, fish, and poultry. These foods are rich in
              antioxidants, vitamins, and minerals that protect brain cells from
              oxidative stress and inflammation, promoting cognitive vitality.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={mind2}
              alt="MIND Diet Lifestyle"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6">
            <img
              src={mind3}
              alt="MIND Diet Benefits 1"
              className="img-fluid rounded mb-3"
            />
          </div>
          <div className="col-md-6 justify-content-center d-flex">
            <img
              src={mind4}
              alt="MIND Diet Benefits 2"
              className="img-fluid rounded mb-3"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Benefits of the MIND Diet</h2>
            <p>
              The MIND diet has been associated with several benefits for brain
              health. Studies have shown that adhering to the MIND diet can
              reduce the risk of developing Alzheimer's disease and slow down
              cognitive decline in older adults. The diet's focus on
              brain-boosting nutrients and anti-inflammatory foods supports
              overall brain function and may help protect against age-related
              cognitive impairment.
            </p>
          </div>
          <div className="col-md-6">
            <h2>MIND Diet and Lifestyle</h2>
            <p>
              While the MIND diet plays a crucial role in promoting brain
              health, it is also essential to adopt other lifestyle factors for
              overall well-being. Regular physical activity, mental stimulation,
              stress management, and social engagement are complementary
              components that can further support brain health and cognitive
              function.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindDietPage;
