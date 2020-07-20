import React from "react";
import { motion } from "framer-motion";
import Styles from "./image.module.css";

const ImageView = (props) => (
  <motion.img
    className={Styles.image}
    src={props.src}
    alt={props.alt}
    positionTransition
    layout
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
  />
);

export default ImageView;
