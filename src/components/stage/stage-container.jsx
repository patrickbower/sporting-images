import React, { useState, useEffect } from "react";
import Styles from "./stage.module.css";
import "./stage-layouts.css";
import Image from "../image";
import Title from "../title";
import User from "../user";
import Refresh from "../refresh";

import RandomImage from "../../utils/random-image";
// import mockImage from "../../utils/random-image/mock-random-image-2";

const Stage = (props) => {
  const [image, setImage] = useState(undefined);
  const [error, setErrors] = useState(false);
  const searchSettings = {
    query: "sports",
    orientation: "landscape",
  };
  const random = Math.floor(Math.random() * 3) + 1;

  const fetchImage = () => {
    RandomImage(searchSettings)
      .then((res) => setImage(res))
      .catch((err) => setErrors(err));
    // setImage(mockImage);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  if (image) {
    console.log("repaint");
    return (
      <div style={{ "--color-theme": `${image.color}` }}>
        <Refresh refresh={() => fetchImage()} />
        <div className={`${Styles.stage} layout-${random}`}>
          <Title description={image.description} />
          <Image src={image.urls.regular} alt={image.alt_description} />
          <User name={image.user.name} link={image.user.links.html} />
        </div>
      </div>
    );
  } else if (error) {
    console.error(error);
    return <p>Error</p>;
  } else {
    return <p>Loading...</p>;
  }
};

export default Stage;
