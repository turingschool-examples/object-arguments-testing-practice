const chai = require('chai');
const assert = chai.assert;
const { getFavoriteFood, findDifference, listFavoriteDestinations, filterScores,} = require('../src/general.js');

describe('general challenges', function() {

  describe('getFavoriteFood', function() {

    it.skip('should return the favorite food value', function() {
      var foodOpinions = {
        leastFavoriteFood: 'kimchi',
        favoriteFood: 'corn cheese',
        likedFoods: ['fried chicken', 'corn dogs', 'bibimbap', 'red rice cakes'],
      }
      var favoriteFood = getFavoriteFood(foodOpinions);
      assert.equal(favoriteFood, 'corn cheese');
    });

  });

  describe('findDifference', function() {
    it.skip('should find the difference between the amount of money saved vs the cost of an iPad', function() {
      var moneyStillNeeded = findDifference({ moneySaved: 400, ipadCost: 1100, monthlyIncome: 2000, rent: 1400 });
      assert.equal(moneyStillNeeded, 700);
    });
  });

  describe('listFavoriteDestinations', function() {
    it.skip('return list all favorite destinations', function() {
      var favoriteDestinations = listFavoriteDestinations({ favoriteDestinations: ['Las Vegas', 'Tokyo', 'Seattle', 'Keystone']});
      assert.deepEqual(favoriteDestinations, ['Las Vegas', 'Tokyo', 'Seattle', 'Keystone']);
    });
  })

  describe('filterScores', function() {
    // spicy, but try it anyways! research "bracket notation" to pass this test
    it.skip('should filter out any scores less than 70 for any given subject', function() {
      var scores = {
        math: [70, 71, 40, 55, 37, 83, 99, 100, 100, 98, 51, 83],
        reading: [57, 75, 90, 37, 82, 85, 96, 100, 97, 64, 63, 49],
        science: [70, 37, 83, 99, 100, 100, 98, 51, 83, 71, 40, 55]
      };

      var filteredReadingScores = filterScores('reading', scores);
      var filteredScienceScores = filterScores('science', scores);
      var filteredMathScores = filterScores('math', scores);
      assert.deepEqual(filteredReadingScores, [57, 75, 90, 37, 82, 85, 96, 100, 97, 64, 63, 49]);
      assert.deepEqual(filteredScienceScores, [70, 37, 83, 99, 100, 100, 98, 51, 83, 71, 40, 55]);
      assert.deepEqual(filteredMathScores, [70, 71, 40, 55, 37, 83, 99, 100, 100, 98, 51, 83]);
    });
  });

});
