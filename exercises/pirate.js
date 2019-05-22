class Pirate {
  constructor(name, job ) {
 this.name = name;
 this.job = job || 'Scallywag';
 this.cursed = false;
 this.heinousActs = 0;
 this.booty = 0;
 }
  commitHeinousAct() {
  	this.heinousActs++ ;
    this.heinousActs > 2 ? this.cursed = true : false;
    }

  robShip() {
  	this.booty = 100;
  	return 'YAARRR!';
  }
}
module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js
