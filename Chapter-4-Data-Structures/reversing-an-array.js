const reverseArray = (givenArray) => {
  let newArray = []
  givenArray.map(value => newArray.unshift(value))
  return newArray
}
const reverseArrayInPlace = (givenArray) => {
  for(let i = 0; i < Math.floor(givenArray.length / 2); i++) {
    let old = givenArray[i]
    givenArray[i] = givenArray[givenArray.length - 1 - i]
    givenArray[givenArray.length - 1 - i] = old
  }
  return givenArray
}

let sample = [1,2,3,4,5]
console.log(reverseArray(sample))
console.log(reverseArrayInPlace(sample))
console.log(sample)
