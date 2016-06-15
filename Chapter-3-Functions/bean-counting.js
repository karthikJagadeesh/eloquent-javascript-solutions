const countBs = (word) => {
    return countChar(word, "B")
}
const countChar = (word, char) => {
    word = word.split("")
    let present = word.filter(item => item == char)
    return present.length
}

console.log(countBs("BasketBall"))
console.log(countChar("Darth Vader", "a"))
