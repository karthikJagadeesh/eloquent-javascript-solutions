const arrayToList = (array) => {
    let list = null
    for(let i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest : list}
    return list
}

const listToArray = (list) => {
    let array = []
    for(let branch = list; branch != null; branch = branch.rest)
        array.push(branch.value)
    return array
}

const prepend = (element, list) => {
    list = {value: element, rest: list}
    return list
}

const nth = (list, number) => {
    for(let branch = list, i = 0; branch; branch = branch.rest, i++) {
        if(i == number)
            return branch.value
    }
}

//recursive version of nth
const recursiveNth = (list, number) => {
    if(!list)
        return undefined
    if(number == 0)
        return list.value
    return recursiveNth(list.rest, number - 1)
}

let sample = [1,2,3,4,5]

console.log(arrayToList(sample))
console.log(listToArray(arrayToList(sample)))

let list = arrayToList(sample)

console.log(JSON.stringify(prepend(6, list), null, 2))
console.log(nth(list, 0))
console.log(recursiveNth(list, 0))
