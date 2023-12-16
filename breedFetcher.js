const request = require('request');
let breedToSearch = process.argv[2]

request(`https://api.thecattapi.com/v1/breeds/search?q=${breedToSearch}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    return console.log(error);
  }
  if (data.length === 0) {
    console.log("The requested breed cannot be found")
  } else {
  console.log(data);
  }
})