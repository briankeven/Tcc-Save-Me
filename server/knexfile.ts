import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
      host : 'localhost',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
      password: 'postgres'
    },
    migrations:{
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
};