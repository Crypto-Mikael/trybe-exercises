const axios = require('axios').default;

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = { Authorization: API_TOKEN }

axios.post('https://postman-echo.com/post?param1=teste')
  .then((response) => {
    return response.data
  })
  .then((data) => {
    
    console.log(data);
  })
  .catch((errorOrResponse) => {
    if(errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse}`);
    }

    console.error(errorOrResponse);
  })