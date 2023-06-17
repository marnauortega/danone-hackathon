import styles from "./page.module.css";
import { getProducts } from "@/sanity/queries/getProducts";

const Home = async () => {
  const products = await getProducts();
  const productsIsNotEmpty = !!products?.length;
  if (productsIsNotEmpty) console.log(products);

  return (
    <main className={styles.main}>
      <p>Hello</p>
    </main>
  );
};

export default Home;
