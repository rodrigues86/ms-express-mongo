const mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
     // _id: { type: mongoose.Types.ObjectId, required: true, unique: true },
     address: { type: String, required: true, unique: true },
     telephone: { type: Number, required: true, unique: true },
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;