import { getProduct } from "@/sanity/queries/getProduct";
import Image from "next/image";
import Header from "@/components/Header/Header";

import styles from "./page.module.css";

const Products = async ({ params: { slug } }) => {
  const [product] = await getProduct(slug);
  // const product = products[0];
  // const productIsNotEmpty = !!products[0]?.length;

  return (
    <>
      <Header />
      <div>
        <Image
          className={styles.productImage}
          src={product.image?.asset.url}
          alt={product.image?.asset.altText ?? ""}
          width={product.image?.asset.metadata.dimensions.width}
          height={product.image?.asset.metadata.dimensions.height}
        />
        <p>{product.title}</p>
        <p>{product.nutritionFacts.calories} Kcal</p>
        <p>{product.environmentFacts.emissions}g of CO2</p>
      </div>
    </>
  );
};

export default Products;
