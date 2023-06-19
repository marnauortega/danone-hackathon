"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/components/Providers/UserProvider";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import styles from "./Filters.module.css";

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userJSON = localStorage.getItem("user");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUser(user);
      setSelectedDiet(user.diet);
      if (searchParams.get("caloriesLimit")) setSelectedCalories(searchParams.get("caloriesLimit"));
      if (searchParams.get("diet")) setSelectedDiet(searchParams.get("diet"));
    }
  }, []);

  const meals = [
    {
      id: 1,
      name: "breakfast",
      percentage: 27.5,
    },
    {
      id: 2,
      name: "snacks",
      percentage: 7.5,
    },
    {
      id: 3,
      name: "lunch dessert",
      percentage: 0.125 * 37.5,
    },
    {
      id: 4,
      name: "dinner dessert",
      percentage: 0.125 * 27.5,
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

  const [selectedCalories, setSelectedCalories] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");

  return (
    <div className={styles.filters}>
      <p>Your recommendations</p>
      {meals.map((meal) => {
        const mealCalories = +((user.calories * meal.percentage) / 100).toFixed(2);
        return (
          <div key={meal.id}>
            <input
              type="radio"
              id={`meal-${meal.id}`}
              name="meal-filter"
              value={mealCalories}
              checked={selectedCalories == mealCalories}
              onChange={() => {
                setSelectedCalories(mealCalories);
                const params = new URLSearchParams(searchParams);
                params.set("caloriesLimit", mealCalories);
                router.replace(`${pathname}?${params}`);
              }}
            />
            <label htmlFor={`meal-${meal.id}`}>
              Your ideal {meal.name} {Object.entries(user)?.length > 0 && `(${mealCalories}kcal)`}
            </label>{" "}
            {selectedCalories == mealCalories && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCalories("");
                  const params = new URLSearchParams(searchParams);
                  params.delete("caloriesLimit");
                  router.replace(`${pathname}?${params}`);
                }}
              >
                x
              </span>
            )}
          </div>
        );
      })}

      <p>Your diet</p>
      {diets.map((diet) => (
        <div key={diet.id}>
          <input
            type="radio"
            id={`diet-${diet.id}`}
            name="diet-filter"
            value={diet.name}
            checked={selectedDiet === diet.name}
            onChange={() => {
              setSelectedDiet(diet.name);
              const params = new URLSearchParams(searchParams);
              params.set("diet", diet.name);
              router.replace(`${pathname}?${params}`);
            }}
          />
          <label htmlFor={`diet-${diet.id}`}>{diet.title}</label>{" "}
          {selectedDiet === diet.name && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDiet("");
                const params = new URLSearchParams(searchParams);
                params.delete("diet");
                router.replace(`${pathname}?${params}`);
              }}
            >
              x
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
