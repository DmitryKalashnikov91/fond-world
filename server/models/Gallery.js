const { Schema, model } = require('mongoose');

const schema = new Schema({
    photoSrc: {
        type: String,
        required: true,
    },
});

module.exports = model('Gallery', schema);
