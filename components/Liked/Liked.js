"use client";

import ProductList from "../ProductList/ProductList";
import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

const Liked = ({ products }) => {
  const { user } = useContext(UserContext);

  const likedProducts = products.filter((product) => user?.liked?.includes(product.slug.current));

  return <ProductList products={likedProducts} />;
};

export default Liked;
