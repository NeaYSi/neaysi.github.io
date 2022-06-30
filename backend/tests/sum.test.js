const { expect, test } = require('@jest/globals');

// const server = require('../index.js');
// const supertest = require('supertest');
// const requestWithSupertest = supertest(server);

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
