class Yahtzee {
  constructor() {
    this.totalScore = 0;
  }

  roll() {
    let dice = [];

    for (var i = 0; i < 5; ++i) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(dice);
    return dice;
  }

  rollWithSave() {
    let dice = [];

    for (var i = 0; i < 5; ++i) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(dice);
    return dice;
  }

  bonus(i){
    this.totalScore = i;
    if(this.totalScore >= 63){
      this.totalScore += 35;
    } else {
      console.log("Pas de bonus");
    }
    console.log("Score + bonus", this.totalScore);
    return i;
  }
}

module.exports = Yahtzee;
