

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname + '/.env'),
});

console.log(process.env.DB_USER);
console.log(process.env.POSTGRES_DB);
console.log("走ってますか〜〜〜〜");
module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: undefined,
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
