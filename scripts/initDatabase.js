import { getConnection, closeConnection, r as rethink } from './helpers/rethinkHelper.js'

const dbConnection = await getConnection()

const allDbs = await rethink.dbList().run(dbConnection)

// Create database
if (!allDbs.includes('quartertoeleven-anime')) {
    await rethink.dbCreate('quartertoeleven-anime').run(dbConnection)
}

// Create tables
const allTables = await rethink.db('quartertoeleven-anime').tableList().run(dbConnection)
const tables = ['anime_info', 'anime_user_status']
for (const table of tables) {
    if (!allTables.includes(table)) {
        await rethink.db('quartertoeleven-anime').tableCreate(table, { primary_key: 'id' }).run(dbConnection)
    }
}

closeConnection(dbConnection)