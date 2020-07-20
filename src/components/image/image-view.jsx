import React from "react";
import Styles from "./image.module.css";

const ImageView = (props) => {
  console.log(props.alt);
  return <img className={Styles.image} src={props.src} alt={props.alt} />;
};

export default ImageView;
