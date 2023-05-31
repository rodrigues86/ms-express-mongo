const mongoose = require('mongoose');
const app = require('./../main');
const Employee = require('./employee.schema');
const request = require('supertest');

describe('Record API (Integration)', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/rrdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await Employee.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new record', async () => {
    const recordData = { name: 'John Doe', age: 30 };
    const response = await request(app).post('/records').send(recordData);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(recordData);
  });

  it('should get all records', async () => {
    await Employee.create({ name: 'John Doe', age: 30 });
    await Employee.create({ name: 'Jane Smith', age: 25 });

    const response = await request(app).get('/records');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('should get one record by ID', async () => {
    const record = await Employee.create({ name: 'John Doe', age: 30 });

    const response = await request(app).get(`/records/${record._id}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ _id: record._id.toString(), name: 'John Doe', age: 30 });
  });
});
