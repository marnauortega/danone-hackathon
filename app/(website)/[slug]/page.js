import { getProduct } from "@/sanity/queries/getProduct";
import Image from "next/image";
import Header from "@/components/Header/Header";
import range from "@/lib/range";
import Back from "@/components/Back/Back";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

import styles from "./page.module.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Product = async ({ params: { slug } }) => {
  const product = await getProduct(slug);
  const productIsNotEmpty = !!product?.length;

  return (
    <>
      <Header />
      <main className={styles.main}>
        {productIsNotEmpty && (
          <>
            <div className={styles.basicInfo}>
              <Back />
              <Image
                className={styles.productImage}
                src={product[0].image?.asset.url}
                alt={product[0].image?.asset.altText ?? ""}
                width={product[0].image?.asset.metadata.dimensions.width}
                height={product[0].image?.asset.metadata.dimensions.height}
              />
              <h3>{product[0].title}</h3>
              <p>{product[0].description}</p>
            </div>
            <div className={styles.chart}>
              <dl className={styles.card}>
                <div className={styles.data}>
                  <dt>Units</dt>
                  <dd className={styles.ballWrapper}>
                    {range(product[0].units).map(() => (
                      <div className={styles.ball}></div>
                    ))}
                  </dd>
                </div>
                <div className={styles.data}>
                  <dt>Fat</dt>
                  <dd>{product[0].nutritionFacts.fat} g</dd>
                </div>
                <ProgressBar fat={product[0].nutritionFacts.fat} />
                <div className={styles.data}>
                  <dt>Carbohidrates</dt>
                  <dd>{product[0].nutritionFacts.carbohidrates} g</dd>
                </div>
                <ProgressBar carbohidrates={product[0].nutritionFacts.carbohidrates} />
                <div className={styles.data}>
                  <dt>Energy</dt>
                  <dd>{product[0].nutritionFacts.calories} Kcal</dd>
                </div>
                <ProgressBar calories={product[0].nutritionFacts.calories} />
                <div className={styles.data}>
                  <dt>Ingredients</dt>
                  <dd>{product[0].nutritionFacts.ingredients} Kcal</dd>
                </div>
                <div className={styles.data}>
                  <dt>Emissions</dt>
                  <dd>{product[0].environmentFacts.emissions}g of CO2</dd>
                </div>
              </dl>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Product;
