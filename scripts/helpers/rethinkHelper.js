import r from 'rethinkdb';

const getConnection = async () => {
    return await r.connect({ host: 'localhost', port: 28015 })
}

const closeConnection = async (connection) => {
    return await connection.close()
}

export {
    getConnection,
    closeConnection,
    r
}