"use client";

import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

const LikeButton = ({ slug }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        let nextUser = { ...user };
        if (user.liked) {
          const liked = nextUser.liked;
          if (liked.includes(slug)) {
            liked.splice(liked.indexOf(slug), 1);
          } else {
            nextUser = { ...nextUser, liked: [...liked, slug] };
          }
        } else {
          nextUser = { ...nextUser, liked: [slug] };
        }
        setUser(nextUser);
        localStorage.setItem("user", JSON.stringify(nextUser));
      }}
    >
      like
    </button>
  );
};

export default LikeButton;
