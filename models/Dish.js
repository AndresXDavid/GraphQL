const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
     idDish: { type: String, required: true, unique: false },
     name: { type: String, required: true },
     calories: { type: Number, required: true },
     isVegetarian: { type: Boolean, default: false },
     value: { type: Number, required: true },
     comments: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Dish', DishSchema);