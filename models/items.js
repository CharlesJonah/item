const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:String,
    description:String,
    category:String
})

const ItemModel = mongoose.model('ItemModel', itemSchema);

module.exports = ItemModel;