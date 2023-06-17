import styles from "./page.module.css";
import { getPage } from "@/sanity/queries";

const Home = async () => {
  const home = await getPage("home");
  const homeIsNotEmpty = !!home?.length;
  if (homeIsNotEmpty) console.log(home);

  return (
    <main className={styles.main}>
      <p>Hello</p>
    </main>
  );
};

export default Home;
