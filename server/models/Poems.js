const { Schema, model } = require('mongoose');

const schema = new Schema({
    avatar: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    variant: {
        type: String,
        required: true,
    },
    content1: {
        type: String,
        required: true,
    },
    content2: {
        type: String,
        required: true,
    },
    content3: {
        type: String,
    },
});

module.exports = model('Poems', schema);
