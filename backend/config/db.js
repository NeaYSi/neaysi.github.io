import { Sequelize } from 'sequelize';

// initialise sequelize with sqlite database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // SQLite only
  storage: './config/database.sqlite',
});

export default sequelize;
