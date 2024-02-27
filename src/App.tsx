import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { User } from "./types/User.types";

const App = () => {
  // const user: User = {
  //   name: "John",
  //   age: 25,
  // };

  // const createNewUser = (name: string, age: number): User => {
  //   return {
  //     name: name,
  //     age: age,
  //   };
  // };

  // createNewUser("LOX", 15);

  const [theme, setTheme] = useState<string>("light");
  function handleChangeState(theme: string) {
    setTheme(theme);
  }

  return (
    <div className="content">
      <Header
        func={handleChangeState}
        theme={theme}
        isAuth={false}
        user={{ name: "Jack", age: 18 }}
      />
    </div>
  );
};

export default App;
