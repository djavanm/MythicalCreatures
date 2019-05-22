class Unicorn {
    constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
    }
    isWhite() {
        return this.color == 'white';
    }
    says(sparkles) {
        return `**;* ${sparkles} *;**`
    }
}
// npm test mythical-creatures/test/unicorn-test.js
module.exports = Unicorn;
