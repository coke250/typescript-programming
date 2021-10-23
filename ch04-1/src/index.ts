// 함수 선언문 ()
function add(a: number, b: number): number {
  return a + b
}

// void 타입
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`)
}

// 함수 시그니처 (function signature)
let printMe2: (string, number) => void = function (name: string, age: number): void { }

// type 키워드로 타입 별칭 만들기
type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void { }
let g: stringNumberFunc = function (c: string, b: number): void { }

// undefined 관련 주의 사항
interface INameable {
  name: string
}

// function getName(o: INameable) { return o.name }
function getName(o: INameable) {
  return o != undefined ? o.name : 'unknown name'
}

let n = getName(undefined)
console.log(n)
console.log({ name: 'Jack' })

interface IAgeable {
  age?: number
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))  // 0
console.log(getAge(null)) // 0
console.log({ age: 29 }) // 29

// 선택적 매개변수
function fn(arg1: string, arg?: number) { console.log(`arg: ${arg}`) }

fn('hello', 1)
fn('hello')