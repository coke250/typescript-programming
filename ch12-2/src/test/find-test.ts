import { FindCursor, MongoClient } from 'mongodb'
import { connect } from '../mongodb/connect'

const findDocumentTest = async () => {
  let connection: MongoClient
  let cursor: FindCursor

  try {
    connection = await connect()
    const db = await connection.db('ch12-2')
    const personsCollection = db.collection('persons')
    const addressesCollection = db.collection('addresses')

    cursor = personsCollection.find({ name: 'ssabi' })
    const foundPersons = await cursor.toArray()
    console.log(foundPersons)

    cursor = addressesCollection.find({})
    const foundAddresses = await cursor.toArray()
    console.log(foundAddresses)
  } catch (e) {
    console.log(e.message)
  } finally {
    connection.close()
  }
}

findDocumentTest()