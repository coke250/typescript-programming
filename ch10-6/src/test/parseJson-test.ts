import { parseJson } from "../option/parseJson";

const json = JSON.stringify({ name: 'ssabi', age: 29 })
let value = parseJson(json).getOrElse({})
console.log(value)

value = parseJson('hello world').getOrElse({})
console.log(value)