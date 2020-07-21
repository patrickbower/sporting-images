import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "./title.module.css";

const Title = (props) => {
  return (
    <AnimatePresence>
      <motion.h1
        className={Styles.title}
        src={props.src}
        alt={props.alt}
        positionTransition
        layout
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {props.description}
      </motion.h1>
    </AnimatePresence>
  );
};

export default Title;
