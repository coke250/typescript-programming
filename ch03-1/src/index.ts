// 타입주석
let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

o = { name: 'ssabi', age: 29 }

// 타입 추론
let num = 1       // number로 판단
let bool = true   // boolean으로 판단
let str = 'hello' // string으로 판단
let obj = {}      // object로 판단

// any 타입
let a: any = 0
a = 'hello'
a = true
a = {}

// undefined 타입
let u: undefined = undefined
// u = 1 // 오류 발생

// 템플릿 문자열
let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result)