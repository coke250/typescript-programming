// 색인 키와 값으로 객체 만들기
export type KeyValueType = {
  [key: string]: string
}
export const makeObject = (key: string, value: string): KeyValueType => ({ [key]: value })

console.log(makeObject('name', 'ssabi')) // { name: 'ssabi' }
console.log(makeObject('firstName', 'Jane')) // { firstName: 'Jane' }