
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const frontEndRoutes = require('./frontEndRoutes');
const commentsRoutes = require('./commentsRoutes');


router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/', frontEndRoutes);
router.use('/api/comments', commentsRoutes);

module.exports = router;