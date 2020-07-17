import React from "react";

const ImageView = (props) => {
  console.log(props.image);
  return <img src={props.image.urls.full} alt="dummy" />;
};

export default ImageView;
