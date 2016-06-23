let testArray = [1,2,3,4,5]

const every = (array, test) => {
  for(let i = 0; i < array.length; i++) {
    if(!test(array[i]))
      return false
  }
  return true
}

const some = (array, test) => {
  for(let i = 0; i < array.length; i++) {
    if(test(array[i]))
      return true
  }
  return false
}

console.log(some(testArray, (element) => element < 4))
console.log(every(testArray, (element) => element < 4))
