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
    console.log(dice);
    return dice;
  }

  rollWithSave() {
    let dice = [];

    for (let i = 0; i < 5; ++i) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(dice);
    return dice;
  }

  bonus(i) {
    this.totalScore = i;
    if (this.totalScore >= 63) {
      this.totalScore += 35;
    } else {
      console.log("Pas de bonus");
    }
    console.log("Score + bonus", this.totalScore);
    return i;
  }

  identicalDice(tabDice, i) {
    this.dice = tabDice;
    console.log(this.dice);
    this.points = i;
    for (let j = 0; j < this.dice.length - 1; j++) {
      if (this.dice[j] !== this.dice[j + 1]) {
        console.log("pas identique");
        return false;
      }
    }
    this.points += 50;
    console.log(this.points);
    return this.points;
  } // Ici la valeur de retour est 56 car on part dans l'idée que 6 (soit la valeur de i) est la valeur du score actuel

  chance(tabDice) {
    this.dice = tabDice;
    this.points = 0;
    for (let j = 0; j < this.dice.length; j++) {
      this.points += this.dice[j];
    }
    console.log(this.points);
    return this.points;
  }

  upperSectionCombinations(tabDice, nb){
    this.dice = tabDice;
    this.points = 0;
    for(let j = 0; j < this.dice.length; j++) {
      if(this.dice[j] == nb){
        this.points += this.dice[j];
      }
      
    }
    console.log('this.points',this.points)
    return this.points;
  }

}

module.exports = Yahtzee;



