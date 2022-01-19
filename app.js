import easyHTTP from './easyhttps.js';

const http = new easyHTTP();
const chuckNorris = new easyHTTP();

// Get Posts API
http.get(
  'https://jsonplaceholder.typicode.com/posts',
  function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);

// Get Chuck Norris API
chuckNorris.get(
  'https://api.chucknorris.io/jokes/random',
  function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);
