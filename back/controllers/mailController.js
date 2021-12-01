const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig');

/**
 * @name main
 * @description Envoie un email
 * @param {*} mail
 */
async function main(mail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(mailConfig);

    // send mail with defined transport object
    mail["to"] = mailConfig.auth.user;
    let info = await transporter.sendMail(mail);
}

router.post('/', function(req, res) {
    main(req.body)
		    .then(mail => {res.status(201).send({ message: 'Success'})})
        .catch(console.error);
});

module.exports = router; 
