import Header from "@/components/Header/Header";
import UserForm from "@/components/UserForm/UserForm";
import Liked from "@/components/Liked/Liked";

import { getProducts } from "@/sanity/queries/getProducts";

import styles from "./page.module.css";

const Profile = async () => {
  const products = await getProducts();

  return (
    <>
      <Header />
      <main className="marginTop">
        <h1>Edit your data</h1>
        <UserForm />
        <div className={styles.spacer}></div>
        <h1>Your favourite products</h1>
        <div className={styles.productsWrapper}>
          <Liked products={products} />
        </div>
      </main>
    </>
  );
};

export default Profile;
