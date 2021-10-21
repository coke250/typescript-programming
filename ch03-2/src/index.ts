// 인터페이스
interface IPerson {
  name: string
  age: number
}

let good: IPerson = { name: 'ssabi', age: 29 }

let bad1: IPerson = { name: 'ssabi' } // age 속성이 없으므로 오류
let bad2: IPerson = { age: 29 }       // name 속성이 없으므로 오류
let bad3: IPerson = {}                // name, age 속성이 없으므로 오류
let bad4: IPerson = { name: 'ssabi', age: 29, etc: true } // etc 속성이 있어서 오류

// 선택 속성 구문
interface IPerson2 {
  name: string  // 필수 속성
  age: number   // 필수 속성
  etc?: boolean // 선택 속성
}

let good1: IPerson2 = { name: 'ssabi', age: 29 }
let good2: IPerson2 = { name: 'ssabi', age: 29, etc: true }

// 익명 인터페이스
let ai: {
  name: string
  age: number
  etc?: boolean
}

function printMe(me: { name: string, age: number, etc?: boolean }) {
  console.log(
    me.etc ?
      `${me.name} ${me.age} ${me.etc}` :
      `${me.name} ${me.age}`
  )
}
printMe(ai)
