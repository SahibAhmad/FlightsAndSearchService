const express = require('express');
const v1Api = require('./v1/index.js');

const router = express.Router();

router.use('/v1',v1Api);

module.exports = router;