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
      <div className={styles.productsWrapper}>
        <Sortings />
        {productsIsNotEmpty && <ProductList products={products} />}
        <Filters />
      </div>
    </>
  );
};

export default Products;
