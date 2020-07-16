import React from "react";
import Styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={Styles.title}>Hello world!</h1>
      <p>Welcome one and all</p>
    </header>
  );
};

export default Header;
