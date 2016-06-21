const deepEqual = (object1, object2) => {
    if(object1 === object2)
        return true
    if(object1 == null || typeof object1 != "object" ||
       object2 == null || typeof object2 != "object")
        return false

    let propsInA = Object.keys(object1).length, propsInB = Object.keys(object2).length

    for(let prop in object2) {
        if(!prop in object1 || !deepEqual(object1[prop], object2[prop]))
            return false
    }

    return propsInB == propsInA
}

console.log(deepEqual({a:1, b:3}, {a:1, b:3}))
