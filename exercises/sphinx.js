class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
    this.wrongCounter = 2;
    this.correctCounter = this.riddles.length;
 }
 collectRiddle(riddle) {
   this.riddles.push(riddle);
   if (this.riddles.length > 3) {
     this.riddles.shift();
   }
 }
attemptAnswer(string){
for(this.i=0;this.i<this.riddles.length;this.i++) {
  if(string == this.riddles[this.i].answer) {
    this.riddles.splice([this.i], 1)
    this.wrongCounter--;
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
  } else {
    this.wrongCounter++
  }
  if(this.wrongCounter == 3) {
    this.heroesEaten++
  }
  if(this.correctCounter == 0) {
    return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
  }
}
}
}
module.exports = Sphinx;

// npm test mythical-creatures/test/sphinx-test.js