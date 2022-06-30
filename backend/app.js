/* eslint-disable no-console */

import express from 'express';
import sequelize from './config/db.js';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';

const app = express();
app.use(teacherRoutes);
app.use(studentRoutes);

app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log('listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
