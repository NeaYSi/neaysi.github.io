import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const findAll = async (req, res) => {
  console.log('Fetching all students');
  const students = await User.findAll({
    where: { role: 'student' },
  });
  res.send(students);
};

// find a student by id
export const findById = async (req, res) => {
  const student = await User.findByPk(req.params.id);
  res.send(student);
};

// create a new student
export const create = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const student = await User.create({
      ...req.body,
      password,
      role: 'student',
    });
    res.send(student);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// update a student by id
export const update = async (req, res) => {
  const student = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(student);
};

// delete a student by id
export const remove = async (req, res) => {
  const student = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(student);
};

// find a student by email
export const findByEmail = async (req, res) => {
  const student = await User.findOne({
    where: {
      email: req.params.email,
    },
  });
  res.send(student);
};

// find a student by name
export const findByName = async (req, res) => {
  const student = await User.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.send(student);
};

// find a student by id and email
export const findByIdAndEmail = async (req, res) => {
  const student = await User.findOne({
    where: {
      id: req.params.id,
      email: req.params.email,
    },
  });
  res.send(student);
};
