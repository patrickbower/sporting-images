import React from "react";
import Styles from "./user.module.css";
import { motion } from "framer-motion";

const User = (props) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={props.link}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      className={Styles.user}
    >
      {props.name}
    </motion.a>
  );
};

export default User;
