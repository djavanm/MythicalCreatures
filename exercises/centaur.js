class Centaur {
  constructor(name, breed) {
  	this.name = name;
  	this.breed = breed;
  	this.cranky = false;
  	this.standing = true;
  	this.layingDown = false;
  	this.counter = 0;
 }
 shoot() {
 	 if (this.standing === false) {
 		return 'NO!'
 	}
 	this.counter++;
 	if(this.counter == 3) {
 		this.cranky = true; 
 	} else if(this.cranky == true) {
 		return 'NO!';
 	} else {
 		return 'Twang!!!';
 	}	
 }
 run() {
 	if (this.standing === false) {
 		return 'NO!'
 	}
 	this.counter++;
 	if(this.counter == 3) {
 		this.cranky = true;
 		return 'Clop clop clop clop!!!'
 	} else { 
 		return 'Clop clop clop clop!!!'
 	}
 }

 sleep() {
 	if(this.standing) {
 		return 'NO!';
 	}
 	if(this.layingDown == true) {
 		this.cranky = false;
 		return 'ZZZZ'
 	}
 }

 layDown() {
 	this.standing = !this.standing;
 	this.layingDown = !this.layingDown;
 }

 standUp() {
 	this.layingDown = !this.layingDown;
 	this.standing = !this.standing;
 }
 
 drinkPotion() {
 	if(this.standing === false) {
 		return 'Not while I\'m laying down!';
 	} else if(this.cranky == false) {
 		this.cranky = true;
 	} else { 
		this.cranky = false;
 }
 }
}
module.exports = Centaur;

// npm test mythical-creatures/test/centaur-test.js