const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const letterInWord = function (word, otherWord) {
        let letters = word.split('');
        let otherLetters = otherWord.split('')
        for (let letter of letters) {
            const index = otherLetters.findIndex(char => char === letter)
            if (index != -1) {
                otherLetters.splice(index, 1);
            } 
        }
        return otherLetters.length === 0;
    }
    return otherWords.filter(otherWord => letterInWord(this.word, otherWord))
}

module.exports = AnagramFinder;
