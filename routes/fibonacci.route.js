const router = require('express').Router();

const fibController = require('../controllers/fibonacci.controller');

router.post('/input', fibController.postNumber);
router.get('/output', fibController.getFibonacciValueByTicket);

module.exports = router;
