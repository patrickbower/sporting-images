import React from "react";
import Styles from "./image.module.css";

const ImageView = (props) => {
  return <img className={Styles.image} src={props.src} alt="dummy" />;
};

export default ImageView;
