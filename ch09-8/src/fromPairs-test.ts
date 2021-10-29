import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from './models/person'

const pairs: [string, any][] = R.toPairs(makeRandomIPerson())
const person: IPerson = R.fromPairs(pairs) as IPerson
console.log('person', person)