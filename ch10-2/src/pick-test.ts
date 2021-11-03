import { pick } from "./pick"

const obj = { name: 'ssabi', age: 29, city: 'Seoul', country: 'Korea' }
console.log(
  pick(obj, ['name', 'age']), // { name: 'ssabi', age: 29 }
  pick(obj, ['nam', 'agge'])  // { nam: undefined, agge: undefined }
)