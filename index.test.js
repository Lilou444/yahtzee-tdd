const Yahtzee = require("./index");
var chai = require("chai");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should();

describe("test", function () {
  let yahtzee = new Yahtzee();

  it("should return the result of dice roll", function () {
    expect(yahtzee.roll());
  }); // Je teste le lancé de dé

  it("should return the result of dice roll with the saving of dice", function () {
    let d1 = 1;
    let d2 = 3;
    let d3 = 3;
    let d4 = 4;
    let d5 = 6;
    let save = [d1, d2];

    expect(yahtzee.rollWithSave(save));
  }); // Je teste le lancé de dé avec des dés sauvegardés

  //Test Partie Bonus
  describe("Test bonus", function () {
    var sm = Bonus;

    it("should return Fizz", function () {
      expect(sm.bonus()).toBe(50);
    });
  });
});
