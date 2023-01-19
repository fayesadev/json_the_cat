const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns 'Breed not found.' when passed an invalid breed", (done) => {
    fetchBreedDescription('Corgi', (err, desc) => {
      // we expect a null for desc
      assert.equal(null, desc);
      // we expect a Breed not found mesage
      const invalidBreed = "Breed not found.";
      assert.equal(invalidBreed, err);

      done();
    });
  });
});