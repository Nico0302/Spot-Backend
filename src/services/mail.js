const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
});

function sendMail({
  subject,
  text,
  html,
  to
}) {
  // send mail with defined transport object
  return transporter.sendMail({
    from: `"Spot App" <${process.env.SMTP_EMAIL}`,
    to,
    subject,
    text,
    html
  });
}

module.exports = {
  sendMail
};
