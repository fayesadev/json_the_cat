const request = require('request');
const input = process.argv.slice(2);

//API url to return specific cat breeds:
// https://api.thecatapi.com/v1/breeds/search
//Search for a breed using '?q=<breedname>'

request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  //Edge Case: if request fails
  if (error) {
    console.log(error);
    return;
  }
  //Edge Case: if Breed is not found
  if (body === '[]') {
    console.log("Error: Breed not found.");
    return;
  }
  //HappyPath:
  const data = JSON.parse(body); //converts string into object
  /* data[0] gives us access to the object stored inside the data array */
  console.log(data[0].description); //prints the description of breed
});