import React, {useState, useEffect} from "react";
import ImageView from "./image-view";
// import RandomImage from '../../utils/random-image';
import mockImage from './mock';
 
const ImageContainer = () => {
  const [image, setImage] = useState(undefined);
  const [error, setErrors] = useState(false);
  // const searchSettings = {
  //   query: "sports",
  //   orientation: "landscape" 
  // }
  
  useEffect(() => {
    // RandomImage(searchSettings)
    //   .then(res => setImage(res))
    //   .catch(err => setErrors(err));
    // setImage({urls: {full: "https://dummyimage.com/600x400/000/fff"}})
    setImage(mockImage);
  }, []);


  if (image) {
    return <ImageView image={image} />
  } else if (error) {
    console.error(error);
    return <p>Error</p>
  } else {
    return <p>Loading...</p>
  }

};

export default ImageContainer;