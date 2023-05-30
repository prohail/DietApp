import React, { useState } from "react";

const IntermittentFastingDietPlan = () => {
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

  const generateDietPlan = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * 180 - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * 160 - 5 * age - 161;
    }

    const activityLevel = 1.2;
    const tdee = bmr * activityLevel;

    const calorieDeficit = tdee - calorieGoal;

    const eatingWindowHours = 8;
    const eatingWindowCalories = Math.floor(calorieGoal / eatingWindowHours);

    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dietPlan = [
      {
        day: "Monday",
        fastingWindow: 16,
        eatingWindow: 8,
        meals: [
          { time: "12:00 PM", calories: eatingWindowCalories },
          { time: "3:00 PM", calories: eatingWindowCalories },
          { time: "7:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Tuesday",
        fastingWindow: 18,
        eatingWindow: 6,
        meals: [
          { time: "1:00 PM", calories: eatingWindowCalories },
          { time: "4:00 PM", calories: eatingWindowCalories },
          { time: "7:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Wednesday",
        fastingWindow: 20,
        eatingWindow: 4,
        meals: [
          { time: "2:00 PM", calories: eatingWindowCalories },
          { time: "6:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Thursday",
        fastingWindow: 16,
        eatingWindow: 8,
        meals: [
          { time: "12:00 PM", calories: eatingWindowCalories },
          { time: "3:00 PM", calories: eatingWindowCalories },
          { time: "7:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Friday",
        fastingWindow: 18,
        eatingWindow: 6,
        meals: [
          { time: "1:00 PM", calories: eatingWindowCalories },
          { time: "4:00 PM", calories: eatingWindowCalories },
          { time: "7:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Saturday",
        fastingWindow: 20,
        eatingWindow: 4,
        meals: [
          { time: "2:00 PM", calories: eatingWindowCalories },
          { time: "6:00 PM", calories: eatingWindowCalories },
        ],
      },
      {
        day: "Sunday",
        fastingWindow: 16,
        eatingWindow: 8,
        meals: [
          { time: "12:00 PM", calories: eatingWindowCalories },
          { time: "3:00 PM", calories: eatingWindowCalories },
          { time: "7:00 PM", calories: eatingWindowCalories },
        ],
      },
    ];

    return (
      <ul>
        {dietPlan.map((day) => (
          <li key={day.day}>
            <h4>{day.day}</h4>
            <p>Fasting Window: {day.fastingWindow} hours</p>
            <p>Eating Window: {day.eatingWindow} hours</p>
            <ul>
              {day.meals.map((meal) => (
                <li key={meal.time}>
                  {meal.time}: {meal.calories} calories
                </li>
              ))}
            </ul>
            <hr />
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
          <h3 className="text-center">Your 7-Day Diet Plan:</h3>
          {generateDietPlan()}
        </div>
      )}
    </div>
  );
};

export default IntermittentFastingDietPlan;
