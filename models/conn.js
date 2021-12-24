const pgp = require('pg-promise')({

    query: e => {

        console.log(`QUERY: `, e.query)
    }

});

const options = {
    user: "postgres",
    host: 'localhost',
    database: 'tabeazy',
    password: "1234",
    port: 5432,
}

// make a connection to the database, specified by the options object
const db = pgp(options);

module.exports = db;