import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import Sortings from "@/components/Sortings/Sortings";
import Filters from "@/components/Filters/Filters";

import { getProducts } from "@/sanity/queries/getProducts";

import styles from "./page.module.css";

const Products = async ({ searchParams }) => {
  const [searchEntries] = Object.entries(searchParams);

  let products;
  if (searchEntries) {
    products = await getProducts(...searchEntries);
  } else {
    products = await getProducts();
  }
  const productsIsNotEmpty = !!products?.length;

  return (
    <>
      <Header />
      <main className="marginTop marginBottom">
        <Sortings />
        <div className={styles.productsWrapper}>
          {productsIsNotEmpty && <ProductList products={products} />}
          <Filters />
        </div>
      </main>
    </>
  );
};

export default Products;
