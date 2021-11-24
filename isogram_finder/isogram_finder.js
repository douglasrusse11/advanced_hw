const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    
    return this.word.split('').every(letter => this.word.split('').filter(char => char == letter).length == 1)
}

module.exports = IsogramFinder;
