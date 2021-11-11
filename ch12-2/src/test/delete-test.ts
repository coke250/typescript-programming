import { connect } from '../mongodb/connect'
import { MongoClient } from 'mongodb'

const deleteTest = async () => {
  let connection: MongoClient

  try {
    connection = await connect()
    const db = await connection.db('ch12-2')
    const personsCollection = db.collection('persons')
    await personsCollection.insertMany([
      { name: 'Jack' }, { name: 'Tom' }, { name: "Jane" }
    ])

    let result = await personsCollection.deleteOne({ name: 'Tom' })
    console.log(result) // deleteCount: 1
    result = await personsCollection.deleteMany({})
    console.log(result) // deleteCount: 2
  } catch (e) {
    console.log(e.message)
  } finally {
    connection.close()
  }
}

deleteTest()