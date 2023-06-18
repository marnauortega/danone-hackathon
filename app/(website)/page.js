import Header from "@/components/Header/Header";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <Header simple={true} />
      <main className={styles.main}>
        <Image src={"/earth.png"} width={650} height={650} alt="" />
        <h1>One planet</h1>
        <p>We can make a difference to this planet by bringing awareness to what we eat.</p>
        <Image src={"/danoneLogoKid.png"} width={650} height={650} alt="" />
        <h1>One health</h1>
        <p>Ready to start setting up your challenges in health and ecology?</p>
        <Link href="/onboarding">
          <button>Let's begin</button>
        </Link>
      </main>
    </>
  );
};

export default Home;
