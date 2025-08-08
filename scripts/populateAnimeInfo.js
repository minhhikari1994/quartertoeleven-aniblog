import { getConnection, closeConnection, r as rethink } from './helpers/rethinkHelper.js'

const dbConnection = await getConnection()

console.log(process.argv[2])

closeConnection(dbConnection)