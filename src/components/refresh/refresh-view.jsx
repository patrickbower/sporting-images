import React from "react";
import Styles from "./refresh.module.css";

const Refresh = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.refresh();
  };

  return (
    <button onClick={handleClick} className={Styles.button} autoFocus>
      Refresh
    </button>
  );
};

export default Refresh;
