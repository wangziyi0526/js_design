// es5
// function Point (x,y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
// }
// var p1 = new Point(1,2)
// console.log(p1.toString())
// es6
// class Point6 {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var p2 = new Point6(3,4)
// console.log(p2.toString())

//利用 Object.assign()

let getName = function () {
    return this.name
}

let getAge = function () {
    return this.age
}

class Peron {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

Object.assign(Peron.prototype,{
    getName,
    getAge
})

let p = new Peron('wzy',28)

console.log(p)
console.log(p.getName())
console.log(p.getAge())