import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "./image.module.css";

const ImageView = (props) => (
  <AnimatePresence>
    <motion.img
      className={Styles.image}
      src={props.src}
      alt={props.alt}
      positionTransition
      layout
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    />
  </AnimatePresence>
);

export default ImageView;
