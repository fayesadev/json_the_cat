//API url to return specific cat breeds:
// https://api.thecatapi.com/v1/breeds/search
//Search for a breed using '?q=<breedname>'

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //Edge Case: if request fails
    if (error) {
      return callback(error);
    }
    //Edge Case: if Breed is not found
    if (body === '[]') {
      return callback("Breed not found.");
    }
    //HappyPath:
    const data = JSON.parse(body); //converts string into object
    /* data[0] gives us access to the object stored inside the data array */
    return callback(null, data[0].description); //prints the description of breed
  });
};

module.exports = { fetchBreedDescription };