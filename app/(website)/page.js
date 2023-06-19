"use client";

import Header from "@/components/Header/Header";
import FadingBackground from "@/components/FadingBackground/FadingBackground";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsChevronDown } from "react-icons/bs";

import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <Header simple={true} />
      <main className={styles.main}>
        <section className={styles.onePlanet}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 3.2, type: "tween", ease: [0.83, 0, 0.17, 1] }}
          >
            <Image src={"/earth.png"} width={500} height={500} alt="" priority />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, type: "tween", ease: [0.83, 0, 0.17, 1], delay: 0.75 }}
          >
            One planet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.75, type: "tween", ease: [0.83, 0, 0.17, 1], delay: 0.9 }}
          >
            We can make a difference to this planet by bringing awareness to what we eat.
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, type: "tween", delay: 2 }}
          >
            <BsChevronDown size={20} />
          </motion.p>
        </section>
        <section className={styles.oneHealth}>
          <Image src={"/danoneLogoKid.png"} width={400} height={400} alt="" />
          <h1>One health</h1>
          <p>Ready to start setting up your challenges in health and ecology?</p>
          <Link href="/onboarding">
            <button className={styles.beginButton}>Let's begin</button>
          </Link>
        </section>
      </main>
      <FadingBackground />
    </>
  );
};

export default Home;
