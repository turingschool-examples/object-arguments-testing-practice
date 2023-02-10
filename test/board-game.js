const chai = require('chai');
const assert = chai.assert;
const BoardGame = require('../src/BoardGame');

describe('boardGame', function() {
  it.skip('should be an instance of BoardGame', function() {
    var boardGame = new BoardGame({ name: 'Candyland' });
    assert.instanceOf(boardGame, BoardGame);
  });

  it.skip('has a name', function() {
    var boardGame = new BoardGame({ name: 'Ticket To Ride' }); // ONE ARGUMENT (object)
    assert.equal(boardGame.name, 'Ticket To Ride');
  });

  it.skip('can have a different name', function() {
    // these naming conventions are awful, but they're like this to avoid potentially confusing naming at this level
    var boardGame1 = new BoardGame({ name: 'Onitama' });
    assert.equal(boardGame1.name, 'Onitama');
    var boardGame2 = new BoardGame({ name: 'Azul' });
    assert.equal(boardGame2.name, 'Azul');
    var boardGame3 = new BoardGame({ name: 'Carcassonne' });
    assert.equal(boardGame3.name, 'Carcassonne');
    var boardGame4 = new BoardGame({ name: 'Catan' });
    assert.equal(boardGame4.name, 'Catan');
    var boardGame5 = new BoardGame({ name: 'Monopoly' });
    assert.equal(boardGame5.name, 'Monopoly');
  });

  it.skip('has a rating', function() {
    var azul = new BoardGame({ name: 'Azul', rating: 10 });
    assert.equal(azul.rating, 10);
  });

  it.skip('can have a different rating for different games', function() {
    var monopoly = new BoardGame({ name: 'Monopoly', rating: 6 });
    assert.equal(monopoly.rating, 6);
  });


  it.skip('has a minimum number of required players', function() {
    // HINT: which name should the class have and which name does the object argument have?
    var azul = new BoardGame({ name: 'Azul', rating: 10 , minPlayers: 2 });
    assert.equal(azul.minimumPlayers, 2);
    //"There should be a property called minimumPlayers and it should have a value of 2"
    // the assertion is telling you what the property name should be in the Class
    var carcassonne = new BoardGame({ name: 'Carcassonne' , minPlayers: 2});
    assert.equal(carcassonne.minimumPlayers, 2);
  });

  it.skip('has a maximum number of possible players', function() {
    // HINT: which name should the class have and which name does the object argument have?
    var azul = new BoardGame({ name: 'Azul', rating: 10 , minPlayers: 2 , maxPlayers: 4 });
    assert.equal(azul.maximumPlayers, 4)

    var carcassonne = new BoardGame({ name: 'Carcassonne', minPlayers: 2, maxPlayers: 5 });
    assert.equal(carcassonne.maximumPlayers, 5);
  });

  it.skip('can be played', function() {
    var azul = new BoardGame({ name: 'Azul', rating: 10 , minPlayers: 2 , maxPlayers: 4, played: false });
    assert.equal(azul.played, false);
    azul.play();
    assert.equal(azul.played, true);
  });

  it.skip("should only be played if it's rating is 10 because the players are picky", function() {
    var azul = new BoardGame({ name: 'Azul', rating: 10 , minPlayers: 2 , maxPlayers: 4, played: false });
    assert.equal(azul.played, false);
    azul.play();
    assert.equal(azul.played, true);
    var monopoly = new BoardGame({ name: 'monopoly', rating: 5, played: false });
    assert.equal(monopoly.played, false);
    monopoly.play();
    assert.equal(monopoly.played, false);
  });
});
