const express = require('express');
const router = express.Router();

const auth = require('./auth');

router.get('/', auth.healthcheck);
router.get('/oauth', auth.authenticate);

module.exports = router;
