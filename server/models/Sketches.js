const { Schema, model } = require('mongoose');

const schema = new Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
});

module.exports = model('Sketches', schema);
