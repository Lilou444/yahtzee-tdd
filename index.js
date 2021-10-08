class Yahtzee {
  constructor() {}

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
}

module.exports = Yahtzee;
