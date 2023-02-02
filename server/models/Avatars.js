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
});

module.exports = model('Avatars', schema);
