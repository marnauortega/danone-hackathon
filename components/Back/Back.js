"use client";

import { useRouter } from "next/navigation";
import { FiChevronLeft } from "react-icons/fi";

import styles from "./Back.module.css";

const Back = () => {
  const router = useRouter();

  return (
    <button className={styles.back} onClick={() => router.back()}>
      <FiChevronLeft size={20} />
      Back
    </button>
  );
};

export default Back;
