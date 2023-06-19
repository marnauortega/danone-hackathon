import LikeButton from "../LikeButton/LikeButton";

import Link from "next/link";
import Image from "next/image";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <>
          <Link href={product.slug.current}>
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
          </Link>
          <LikeButton slug={product.slug.current} />
        </>
      ))}
    </div>
  );
};

export default ProductList;
