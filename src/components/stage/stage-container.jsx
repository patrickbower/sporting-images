import React, { useState, useEffect } from "react";
import Styles from "./stage.module.css";
import Image from "../image";
import Title from "../title";
import User from "../user";

// import RandomImage from "../../utils/random-image";
import mockImage from "../../utils/random-image/mock-random-image-2";

const Stage = (props) => {
  const [image, setImage] = useState(undefined);
  const [error, setErrors] = useState(false);
  const searchSettings = {
    query: "sports",
    orientation: "landscape",
  };

  useEffect(() => {
    // RandomImage(searchSettings)
    //   .then((res) => setImage(res))
    //   .catch((err) => setErrors(err));
    setImage(mockImage);
  }, []);

  if (image) {
    return (
      <div
        className={Styles.stage}
        style={{ "--color-theme": `${image.color}` }}
      >
        <Title
          description={image.description}
          style={{ "--color-theme": `${image.color}` }}
        />
        <Image src={image.urls.regular} alt={image.alt_description} />
        <User
          name={image.user.name}
          link={image.user.links.html}
          style={{ "--color-theme": `${image.color}` }}
        />
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
