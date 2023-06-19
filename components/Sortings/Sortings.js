"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

import styles from "./Sortings.module.css";

const Sortings = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("calories")) {
      setSorting("calories");
      setCaloriesAsc(searchParams.get("calories") === "ASC" ? true : false);
    }
    if (searchParams.get("emissions")) {
      setSorting("emissions");
      setEmissionsAsc(searchParams.get("emissions") === "ASC" ? true : false);
    }
  }, []);

  const [sorting, setSorting] = useState("");
  const [caloriesAsc, setCaloriesAsc] = useState(true);
  const [emissionsAsc, setEmissionsAsc] = useState(true);

  return (
    <div className={styles.sortings}>
      <button
        onClick={() => {
          setSorting("calories");
          const params = new URLSearchParams(searchParams);
          if (searchParams.get("emissions")) params.delete("emissions");
          if (sorting !== "calories") {
            params.set("calories", caloriesAsc ? "ASC" : "DESC");
          }
          if (sorting === "calories") {
            setCaloriesAsc(!caloriesAsc);
            params.set("calories", !caloriesAsc ? "ASC" : "DESC");
          }
          router.replace(`${pathname}?${params}`);
        }}
        className={`${sorting === "calories" ? styles.active : ""} ${styles.button}`}
      >
        Sort by calories {caloriesAsc ? "(low to high)" : "(high to low)"}
        {sorting === "calories" && (
          <FiX
            size={18}
            onClick={(e) => {
              e.stopPropagation();
              setSorting("");
              const params = new URLSearchParams(searchParams);
              params.delete("calories");
              router.replace(`${pathname}?${params}`);
            }}
          />
        )}
      </button>
      <button
        onClick={() => {
          setSorting("emissions");
          const params = new URLSearchParams(searchParams);
          if (searchParams.get("calories")) params.delete("calories");
          if (sorting !== "emissions") {
            params.set("emissions", emissionsAsc ? "ASC" : "DESC");
          }
          if (sorting === "emissions") {
            setEmissionsAsc(!emissionsAsc);
            params.set("emissions", !emissionsAsc ? "ASC" : "DESC");
          }
          router.replace(`${pathname}?${params}`);
        }}
        className={`${sorting === "emissions" ? styles.active : ""} ${styles.button}`}
      >
        Sort by carbon emissions {emissionsAsc ? "(low to high)" : "(high to low)"}
        {sorting === "emissions" && (
          <FiX
            size={18}
            onClick={(e) => {
              e.stopPropagation();
              setSorting("");
              const params = new URLSearchParams(searchParams);
              params.delete("emissions");
              router.replace(`${pathname}?${params}`);
            }}
          />
        )}
      </button>
    </div>
  );
};

export default Sortings;
