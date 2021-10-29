import * as R from 'ramda'
import { ICoordinates, makeRandomICoordinates } from "./models/coordinates";
import { ILocation, makeRandomILocation } from "./models/location";
import { IPerson, makeRandomIPerson } from "./models/person";

const person: IPerson = makeRandomIPerson()
const location: ILocation = makeRandomILocation()
const coordinates: ICoordinates = makeRandomICoordinates()

const newLocation = R.mergeDeepRight(location, { coordinates })
const newPerson = R.mergeDeepRight(person, { location: newLocation })

console.log('person', person)
console.log('newPerson', newPerson)