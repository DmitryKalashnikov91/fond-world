const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastName: { type: String },
    visits: Number,
});

module.exports = model('User', schema);
