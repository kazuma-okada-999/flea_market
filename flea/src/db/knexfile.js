

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname + '/.env'),
});

console.log(process.env.DB_USER);

module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER || 'user',
            database: process.env.DB_NAME || 'fleamarket',
        },
        migrations: {
            directory: './data/migrations',
        },
        seeds: { directory: './data/seeds' },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './data/migrations',
        },
        seeds: { directory: './data/seeds' },
    },
};
