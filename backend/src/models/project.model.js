import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

import User from './user.model.js';

const Project = sequelize.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

// associations
Project.belongsToMany(User, { through: 'UserProjects' });
User.belongsToMany(Project, { through: 'UserProjects' });

User.hasMany(Project, { foreignKey: 'teacherId' });
Project.belongsTo(User);

export default Project;
