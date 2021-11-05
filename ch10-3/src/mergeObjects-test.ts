import { mergeObjects } from "./mergeObjects"

type INameable = { name: string }
type IAgeable = { age: number }

const nameAndAge: INameable & IAgeable = mergeObjects({ name: 'ssabi' }, { age: 29 })
console.log(nameAndAge)