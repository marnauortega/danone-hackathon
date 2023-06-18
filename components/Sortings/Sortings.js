"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Sotings.module.css";
import { useState } from "react";

const Sortings = ({ products }) => {
  const pathname = usePathname();

  const [caloriesAsc, setCaloriesAsc] = useState(true);
  const [emissionsAsc, setEmissionsAsc] = useState(true);

  return (
    <div className={styles.sortings}>
      <Link href={`${pathname}/?calories=${caloriesAsc ? "ASC" : "DESC"}`} onClick={() => setCaloriesAsc(!caloriesAsc)}>
        Sort by calories {caloriesAsc ? "(low to high)" : "(high to low)"}
      </Link>
      <Link
        href={`${pathname}/?emissions=${emissionsAsc ? "ASC" : "DESC"}`}
        onClick={() => setEmissionsAsc(!emissionsAsc)}
      >
        Sort by carbon emissions {emissionsAsc ? "(low to high)" : "(high to low)"}
      </Link>
    </div>
  );
};

export default Sortings;
