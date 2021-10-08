const Yahtzee = require("./index");
var chai = require("chai");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should();

describe("test", function () {
  let yahtzee = Yahtzee;

  it("should return the result of dice roll", function () {
    let dices = [1, 3, 3, 4, 6];
    expect(yahtzee.roll()).toEqual(dices);
  }); // Je teste le lancé de dé

  it("should return the result of dice roll with the saving of dice", function () {
    let d1 = 1;
    let d2 = 3;
    let d3 = 3;
    let d4 = 4;
    let d5 = 6;
    let save = [d1, d2];

    yahtzee.rollWithSave(save);
  }); // Je teste le lancé de dé avec des dés sauvegardés

  //     expect(yahtzee.sauvegarde(d)).toBe([]);
  //   }); // Je teste la sauvegarde d'un dé

  // it("should print numbers", function () {
  //   expect(fb.printNumbers()).toEqual(100);
  // });

  // it("should print Fizz", function () {
  //   expect(fb.fizz(30, 3)).toBe("Fizz");
  // });

  // it("should print Buzz", function () {
  //   expect(fb.buzz(30, 5)).toBe("Buzz");
  // });

  // it("should print FizzBuzz", function () {
  //   expect(fb.fizzBuzz(30, 15)).toBe("FizzBuzz");
  // });

  // Test Partie Bonus 
  describe("Test bonus", function()  
{  
	var sm = Bonus ;

    it('should return Fizz', function () {
        expect(sm.bonus()).toBe(50);
    });
}); 
});
