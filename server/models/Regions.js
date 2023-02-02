const { Schema, model } = require('mongoose');

const schema = new Schema({
    variant: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    phoneHref: {
        type: String,
    },
    contentShow: {
        type: String,
        required: true,
    },
    contentHide: {
        type: String,
    },
});

module.exports = model('Regions', schema);
