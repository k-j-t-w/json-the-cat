const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // if there is an error, sends error through callback and null for the description value
    if (error) {
      callback(error, null);
      return;
    }


    const data = JSON.parse(body);
    // if there is value for data[0], set desc to the value of description
    let desc;
    if (typeof data[0] === 'object') {
      desc = data[0].description;
    }

    // if there is no data for data, return the specific error and null for description
    if (data.length === 0) {
      callback("The requested breed cannot be found", null);
    } else {
      callback(null, desc);
    }
    
  });
};

module.exports = { fetchBreedDescription };

