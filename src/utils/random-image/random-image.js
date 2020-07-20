// unsplash sdk for fetching
import Unsplash, { toJson } from 'unsplash-js';

// keep key out of repo :)
const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

/* 
  Get data batch from a random page.
  Free tier has only 50 requests per hour, 
  so in this case batches works for a prototype.
*/   
async function getPhoto() {
  const randomPageNumber = Math.floor(Math.random() * 100) + 1;
  return await unsplash.search.photos("sports", randomPageNumber, 10, { orientation: "portrait" })
    .then(toJson)
    .then(res => res)
    .catch(err => err);  
}

export default getPhoto;
