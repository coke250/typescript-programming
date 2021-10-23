// 매개변수에 비구조화 할당문 사용하기
export type Person = { name: string, age: number }

const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`)

printPerson({ name: 'Jack', age: 29 }) // name: Jack, age: 29