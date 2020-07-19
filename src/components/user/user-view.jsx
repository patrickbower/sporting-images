import React from "react";
import Styles from "./user.module.css";

const User = (props) => {
  return (
    <a href={props.link} className={Styles.user}>
      {props.name}
    </a>
  );
};

export default User;
