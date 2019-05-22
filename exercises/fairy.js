class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
 }
 receiveBelief() {
   this.dust += 1;
 }
 believe() {
   this.dust += 10;
 }
 makeDresses(array) {
  this.clothes.dresses = this.clothes.dresses.concat(array);
 }
 provoke() {
   this.disposition = 'Vengeful';
 }
replaceInfant(object) {
if (this.disposition === 'Vengeful') { 
  this.humanWards.push(object);
  object.disposition = 'Malicious';
}
if(this.humanWards.length > 2) {
  this.disposition = 'Good natured';
} else {
  return object;
}
}
}
module.exports = Fairy;

// npm test mythical-creatures/test/fairy-test.js