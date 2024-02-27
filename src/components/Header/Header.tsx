import React from "react";
import { HeaderProps } from "../../types/HeaderProps.interface";

const Header = ({ user, isAuth, theme, func }: HeaderProps) => {
  const styleTheme: string =
    theme === "light" ? "bg-color-light" : "bg-color-dark";
  const changeTheme: string = theme === "light" ? "dark" : "light";
  return (
    <div className={styleTheme}>
      <h1>Header</h1>
      <button onClick={() => func(changeTheme)}>Change theme</button>
    </div>
  );
};

export default Header;
