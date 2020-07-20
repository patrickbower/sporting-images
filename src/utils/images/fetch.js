// unsplash sdk for fetching
import Unsplash, { toJson } from 'unsplash-js';
import randomIntRange from '../micro/randomIntRange';

// keep key out of repo :)
const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

/* 
  Get data batch from a random page.
  Free tier has only 50 requests per hour, 
  so in this case batches works for a prototype.
*/   
async function getPhoto() {
  return await unsplash.search.photos("sports", randomIntRange(100), 10, { orientation: "landscape" })
    .then(toJson)
    .then(res => res)
    .catch(err => err);  
}

export default getPhoto;
