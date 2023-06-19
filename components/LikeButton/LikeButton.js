"use client";

import { useContext, useState } from "react";
import { UserContext } from "../Providers/UserProvider";

import { FiHeart } from "react-icons/fi";

import styles from "./LikeButton.module.css";

const LikeButton = ({ slug, filledDefault }) => {
  const { user, setUser } = useContext(UserContext);

  const [liked, setLiked] = useState(false);

  return (
    <>
      <div
        className={`${styles.like} ${liked || filledDefault ? styles.fill : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          let nextUser = { ...user };
          if (user.liked) {
            const liked = nextUser.liked;
            if (liked.includes(slug)) {
              liked.splice(liked.indexOf(slug), 1);
              setLiked(false);
            } else {
              nextUser = { ...nextUser, liked: [...liked, slug] };
              setLiked(true);
            }
          } else {
            nextUser = { ...nextUser, liked: [slug] };
            setLiked(true);
          }
          setUser(nextUser);
          localStorage.setItem("user", JSON.stringify(nextUser));
        }}
      >
        <FiHeart size={22} strokeWidth={1} />
      </div>
    </>
  );
};

export default LikeButton;
