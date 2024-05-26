

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname + '/.env'),
});

console.log(process.env.POSTGRES_USER);
module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.POSTGRES_USER || 'user',
            database: process.env.POSTGRES_DB || 'fleamarket',
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
