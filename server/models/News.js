const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        alt: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = model('News', schema);
