// 함수는 객체다
let add = new Function('a', 'b', 'return a + b')
let result = add(1, 2)
console.log(result) // 3

let add2 = function (a, b) { return a + b }
console.log(add2(1, 2))

// 일등 함수
let f = function (a, b) { return a + b }
f = function (a, b) { return a - b }

// 함수 호출 연산자
let functionExpression = function (a, b) { return a + b }
let value = functionExpression(1, 2)  // 3

// 익명 함수
let value2 = (function (a, b) { return a + b })(1, 2) // 3

// const 키워드와 함수 표현식
const func = () => { }