import { getProduct } from "@/sanity/queries/getProduct";
import Image from "next/image";
import Header from "@/components/Header/Header";

import styles from "./page.module.css";

const Product = async ({ params: { slug } }) => {
  const product = await getProduct(slug);
  const productIsNotEmpty = !!product?.length;

  return (
    <>
      <Header />
      <main className="marginTop">
        {productIsNotEmpty && (
          <div>
            <Image
              className={styles.productImage}
              src={product[0].image?.asset.url}
              alt={product[0].image?.asset.altText ?? ""}
              width={product[0].image?.asset.metadata.dimensions.width}
              height={product[0].image?.asset.metadata.dimensions.height}
            />
            <p>{product[0].title}</p>
            <p>{product[0].nutritionFacts.calories} Kcal</p>
            <p>{product[0].environmentFacts.emissions}g of CO2</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Product;
