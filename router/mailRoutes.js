const { Router } = require('express');
const controller = require('../controller/emailSender');
const router = Router();

router.post("/sendEmail", controller.sendEmailHandler);


module.exports = router;