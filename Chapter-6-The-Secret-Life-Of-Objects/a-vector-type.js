function Vector(x, y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y)
}
Vector.prototype.minus = function(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y)
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return "Distance: " + Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
})

let vector1 = new Vector(2, 3)
let vector2 = new Vector(5, 8)

console.log(vector1.plus(vector2))
console.log(vector1.minus(vector2))
console.log(vector2.length)
