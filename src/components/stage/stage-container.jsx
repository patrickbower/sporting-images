import React, { useState, useEffect } from "react";
import Styles from "./stage.module.css";
import "./stage-layouts.css";
import Image from "../image";
import Title from "../title";
import User from "../user";
import Refresh from "../refresh";

import RandomImage from "../../utils/random-image";
import stageMiddlewareClean from "../../utils/random-image/stage-middleware-clean";

const Stage = () => {
  const [bundle, setBundle] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [error, setErrors] = useState(false);
  const random = Math.floor(Math.random() * 3) + 1;

  const fetchImageBundle = () => {
    const searchSettings = {
      query: "sports",
      orientation: "landscape",
    };

    RandomImage(searchSettings)
      .then((res) => {
        const imagesClean = stageMiddlewareClean(res);
        setBundle(imagesClean);
        setImage(imagesClean[0]);
      })
      .catch((err) => setErrors(err));
  };

  const refreshImage = () => {
    let currentIndex = bundle.findIndex((obj) => obj.id === image.id);

    if (currentIndex === bundle.length - 1) {
      fetchImageBundle();
    } else {
      setImage(bundle[currentIndex + 1]);
    }
  };

  useEffect(() => {
    fetchImageBundle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (image) {
    console.log(image);
    return (
      <div style={{ "--color-theme": `${image.color}` }}>
        <Refresh refresh={() => refreshImage()} />
        <div className={`${Styles.stage} layout-${random}`}>
          <Title description={image.description} />
          <Image src={image.url} alt={image.alt_description} />
          <User name={image.name} link={image.link} />
        </div>
      </div>
    );
  } else if (error) {
    console.error(error);
    return (
      <div className="center">
        <p className="error">Error!</p>
      </div>
    );
  } else {
    return (
      <div className="center">
        <p className="loading">Loading...</p>
      </div>
    );
  }
};

export default Stage;
