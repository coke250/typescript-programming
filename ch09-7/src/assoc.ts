import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './model/person'

const getName = R.pipe(R.prop('name'))

const person: IPerson = makeRandomIPerson()
const originalName = getName(person)
console.log(originalName)

const modifiedPerson = R.assoc('name', 'Albert Einstein')(person)
const modifiedName = getName(modifiedPerson)
console.log(modifiedName)