class Wizard {
  constructor(object) {
	this.name = object.name;
	this.bearded = object.bearded;
	this.bearded 
	this.isRested = true;
	this.spellCasts = 3;
		
	}	  
}
incantation(message) {
return message.toUpperCase();
}
cast() {
this.spellCasts -= 1; 
if(this.spellCasts > 0) {
return 'MAGIC BULLET';	
} else {
   this.isRested = false;
   return 'I SHALL NOT CAST!';
}
}
}
module.exports = Wizard;

// npm test mythical-creatures/test/wizard-test.js

// if(object.bearded === false) {
// 	this.bearded = false;
// }
// this.isRested = true;
// this.spellCasts = 3;
// }
// incantation(message) {
// return message.toUpperCase();
// }
// cast() {
// this.spellCasts -= 1; 
// if(this.spellCasts > 0) {
// return 'MAGIC BULLET';	
// } else {
//    this.isRested = false;
//    return 'I SHALL NOT CAST!';
// }	
// }