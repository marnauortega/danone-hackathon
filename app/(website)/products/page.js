import Header from "@/components/Header/Header";
import Image from "next/image";

import { getProducts } from "@/sanity/queries/getProducts";

import Sortings from "@/components/Sortings/Sortings";
import Filters from "@/components/Filters/Filters";

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
  // if (productsIsNotEmpty)

  return (
    <>
      <Header />
      <div className={styles.productsWrapper}>
        <Sortings products={products} />
        <div className={styles.productList}>
          {products.map((product) => (
            <div>
              <Image
                className={styles.productImage}
                src={product.image.asset.url}
                alt={product.image.asset.altText ?? ""}
                width={product.image.asset.metadata.dimensions.width}
                height={product.image.asset.metadata.dimensions.height}
              />
              <p>{product.title}</p>
              <p>{product.nutritionFacts.calories} Kcal</p>
              <p>{product.environmentFacts.emissions}g of CO2</p>
            </div>
          ))}
        </div>
        <Filters />
      </div>
    </>
  );
};

export default Products;
