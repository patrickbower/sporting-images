import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

async function getPhoto(searchSettings) {
  // return await unsplash.search.photos(searchSettings)
  const randomPageNumber = Math.floor(Math.random() * 100) + 1;
  return await unsplash.search.photos("sports", randomPageNumber, 10, { orientation: "portrait" })
    .then(toJson)
    .then(res => res)
    .catch(err => err);  
}

export default getPhoto;
