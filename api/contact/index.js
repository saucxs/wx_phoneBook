const router = require('koa-router')();
const controller = require('./controller.js');

router.post('/login', controller.Login);

module.exports = router;