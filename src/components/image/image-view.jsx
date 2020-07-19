import React from "react";
import Styles from "./image.module.css";

const ImageView = (props) => {
  return (
    <img className={Styles.image} src={props.src} alt={props.alt_description} />
  );
};

export default ImageView;
