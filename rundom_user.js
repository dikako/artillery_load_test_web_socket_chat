'use strict';

module.exports = {
  generateRandomData
};

const Faker = require('faker');

function generateRandomData(userContext, events, done) {

  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const chat = `${Faker.lorem.words(5)}`;

  userContext.vars.name = name;
  userContext.vars.chat = chat;

  // continue with executing the scenario:
  return done();
}