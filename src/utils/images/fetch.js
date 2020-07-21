// unsplash sdk for fetching
import Unsplash, { toJson } from 'unsplash-js';
import randomIntRange from '../micro/randomIntRange';

// keep key out of repo :)
const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

/* 
  unsplash.photos.getRandomPhoto can only provide 
  one image per request :(  

  Free tier has only 50 requests per hour, 
  so in this case batches works for a prototype.

  Solution is to get data as a batch from a random page.
*/   
async function getPhoto() {
  return await unsplash.search.photos("sports", randomIntRange(100), 10, { orientation: "landscape" })
    .then(toJson)
    .then(res => res)
    .catch(err => err);  
}

export default getPhoto;
