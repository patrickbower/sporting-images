import React from "react";
import Styles from "./user.module.css";
import { motion } from "framer-motion";

const User = (props) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={props.link}
      className={Styles.user}
    >
      {props.name}
    </motion.a>
  );
};

export default User;
