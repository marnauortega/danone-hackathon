import Header from "@/components/Header/Header";

import styles from "./page.module.css";
import Link from "next/link";

const OnBoarding = () => {
  return (
    <>
      <Header simple={true} />
      <div>Onboarding</div>
      <Link href="/products">Next</Link>
    </>
  );
};

export default OnBoarding;
