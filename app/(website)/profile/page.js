import Header from "@/components/Header/Header";
import UserForm from "@/components/UserForm/UserForm";

import styles from "./page.module.css";

const Profile = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const userJSON = localStorage.getItem("user");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUser(user);
    }
  }, []);

  return (
    <>
      <Header />
      <UserForm />
    </>
  );
};

export default Profile;
