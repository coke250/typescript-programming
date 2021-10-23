// 실행문과 표현식 문
let x = 10
if (x > 0)
  x = 1

// 복합 실행문
function f() {
  let x = 1, y = 2
  let result = x + y + 10
}

// return 키워드
function isGreater(a: number, b: number): boolean {
  return a > b
}

// 표현식 문 스타일의 화살표 함수 구현
const isGreater2 = (a: number, b: number): boolean => a > b

// 표현식과 표현식 문의 차이
let a = 1, b = 0
if (a > b) console.log('a is greater than b') // 표현식
const isGreater3 = (a: number, b: number): boolean => a > b // 표현식 문