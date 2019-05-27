class Sphinx {
  constructor() {
    this.riddles = [];
    this.riddleCounter = 0;
    this.heroesEaten = 0;

  }
  collectRiddle(riddle) {
  if (this.riddles.length >= 3) {
  this.riddles.shift();
  this.riddles.push(riddle);
  this.riddleCounter = 3;
  } else {
    this.riddleCounter++;
    this.riddles.push(riddle);
  }
}
  attemptAnswer(string) {
    // console.log(this.riddleCounter);
  for (var i = 0; i < this.riddles.length; i++) {
    if(this.riddles[i].answer == string) {
      this.riddles.splice([i], 1);
      if(this.riddles.length >=1) {
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
  } 
  } 
   if(this.riddles.length === this.riddleCounter) {
    this.heroesEaten++;
}
   if(this.riddles.length === 0) {
     return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${string}\"???`
   }
}
  // this.riddles.filter(function(riddle) {
  //   return riddle.answer !== (string)
  // })
  // return this.riddles;
  // }
}

module.exports = Sphinx;

// npm test mythical-creatures/test/sphinx-test.js