const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const itemSchema = new mongoose.Schema({
    name:String,
    description:String,
    category:String
})
itemSchema.plugin(mongoosePaginate);
const ItemModel = mongoose.model('ItemModel', itemSchema);

module.exports = ItemModel;