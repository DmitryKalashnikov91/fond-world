const { Schema, model } = require('mongoose');

const schema = new Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
    },
    alt: {
        type: String,
        required: true,
    },
});

module.exports = model('Faces', schema);
