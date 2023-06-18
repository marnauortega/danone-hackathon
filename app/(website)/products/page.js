import Header from "@/components/Header/Header";
import Image from "next/image";

import { getProducts } from "@/sanity/queries/getProducts";

import styles from "./page.module.css";

const Products = async () => {
  const products = await getProducts();
  const productsIsNotEmpty = !!products?.length;
  if (productsIsNotEmpty) console.log(products);

  return (
    <>
      <Header />
      {products.map((product) => (
        <div>
          <Image
            className={styles.productImage}
            src={product.image.asset.url}
            alt={product.image.asset.altText}
            width={product.image.asset.metadata.dimensions.width}
            height={product.image.asset.metadata.dimensions.height}
          />
          <p>{product.title}</p>
        </div>
      ))}
    </>
  );
};

export default Products;
