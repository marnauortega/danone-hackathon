import LikeButton from "../LikeButton/LikeButton";

import Link from "next/link";
import Image from "next/image";

import styles from "./ProductList.module.css";

const ProductList = ({ products, profilePage }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div className={styles.productWrapper}>
          <Link href={product.slug.current}>
            <Image
              className={styles.productImage}
              src={product.image.asset.url}
              alt={product.image.asset.altText ?? ""}
              width={product.image.asset.metadata.dimensions.width}
              height={product.image.asset.metadata.dimensions.height}
            />
            <div className={styles.productDetails}>
              <p>{product.title}</p>
              <p>{product.nutritionFacts.calories} Kcal</p>
              <p>{product.environmentFacts.emissions}g of CO2</p>
            </div>
          </Link>
          <LikeButton slug={product.slug.current} filledDefault={profilePage} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
