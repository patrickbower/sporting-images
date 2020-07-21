import React, { useState, useEffect } from "react";
// components
import Image from "../image";
import Title from "../title";
import User from "../user";
import Refresh from "../refresh";
// utils
import FetchImageBatch from "../../utils/images/fetch";
import CleanImageBatch from "../../utils/images/clean";
import randomIntRange from "../../utils/micro/randomIntRange";
// styles
import Styles from "./stage.module.css";
import "./stage-layouts.css";

const Stage = () => {
  // states
  const [bundle, setBundle] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [error, setErrors] = useState(false);

  // get batch of images - onload or end of batch
  const fetchImageBundle = () => {
    FetchImageBatch()
      .then((res) => {
        const imagesClean = CleanImageBatch(res);
        setBundle(imagesClean);
        setImage(imagesClean[0]);
      })
      .catch((err) => setErrors(err));
  };

  // change image from batch
  const refreshImage = () => {
    let currentIndex = bundle.findIndex((obj) => obj.id === image.id);

    // if end of batch
    if (currentIndex === bundle.length - 1) {
      fetchImageBundle();
      // go to next
    } else {
      setImage(bundle[currentIndex + 1]);
    }
  };

  // useEffect currently only componentDidMount
  useEffect(() => {
    fetchImageBundle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when image data has loaded
  if (image) {
    return (
      <div style={{ "--color-theme": `${image.color}` }}>
        <Refresh refresh={() => refreshImage()} />
        <div className={`${Styles.stage} layout-${randomIntRange(3)}`}>
          <Title description={image.description} />
          <Image src={image.url} alt={image.alt} />
          <User name={image.name} link={image.link} />
        </div>
      </div>
    );
    // if error occurs
  } else if (error) {
    console.error(error);
    return (
      <div className="center">
        <p className="error">Error!</p>
      </div>
    );
    // while you wait for data to load
  } else {
    return (
      <div className="center">
        <p className="loading">Loading...</p>
      </div>
    );
  }
};

export default Stage;
