"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/components/Providers/UserProvider";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FiX } from "react-icons/fi";

import styles from "./Filters.module.css";

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { user } = useContext(UserContext);

  const [selectedCalories, setSelectedCalories] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");

  useEffect(() => {
    setSelectedDiet(user.diet);
    if (searchParams.get("caloriesLimit")) setSelectedCalories(searchParams.get("caloriesLimit"));
    if (searchParams.get("diet")) setSelectedDiet(searchParams.get("diet"));
  }, [user]);

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

  return (
    <div className={styles.filters}>
      <h3 className={styles.filterTitle}>Your recommendations</h3>
      {meals.map((meal) => {
        const mealCalories = +((user.calories * meal.percentage) / 100).toFixed(2);
        return (
          <div
            key={meal.id}
            className={`${styles.inputWrapper} ${selectedCalories == mealCalories ? styles.active : ""}`}
          >
            <input
              type="radio"
              id={`meal-${meal.id}`}
              name="meal-filter"
              value={mealCalories || 0}
              checked={selectedCalories == mealCalories}
              onChange={() => {
                setSelectedCalories(mealCalories);
                const params = new URLSearchParams(searchParams);
                params.set("caloriesLimit", mealCalories);
                router.replace(`${pathname}?${params}`);
              }}
            />
            <label htmlFor={`meal-${meal.id}`}>
              Your ideal {meal.name} {user?.calories && `(${mealCalories}kcal)`}
            </label>{" "}
            {selectedCalories == mealCalories && (
              <FiX
                size={18}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCalories("");
                  const params = new URLSearchParams(searchParams);
                  params.delete("caloriesLimit");
                  router.replace(`${pathname}?${params}`);
                }}
              />
            )}
          </div>
        );
      })}

      <div class={styles.verticalSpacer}></div>

      <h3 className={styles.filterTitle}>Your diet</h3>
      {diets.map((diet) => (
        <div key={diet.id} className={`${styles.inputWrapper} ${selectedDiet === diet.name ? styles.active : ""}`}>
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
            <FiX
              size={18}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDiet("");
                const params = new URLSearchParams(searchParams);
                params.delete("diet");
                router.replace(`${pathname}?${params}`);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
