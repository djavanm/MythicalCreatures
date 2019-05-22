class Werewolf {
  constructor(name, location) {
  	this.name = name; 
  	this.location = location;
  	this.human = true;
  	this.wolf = false;
  	this.hungry = false;
 }
 change() {
 	this.human = !this.human;
 	this.wolf = !this.wolf;
 	this.hungry = this.wolf;
 }

 eat(object) {
 	if(this.wolf === true) {
 		object.alive = false;
 		this.change();
 	} else {
 		return
 	}
 }
}
module.exports = Werewolf;

// npm test mythical-creatures/test/werewolf-test.js