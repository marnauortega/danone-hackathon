import { useContext } from "react";
import { UserContext } from "@/components/Providers/UserProvider";

import Header from "@/components/Header/Header";
import UserForm from "@/components/UserForm/UserForm";

import styles from "./page.module.css";

const Profile = () => {
  return (
    <>
      <Header />
      <UserForm />
    </>
  );
};

export default Profile;
