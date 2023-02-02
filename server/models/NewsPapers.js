const { Schema, model } = require('mongoose');

const schema = new Schema({
    header: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    hyperlink: {
        type: String,
        required: true,
    },
    linkToItem: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

module.exports = model('NewsPapers', schema);
