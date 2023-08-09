const { Schema, model } = require('mongoose');

const schema = new Schema({
    posterSrc: {
        type: String,
        required: true,
    },
});

module.exports = model('Posters', schema);
