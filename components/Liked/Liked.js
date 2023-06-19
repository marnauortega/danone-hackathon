"use client";

import ProductList from "../ProductList/ProductList";
import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { FiHeart } from "react-icons/fi";

import styles from "./Liked.module.css";

const Liked = ({ products }) => {
  const { user } = useContext(UserContext);

  const likedProducts = products.filter((product) => user?.liked?.includes(product.slug.current));

  return likedProducts?.length > 0 ? (
    <ProductList products={likedProducts} profilePage={true} />
  ) : (
    <p className={styles.emptyFavouritesText}>
      Start liking products and we'll save them here for you <FiHeart size={20} fill />
    </p>
  );
};

export default Liked;
