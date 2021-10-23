// 객체를 반환하는 화살표 함수 만들기
export type Person = { name: string, age: number }

export const makePerson = (name: string, age: number = 10): Person => ({ name, age })

console.log(makePerson('Jack')) // { name: 'Jack', age: 10 }
console.log(makePerson('Jane', 29)) // { name: 'Jack', age: 29 }