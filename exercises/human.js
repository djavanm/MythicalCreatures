class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre() {
  if(this.encounterCounter == 0) {
    return false;
  } 
  if(this.encounterCounter % 3 == 0) {
    return true;
  } else {
    return false;
  }
  }
  }
module.exports = Human;

// npm test mythical-creatures/test/human-test.js