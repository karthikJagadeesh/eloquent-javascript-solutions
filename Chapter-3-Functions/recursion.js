const isEven = (number) => {
    number = Math.abs(number)
    if(number == 0)
        return true
    else if(number == 1)
        return false

    return isEven(number - 2)
}

console.log(isEven(-14568))
