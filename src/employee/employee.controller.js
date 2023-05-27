import express from 'express';
import Employee from './employee.schema';
const app = express();

app.use(express.json());

app.get('/employee/all', async (req, res) => {
  const results = await Employee.find();
  res.json(results);
});

app.get('/employee/:id', async (req, res) => {
  const result = await Employee.findById(req.params.id);
  res.json(result);
});

app.post('/employee', async (req, res) => {
  const result = new Employee(req.body);
  await result.save();
  res.status(201).json(result);
});

module.exports = app;
