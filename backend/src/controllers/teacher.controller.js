import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const findAll = async (req, res) => {
  const teachers = await User.findAll({
    where: { role: 'student' },
  });
  res.send(teachers);
};

// find a teacher by id
export const findById = async (req, res) => {
  const teacher = await User.findByPk(req.params.id);
  res.send(teacher);
};

// create a new teacher
export const create = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const teacher = await User.create({
    ...req.body,
    password,
    role: 'teacher',
  });
  res.send(teacher);
};

// update a teacher by id
export const update = async (req, res) => {
  const teacher = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(teacher);
};

// delete a teacher by id
export const remove = async (req, res) => {
  const teacher = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(teacher);
};

// find a teacher by email
export const findByEmail = async (req, res) => {
  const teacher = await User.findOne({
    where: {
      email: req.params.email,
    },
  });
  res.send(teacher);
};

// find a teacher by name
export const findByName = async (req, res) => {
  const teacher = await User.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.send(teacher);
};

// find a teacher by id and email
export const findByIdAndEmail = async (req, res) => {
  const teacher = await User.findOne({
    where: {
      id: req.params.id,
      email: req.params.email,
    },
  });
  res.send(teacher);
};
