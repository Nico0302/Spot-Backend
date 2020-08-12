const express = require('express');

const provider = require('./provider');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/provider', provider);

module.exports = router;
