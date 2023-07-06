const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));
router.use('/review', require('./review.routes'));
router.use('/rooms', require('./rooms.routes'));
router.use('/avatars', require('./avatars.routes'));
router.use('/gallery', require('./gallery.routes'));
router.use('/news', require('./news.routes'));
router.use('/newsPapers', require('./newsPapers.routes'));
router.use('/poems', require('./poems.routes'));
router.use('/regions', require('./regions.routes'));
router.use('/sketches', require('./sketches.routes'));
router.use('/trustees', require('./trustees.routes'));
router.use('/faces', require('./faces.routes'));
module.exports = router;
