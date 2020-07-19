import React from "react";
import Styles from "./title.module.css";

const Title = (props) => {
  return (
    <h2 className={Styles.title}>
      {props.description ? props.description : "Untitled"}
    </h2>
  );
};

export default Title;
