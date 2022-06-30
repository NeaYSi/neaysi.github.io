import Student from '../models/student.model.js';

export const findAll = async (req, res) => {
  const students = await Student.findAll();
  res.send(students);
};

// find a student by id
export const findById = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  res.send(student);
};

// create a new student
export const create = async (req, res) => {
  const student = await Student.create(req.body);
  res.send(student);
};

// update a student by id
export const update = async (req, res) => {
  const student = await Student.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(student);
};

// delete a student by id
export const remove = async (req, res) => {
  const student = await Student.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(student);
};

// find a student by email
export const findByEmail = async (req, res) => {
  const student = await Student.findOne({
    where: {
      email: req.params.email,
    },
  });
  res.send(student);
};

// find a student by name
export const findByName = async (req, res) => {
  const student = await Student.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.send(student);
};

// find a student by password
export const findByPassword = async (req, res) => {
  const student = await Student.findOne({
    where: {
      password: req.params.password,
    },
  });
  res.send(student);
};

// find a student by id and email
export const findByIdAndEmail = async (req, res) => {
  const student = await Student.findOne({
    where: {
      id: req.params.id,
      email: req.params.email,
    },
  });
  res.send(student);
};
