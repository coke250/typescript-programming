import * as R from 'ramda'
import { makeRandomIPerson } from './models/person'

const keys: string[] = R.keys(makeRandomIPerson())
console.log('keys', keys)