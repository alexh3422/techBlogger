
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const frontEndRoutes = require('./frontEndRoutes');


router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/', frontEndRoutes);

module.exports = router;