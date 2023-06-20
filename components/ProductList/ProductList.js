import LikeButton from "../LikeButton/LikeButton";

import Link from "next/link";
import Image from "next/image";

import styles from "./ProductList.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const ProductList = ({ products, profilePage }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product._id} className={styles.productWrapper}>
          <Link href={product.slug.current}>
            <Image
              className={styles.productImage}
              src={product.image.asset.url}
              alt={product.image.asset.altText ?? ""}
              width={product.image.asset.metadata.dimensions.width}
              height={product.image.asset.metadata.dimensions.height}
            />
            <div className={styles.productDetails}>
              <p className={styles.productTitle}>{product.title}</p>
              <p className={styles.productData}>{product.nutritionFacts.calories} Kcal</p>
              <ProgressBar calories={product.nutritionFacts.calories} />
              <p className={styles.productData}>{product.environmentFacts.emissions}g of CO2</p>
              <ProgressBar emissions={product.environmentFacts.emissions} />
            </div>
          </Link>
          <LikeButton slug={product.slug.current} filledDefault={profilePage} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
