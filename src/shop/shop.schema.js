const mongoose = require('mongoose')
const shopSchema = new mongoose.SchemaType({
     name: String,
     address: String,
     telephone: Number
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;