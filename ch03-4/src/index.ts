import { IPerson, ICompany } from "./IPerson_ICompany";

// 구조화
let ssabi: IPerson = { name: 'ssabi', age: 29 }
let apple: ICompany = { name: 'Apple Computer Inc', age: 43 }

// 비구조화 할당
let { name, age } = ssabi
console.log(name, age)

// 잔여 연산자 (rest operator)
let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street',
}
const { country, city, ...detail } = address
console.log(detail)

// 전개 연산자 (spread operator)
let coord = { ...{ x: 0 }, ...{ y: 0 } }
console.log(coord)

let part1 = { name: 'jane' }, part2 = { age: 22 }, part3 = { city: 'Seoul', country: 'Korea' }
let merged = { ...part1, ...part2, ...part3 }
console.log(merged)