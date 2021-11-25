const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const letterInWord = function (word, otherWord) {
        let letters = word.split('');
        let otherLetters = otherWord.split('')
        let newLetters = [];
        for (let letter of letters) {
            const index = otherLetters.findIndex(char => char.toLowerCase() === letter.toLowerCase())
            if (index != -1) {
                otherLetters.splice(index, 1);
            } else {
                newLetters.push(letter)
            }
        }
        return otherLetters.length === 0 && newLetters.length === 0;
    }
    return otherWords.filter(otherWord => letterInWord(this.word, otherWord))
}

module.exports = AnagramFinder;
