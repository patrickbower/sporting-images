import React from "react";
import Styles from "./user.module.css";
import { motion, AnimatePresence } from "framer-motion";

const User = (props) => {
  return (
    <AnimatePresence>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href={props.link}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className={Styles.user}
        layout
        target="_blank"
      >
        {props.name}
      </motion.a>
    </AnimatePresence>
  );
};

export default User;
