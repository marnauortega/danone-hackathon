import Header from "@/components/Header/Header";
import UserForm from "@/components/UserForm/UserForm";

const OnBoarding = () => {
  return (
    <>
      <Header simple={true} />
      <main className="marginTop marginBottom">
        <UserForm />
      </main>
    </>
  );
};

export default OnBoarding;
