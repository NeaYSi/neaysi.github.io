import Teacher from '../models/teacher.model.js';

export const findAll = async (req, res) => {
  const teachers = await Teacher.findAll();
  res.send(teachers);
};

// find a teacher by id
export const findById = async (req, res) => {
  const teacher = await Teacher.findByPk(req.params.id);
  res.send(teacher);
};

// create a new teacher
export const create = async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.send(teacher);
};

// update a teacher by id
export const update = async (req, res) => {
  const teacher = await Teacher.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.send(teacher);
};

// delete a teacher by id
export const remove = async (req, res) => {
  const teacher = await Teacher.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(teacher);
};

// find a teacher by email
export const findByEmail = async (req, res) => {
  const teacher = await Teacher.findOne({
    where: {
      email: req.params.email,
    },
  });
  res.send(teacher);
};

// find a teacher by name
export const findByName = async (req, res) => {
  const teacher = await Teacher.findOne({
    where: {
      name: req.params.name,
    },
  });
  res.send(teacher);
};

// find a teacher by password
export const findByPassword = async (req, res) => {
  const teacher = await Teacher.findOne({
    where: {
      password: req.params.password,
    },
  });
  res.send(teacher);
};

// find a teacher by id and email
export const findByIdAndEmail = async (req, res) => {
  const teacher = await Teacher.findOne({
    where: {
      id: req.params.id,
      email: req.params.email,
    },
  });
  res.send(teacher);
};
