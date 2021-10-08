class Yahtzee {
  constructor() {
    this.totalScore = 0;
    this.dice = [];
    this.points = 0;
  }

  roll() {
    let dice = [];

    for (let i = 0; i < 5; ++i) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }

    return dice;
  }

  rollWithSave() {
    let dice = [];

    for (let i = 0; i < 5; ++i) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }

    return dice;
  }

  bonus(i) {
    this.totalScore = i;
    if (this.totalScore >= 63) {
      this.totalScore += 35;
    } else {
      console.log("Pas de bonus");
    }

    return i;
  }

  identicalDice(tabDice, i) {
    this.dice = tabDice;

    this.points = i;

    for (let j = 0; j < this.dice.length - 1; j++) {
      if (this.dice[j] !== this.dice[j + 1]) {
        console.log("pas identique");
        return false;
      }
    }

    this.points += 50;

    return this.points;
  } // Ici la valeur de retour est 56 car on part dans l'idée que 6 (soit la valeur de i) est la valeur du score actuel

  chance(tabDice) {
    this.dice = tabDice;
    this.points = 0;
    for (let j = 0; j < this.dice.length; j++) {
      this.points += this.dice[j];
    }

    return this.points;
  }

  upperSectionCombinations(tabDice, nb) {
    this.dice = tabDice;
    this.points = 0;
    for (let j = 0; j < this.dice.length; j++) {
      if (this.dice[j] == nb) {
        this.points += this.dice[j];
      }
    }

    return this.points;
  }

  smallStraight(tabDice) {
    this.dice = tabDice;
    let scoreSmallStraight = 0;
    let tab = this.dice.sort();
    let length = 0;
    for (var i = 0; i < tab.length - 1; i++) {
      if (tab[i + 1] - tab[i] === 1) {
        length += 1;
      }
    }
    if (length >= 3) {
      scoreSmallStraight = 30;
    } else {
      scoreSmallStraight = 0;
    }

    return scoreSmallStraight;
  }
}

module.exports = Yahtzee;
