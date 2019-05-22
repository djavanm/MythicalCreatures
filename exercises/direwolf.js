class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
    if(this.home == undefined) {
      this.home = 'Beyond the Wall';
    if (this.size == undefined) {
      this.size = 'Massive';
    }
  }
 }
 protect(stark) {
   this.huntsWhiteWalkers = false;
   stark.safe = true;
   if (this.starksToProtect.length == 2) {
     return
   } else if(this.home === stark.location) {
    this.starksToProtect.push(stark)
   } else {
     return
   }
 }
 leave(stark) {
   this.starksToProtect[0].safe = false;
   this.starksToProtect = [];
   this.huntsWhiteWalkers = true;
 }
}
module.exports = Direwolf;

// npm test mythical-creatures/test/direwolf-test.js