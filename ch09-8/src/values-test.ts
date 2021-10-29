import * as R from 'ramda'
import { makeRandomIPerson } from './models/person'

const values: any[] = R.values(makeRandomIPerson())
console.log('values', values)