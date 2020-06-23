const express = require('express');
const { renderPage, handleError } = require('../util/server');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reactProps = { version: process.env.MERCHANT_VERSION, host: process.env.HOST };
    return renderPage(req, res, reactProps, 'landing', req.path);
  } catch (error) {
    return handleError(req, res, error);
  }
});

module.exports = router;
