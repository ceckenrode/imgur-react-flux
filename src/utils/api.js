import Fetch from 'whatwg-fetch';
const rootUrl = 'https://api.imgur.com/3/';
const apiKey = 	'1c915069d5ef72d';

export default {
  get: (url) => {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    }).then((response) => {
      return response.json()
    });
  }
}
