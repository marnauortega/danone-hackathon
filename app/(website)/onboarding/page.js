"use client";
import { useState, useContext } from "react";
import { UserContext } from "@/components/Providers/UserProvider";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import calculateCalories from "@/lib/calculateCalories";

import styles from "./page.module.css";

const OnBoarding = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let totalCalories;
    if (calculateCalories) {
      if (!genderError && !ageError && !heightError && !weightError)
        totalCalories = calculateCalories(gender, age, height, weight);
    } else {
      if (!caloriesError) totalCalories = calories;
    }

    if (totalCalories && !dietError) {
      setUser(totalCalories, diet);
      console.log(totalCalories, diet);
      router.push("/products");
    }
  };

  const [submitted, setSubmitted] = useState(false);

  const [calculatedCalories, setCalculatedCalories] = useState(true);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("A value must be selected");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("An age must be set");
  const [height, setHeight] = useState("");
  const [heightError, setHeightError] = useState("A height must be set");
  const [weight, setWeight] = useState("");
  const [weightError, setWeightError] = useState("A weight must be set");
  const [diet, setDiet] = useState("");
  const [dietError, setDietError] = useState("A diet must be selected");
  const [calories, setCalories] = useState("");
  const [caloriesError, setCaloriesError] = useState("Calories must be set");

  const handleGender = (e) => {
    let error = "";
    if (e.target.value) {
      setGenderError(error);
    }
    setGender(e.target.value);
  };
  const handleAge = (e) => {
    let error = "";
    if (e.target.value) {
      setAgeError(error);
    }
    if (0 > Number(e.target.value)) {
      error = "Cannot calculate calories for unborns";
      setAgeError(error);
    }
    setAge(e.target.value);
  };
  const handleHeight = (e) => {
    let error = "";
    if (e.target.value) {
      setHeightError(error);
    }
    if (Number(e.target.value) > 260 || 24 > Number(e.target.value)) {
      error = "Height must be between 24 and 260cm";
      setHeightError(error);
    }
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    let error = "";
    if (e.target.value) {
      setWeightError(error);
    }
    if (Number(e.target.value) > 650 || 0.2 > Number(e.target.value)) {
      error = "Weight must be between 0.2 and 650kg";
    }
    setWeightError(error);
    setWeight(e.target.value);
  };
  const handleCalories = (e) => {
    let error = "";
    if (e.target.value) {
      setCaloriesError(error);
    }
    setCalories(e.target.value);
  };
  const handleDiet = (e) => {
    let error = "";
    if (e.target.value) {
      setDietError(error);
    }
    setDiet(e.target.value);
  };

  return (
    <>
      <Header simple={true} />
      <form onSubmit={handleForm}>
        <div className="calories">
          <h2>Set your maximum calory limit here!</h2>
          <div className="tabs">
            <button onClick={() => setCalculatedCalories(true)}>Calculate calory intake</button>
            <button onClick={() => setCalculatedCalories(false)}>Set calory limit manually</button>
          </div>
          {calculatedCalories ? (
            <fieldset>
              <select value={gender} onChange={handleGender}>
                <option value="gender" hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {submitted && genderError && <p>{genderError}</p>}
              <input type="number" placeholder="age" value={age} onChange={handleAge} />
              {submitted && ageError && <p>{ageError}</p>}
              <input type="number" placeholder="height" value={height} onChange={handleHeight} />
              {submitted && heightError && <p>{heightError}</p>}
              <input type="number" placeholder="weight" value={weight} onChange={handleWeight} />
              {submitted && weightError && <p>{weightError}</p>}
            </fieldset>
          ) : (
            <>
              <input type="number" placeholder="calories" value={calories} onChange={handleCalories} />
              {submitted && caloriesError && <p>{caloriesError}</p>}
            </>
          )}
        </div>
        <div className="diet">
          <h2>Set your type of diet</h2>
          <fieldset>
            <label>
              <input type="radio" name="diet" value="avidMeatEater" onChange={handleDiet} />
              Avid meat eater
            </label>
            <label>
              <input type="radio" name="diet" value="omnivore" onChange={handleDiet} />
              Omnivore
            </label>
            <label>
              <input type="radio" name="diet" value="vegetarian" onChange={handleDiet} />
              Vegetarian
            </label>
            <label>
              <input type="radio" name="diet" value="vegan" onChange={handleDiet} />
              Vegan
            </label>
          </fieldset>
          {submitted && dietError && <p>{dietError}</p>}
        </div>
        <button>Set my data</button>
      </form>
    </>
  );
};

export default OnBoarding;
