/* eslint-disable no-console */

import express from 'express';
import sequelize from './src/config/db.js';
import studentRoutes from './src/routes/student.routes.js';
import teacherRoutes from './src/routes/teacher.routes.js';
import userRoutes from './src/routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(teacherRoutes);
app.use(studentRoutes);

app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log('listening on port 3000');
});

export default app;
