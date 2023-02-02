const express = require('express');
const Regions = require('../models/Regions');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
    try {
        const list = await Regions.find();
        res.status(200).send(list);
    } catch (error) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже',
        });
    }
});

module.exports = router;
