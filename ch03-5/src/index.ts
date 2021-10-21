import INameable from "./INameable"
let obj: object = { name: 'ssabi' }

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2)