"use client";

import { motion, useScroll } from "framer-motion";

import styles from "./FadingBackground.module.css";

const FadingBackground = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className={styles.background}></motion.div>
      <motion.div className={`${styles.background} ${styles.light}`} style={{ opacity: scrollYProgress }}></motion.div>
    </>
  );
};

export default FadingBackground;
