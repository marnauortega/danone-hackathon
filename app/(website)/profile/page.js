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
      <main className="marignTop">
        <UserForm />
        <Liked products={products} />
      </main>
    </>
  );
};

export default Profile;
