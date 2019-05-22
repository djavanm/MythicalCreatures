class Medusa {
  constructor(name) {
  	this.name = name;
  	this.statues = [];
   	console.log(this.name)
 }
 stare(victim) {
 	victim.stoned = true;
 	if(this.statues.length == 3) {
 		this.statues[0].stoned = false;
 		this.statues.splice(0, 1, victim)
 	} else {
 		this.statues.push(victim);
 	}
 	console.log(this.statues)
 }
}
module.exports = Medusa;


// npm test mythical-creatures/test/medusa-test.js