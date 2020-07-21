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
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      layout
    >
      {props.description}
    </motion.h1>
  );
};

export default Title;
