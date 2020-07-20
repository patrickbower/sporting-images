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
      <span className={Styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 50 50"
          className={Styles.svg}
        >
          <defs />
          <path
            d="M48.85 3.38a2.11 2.11 0 00-.32-.78 1.75 1.75 0 00-.28-.33 1.75 1.75 0 00-.34-.27 2.11 2.11 0 00-.78-.32 2.1 2.1 0 00-.43 0H20.48a2.2 2.2 0 100 4.4h20.9L2.59 44.81a2.2 2.2 0 103.11 3.1L44.49 9.12V30a2.2 2.2 0 004.4 0V3.81a3.13 3.13 0 00-.04-.43z"
            fill={props.theme}
          />
        </svg>
      </span>
    </motion.a>
  );
};

export default User;
