const range = (start, end, step) => {
  let rangeValues = []

  if(step < 0) {
    for(let i = start; i >= end; i = i + step)
      rangeValues.push(i)
  }
  else {
    for(let i = start; i <= end; i = i + step || i + 1 )
      rangeValues.push(i)
  }
  return rangeValues
}

const sum = (range) => {
  return range.reduce((acc, next) => acc + next)
}

console.log(range(24, 8, -3))
console.log(range(3, 28, 4))
console.log(sum(range(3, 28, 4)))
