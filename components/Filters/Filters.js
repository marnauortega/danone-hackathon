"use client";

import { useContext, useEffect } from "react";
import { UserContext } from "@/components/Providers/UserProvider";

import styles from "./Filters.module.css";

const Filters = () => {
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    const userJSON = localStorage.getItem("user");

    if (userJSON) {
      setUser(JSON.parse(userJSON));
    }
  }, []);

  const meals = [
    {
      id: 1,
      name: "breakfast",
      percentage: 30,
    },
    {
      id: 2,
      name: "lunch",
      percentage: 30,
    },
    {
      id: 3,
      name: "dinner",
      percentage: 30,
    },
    {
      id: 4,
      name: "breakfast",
      percentage: 30,
    },
  ];

  const diets = [
    {
      id: 1,
      name: "avidMeatEater",
      title: "Avid meat eater",
    },
    {
      id: 2,
      name: "omnivore",
      title: "Omnivore",
    },
    {
      id: 3,
      name: "vegetarian",
      title: "Vegetarian",
    },
    {
      id: 4,
      name: "vegan",
      title: "Vegan",
    },
  ];

  return (
    <div className={styles.filters}>
      <p>Your recommendations</p>
      {meals.map((meal) => (
        <div key={meal.id}>
          <input type="radio" id={`meal-${meal.id}`} name="meal-filter" />
          <label htmlFor={`meal-${meal.id}`}>
            Your ideal {meal.name}{" "}
            {Object.entries(user)?.length > 0 && `(${(user.calories * meal.percentage) / 100} kcal)`}
          </label>
        </div>
      ))}

      <p>Your diet</p>
      {diets.map((diet) => (
        <div key={diet.id}>
          <input
            type="radio"
            id={`diet-${diet.id}`}
            name="diet-filter"
            defaultChecked={Object.entries(user)?.length > 0 && diet.name === user.diet}
          />
          <label htmlFor={`diet-${diet.id}`}>{diet.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
