const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        sgMail.send(mailOptions, (error, result) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
}

module.exports = { sendEmail };