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
    it("should return bonus", function () {
      expect(yahtzee.bonus(60));
    });
  });

  describe("Test YAHTZEE", function () {
    let dice = [3, 3, 3, 3, 3];
    let i = 6;
    it("dice should be identical", function () {
      let dice = [3, 3, 3, 3, 3];
      let i = 6;
      expect(yahtzee.identicalDice(dice, i)).to.be.equal(56);
    });
    it("dice should not be identical", function () {
      let dice = [3, 3, 2, 3, 3];
      let i = 6;
      expect(yahtzee.identicalDice(dice, i)).to.be.equal(false);
    });
  });

  describe("Test Chance", function () {
    let dice = [1, 4, 1, 6, 6];

    it("dice should be chance", function () {
      expect(yahtzee.chance(dice)).to.be.equal(18);
    });
  });

  describe("Test Small straight", function () {
    let dice = [1, 2, 3, 4, 6];

    it("dice should be small straight", function () {
      expect(yahtzee.smallStraight(dice)).to.be.equal(30);
    });
  });

  describe("Test Large straight", function () {
    let dice = [2, 3, 4, 5, 6];

    it("dice should be large straight", function () {
      expect(yahtzee.largeStraight(dice)).to.be.equal(40);
    });
  });

  describe("Test threeOfKind", function () {
    let dice = [6, 6, 5, 6, 4];

    it("dice should be threeOfKind", function () {
      expect(yahtzee.threeOfKind(dice)).to.be.equal(27);
    });
  });

  describe("Test fourOfKind", function () {
    it("dice should be fourOfKind", function () {
      let dice = [5, 5, 5, 5, 1];
      expect(yahtzee.fourOfKind(dice)).to.be.equal(21);
    });
    it("dice should be fourOfKind", function () {
      let dice = [6, 6, 5, 6, 4];
      expect(yahtzee.fourOfKind(dice)).to.be.equal(0);
    });
  });

  describe("Test upper section combinations", function () {
    let dice = [2, 4, 2, 6, 6];
    let nb = 6;

    it("should return numbers score", function () {
      expect(yahtzee.upperSectionCombinations(dice, nb)).to.be.equal(12);
    });
  });
});
