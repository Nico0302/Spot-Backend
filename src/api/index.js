const express = require('express');

const provider = require('./provider');

const router = express.Router();

router.use('/provider', provider);

module.exports = router;
