import React, { useState } from "react";

const MediterraneanDietPlan = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [calorieGoal, setCalorieGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCalorieGoalChange = (event) => {
    setCalorieGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const generateMediterraneanDietPlan = () => {
    // Generate the personalized Mediterranean diet plan based on user inputs
    // Use age, weight, gender, and calorie goal to customize the plan

    // Calculate Basal Metabolic Rate (BMR) based on user's inputs
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * 180 - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * 160 - 5 * age - 161;
    }

    // Calculate the Total Daily Energy Expenditure (TDEE) based on the BMR and activity level
    const activityLevel = 1.2; // Assuming sedentary activity level
    const tdee = bmr * activityLevel;

    // Calculate the calorie deficit based on the calorie goal
    const calorieDeficit = tdee - calorieGoal;

    // Calculate the daily calorie intake
    const dailyCalorieIntake = Math.floor(calorieGoal / 7);

    // Define the diet plan for each day of the week
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dietPlan = daysOfWeek.map((day) => ({
      day,
      meals: [
        { time: "Breakfast", calories: Math.floor(dailyCalorieIntake * 0.25) },
        { time: "Lunch", calories: Math.floor(dailyCalorieIntake * 0.35) },
        { time: "Snack", calories: Math.floor(dailyCalorieIntake * 0.1) },
        { time: "Dinner", calories: Math.floor(dailyCalorieIntake * 0.3) },
        { time: "Dessert", calories: Math.floor(dailyCalorieIntake * 0.05) },
      ],
    }));

    return (
      <ul>
        {dietPlan.map((day) => (
          <li key={day.day}>
            <h4>{day.day}</h4>
            <ul>
              {day.meals.map((meal) => (
                <li key={meal.time}>
                  {meal.time}: {meal.calories} calories
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <label className="fw-semibold">
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <label className="fw-semibold">
          Weight (in kg):
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
        <label className="fw-semibold">
          Gender:
          <select
            className="form-control"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="fw-semibold">
          Calorie Goal:
          <input
            type="number"
            value={calorieGoal}
            onChange={handleCalorieGoalChange}
          />
        </label>
        <button type="submit">Generate Diet Plan</button>
      </form>
      <br /> <br />
      {submitted && (
        <div>
          <h3 className="text-center">Your 7-Day Mediterranean Diet Plan:</h3>
          {generateMediterraneanDietPlan()}
        </div>
      )}
    </div>
  );
};

export default MediterraneanDietPlan;
