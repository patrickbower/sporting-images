import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

async function getPhoto(searchSettings) {
  return await unsplash.photos.getRandomPhoto(searchSettings)
    .then(toJson)
    .then(res => res)
    .catch(err => err);  
}

export default getPhoto;
