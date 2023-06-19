"use client";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/components/Providers/UserProvider";
import { usePathname, useRouter } from "next/navigation";
import calculateCalories from "@/lib/calculateCalories";

import styles from "./UserForm.module.css";

const UserForm = () => {
  const pathname = usePathname();
  const { user, setUser } = useContext(UserContext);

  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);

  const [calculatedCalories, setCalculatedCalories] = useState(true);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("A value must be set");
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

  useEffect(() => {
    if (user.gender) {
      setGender(user.gender);
      setGenderError("");
      setAge(user.age);
      setAgeError("");
      setHeight(user.height);
      setHeightError("");
      setWeight(user.weight);
      setWeightError("");
    } else {
      setCalculatedCalories(false);
      setCalories(user.calories);
      setCaloriesError("");
    }
    setDiet(user.diet);
    setDietError("");
  }, [user]);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let totalCalories;
    if (calculatedCalories) {
      if (!genderError && !ageError && !heightError && !weightError)
        totalCalories = calculateCalories(gender, age, height, weight);
    } else {
      if (!caloriesError) totalCalories = calories;
    }

    if (totalCalories && !dietError) {
      setUser({ ...user, gender, age, height, weight, calories: totalCalories, diet });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, gender, age, height, weight, calories: totalCalories, diet })
      );
      if (pathname === "/onboarding") router.push("/products");
    }
  };

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
    if (!e.target.value) {
      error = "Calories must be set";
    }
    setCaloriesError(error);
    setCalories(e.target.value);
  };
  const handleDiet = (e) => {
    let error = "";
    if (!e.target.value) {
      error = "A diet must be selected";
    }
    setDietError(error);
    setDiet(e.target.value);
  };

  return (
    <form onSubmit={handleForm} className={styles.form}>
      <div className={styles.calories}>
        <h2>Set your maximum calory limit here!</h2>
        <div className={styles.tabs}>
          <button
            type="button"
            className={calculatedCalories ? styles.active : ""}
            onClick={() => setCalculatedCalories(true)}
          >
            Calculate calory intake
          </button>
          <button
            type="button"
            className={!calculatedCalories ? styles.active : ""}
            onClick={() => setCalculatedCalories(false)}
          >
            Set calory limit manually
          </button>
        </div>
        {calculatedCalories ? (
          <fieldset>
            <div>
              <select value={gender} onChange={handleGender}>
                <option value="gender" hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {submitted && genderError && <p className={styles.error}>{genderError}</p>}
            </div>
            <div>
              <input type="number" placeholder="Age" value={age} onChange={handleAge} />
              <span className={styles.unitSpan}>years</span>
              {submitted && ageError && <p className={styles.error}>{ageError}</p>}
            </div>
            <div>
              <input type="number" placeholder="Height" value={height} onChange={handleHeight} />
              <span className={styles.unitSpan}>cm</span>
              {submitted && heightError && <p className={styles.error}>{heightError}</p>}
            </div>
            <div>
              <input type="number" placeholder="Weight" value={weight} onChange={handleWeight} />
              <span className={styles.unitSpan}>kg</span>
              {submitted && weightError && <p className={styles.error}>{weightError}</p>}
            </div>
          </fieldset>
        ) : (
          <div className={styles.manualCaloriesWrapper}>
            <input
              type="number"
              placeholder="calories"
              value={calories}
              onChange={handleCalories}
              className={styles.manualCalories}
            />
            {submitted && caloriesError && <p className={styles.error}>{caloriesError}</p>}
            <span className={styles.unitSpan}>kcal</span>
          </div>
        )}
      </div>
      <div className={styles.divider}></div>
      <div className={styles.diet}>
        <h2>Set your type of diet</h2>
        <fieldset>
          <input
            type="radio"
            id="avidMeatEater"
            name="diet"
            value="avidMeatEater"
            checked={diet === "avidMeatEater"}
            onChange={handleDiet}
          />
          <label htmlFor="avidMeatEater" className={diet === "avidMeatEater" ? styles.activeDiet : ""}>
            Avid meat eater
          </label>
          <input
            id="omnivore"
            type="radio"
            name="diet"
            value="omnivore"
            checked={diet === "omnivore"}
            onChange={handleDiet}
          />
          <label htmlFor="omnivore" className={diet === "omnivore" ? styles.activeDiet : ""}>
            Omnivore
          </label>
          <input
            id="vegetarian"
            type="radio"
            name="diet"
            value="vegetarian"
            checked={diet === "vegetarian"}
            onChange={handleDiet}
          />
          <label htmlFor="vegetarian" className={diet === "vegetarian" ? styles.activeDiet : ""}>
            Vegetarian
          </label>
          <input id="vegan" type="radio" name="diet" value="vegan" checked={diet === "vegan"} onChange={handleDiet} />
          <label htmlFor="vegan" className={diet === "vegan" ? styles.activeDiet : ""}>
            Vegan
          </label>
        </fieldset>
        {submitted && dietError && <p className={styles.dietError}>{dietError}</p>}
      </div>
      <button className={styles.submitButton}>Set my data</button>
    </form>
  );
};

export default UserForm;
