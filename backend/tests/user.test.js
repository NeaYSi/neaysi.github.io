const axios = require('axios');
const { expect, test } = require('@jest/globals');

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

test('it should get all the students', async () => {
  const response = await instance.get('students');
  expect(response.status).toBe(200);
});

test('it should get all the teachers', async () => {
  const response = await instance.get('teachers');
  expect(response.status).toBe(200);
});

test('it should create a new student', async () => {
  const response = await instance.post('students', {
    name: 'Test1',
    email: 'test@gmail.com',
    password: 'test',
  });
  expect(response.status).toBe(200);
});

test('it should login a user', async () => {
  const response = await instance.post('login', {
    email: 'test@gmail.com',
    password: 'test',
  });
  expect(response.status).toBe(200);
});
