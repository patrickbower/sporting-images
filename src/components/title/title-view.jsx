import React from "react";
import { motion } from "framer-motion";
import Styles from "./title.module.css";

const Title = (props) => {
  return (
    <motion.h1
      className={Styles.title}
      src={props.src}
      alt={props.alt}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {props.description}
    </motion.h1>
  );
};

export default Title;
