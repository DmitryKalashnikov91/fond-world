const express = require('express');
const Sketches = require('../models/Sketches');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        const list = await Sketches.find();
        res.status(200).send(list);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

module.exports = router;
