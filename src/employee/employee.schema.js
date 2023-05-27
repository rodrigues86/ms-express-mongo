import mongoose from 'mongoose'
import Shop from './../shop/shop.schema';

const employeeSchema = new mongoose.Schema({
     _id: { type: mongoose.Types.ObjectId, required: true, unique: true },
     name: { type: String, required: true, unique: true },
     shop: { type: Shop, required: true },
     telephone: { type: Number, required: true, unique: true },
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;