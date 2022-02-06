// Update with your config settings.
require("dotenv").config({
  path:
    process.env.NODE_ENV === "test"
      ? `${__dirname}/.env.test`
      : `${__dirname}/.env`,
});

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    " useNullAsDefault " : true ,
    migrations: {
      directory: __dirname + '/src/database/migrations',
  },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:process.env.DB_HOST,
     user : process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations',
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    " useNullAsDefault " : true ,
    migrations: {
      directory: __dirname + '/src/database/migrations',
    },
    
    
  }

};
