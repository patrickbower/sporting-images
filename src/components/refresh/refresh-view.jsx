import React from "react";
import Styles from "./refresh.module.css";

const Refresh = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked", event.target);
  };

  return (
    <button onClick={handleClick} className={Styles.button}>
      Refresh
    </button>
  );
};

export default Refresh;
