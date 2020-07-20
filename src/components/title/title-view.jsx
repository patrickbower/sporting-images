import React from "react";
import { motion } from "framer-motion";
import Styles from "./title.module.css";

const Title = (props) => {
  return (
    <motion.h1
      className={Styles.title}
      src={props.src}
      alt={props.alt}
      positionTransition
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      {props.description ? props.description : "Untitled"}
    </motion.h1>
  );
};

export default Title;
