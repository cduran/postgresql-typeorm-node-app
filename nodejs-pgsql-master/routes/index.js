const { Client } = require('pg');

exports.index = async function (req, res) {
    const client = new Client({
        user: 'postgres',
        host: 'postgresql',
        database: 'nodejs_demo',
        password: 'testing',
        port: 5432,
      })
    await client.connect()
    const pgres = await client.query('SELECT NOW()')
    console.log(pgres)
    await client.end()

    res.render('index', { title: 'NodeJs & PostgreSQL CRUD Application' });
};