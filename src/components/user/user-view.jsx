import React from "react";
import Styles from "./user.module.css";

const User = (props) => {
  return <button className={Styles.button}>{props.name}</button>;
};

export default User;
