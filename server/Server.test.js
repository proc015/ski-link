// archivo.js
require('text-encoding-utf-8');
const supertest = require('supertest');
const app = require('./index');
const mongoose = require('mongoose');
const { User } = require('./models/model');


const request = supertest(app);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});
