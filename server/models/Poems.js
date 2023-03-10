const { Schema, model } = require('mongoose');

const schema = new Schema({
    avatar: {
        type: String,
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
    },
    content3: {
        type: String,
    },
    content4: {
        type: String,
    },
});

module.exports = model('Poems', schema);
