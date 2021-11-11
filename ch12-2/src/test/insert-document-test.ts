import { MongoClient } from 'mongodb'
import { connect } from '../mongodb/connect'

const insertDocumentTest = async () => {
  let connection: MongoClient
  let cursor

  try {
    connection = await connect()
    const db = await connection.db('ch12-2')
    const personsCollection = db.collection('persons')
    const addressesÇollection = db.collection('addresses')

    const person = { name: 'ssabi', age: 29 }
    let result = await personsCollection.insertOne(person)
    console.log(result)

    const address = { country: 'korea', city: 'seoul' }
    result = await addressesÇollection.insertOne(address)
    console.log(result)
  } catch (e) {
    console.log(e.message)
  } finally {
    connection.close()
  }
}

insertDocumentTest()