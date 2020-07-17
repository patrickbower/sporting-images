import React from "react";
import Styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={Styles.title}>Random Sports UI</h1>
    </header>
  );
};

export default Header;
