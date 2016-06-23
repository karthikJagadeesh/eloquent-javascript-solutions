let flattenThis = [[1,2], [3,4,5], [6,7,8], [8,9, "Hello", "World"]]
let flattenedArray = flattenThis.reduce((acc, curr) => acc.concat(curr))

console.log(flattenedArray)
