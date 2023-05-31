const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
     // _id: { type: mongoose.Types.ObjectId, required: true, unique: true },
     name: { type: String, required: true, unique: true },
     shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
     telephone: { type: Number, required: true, unique: true },
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;