// emailSender.js
const nodemailer = require('nodemailer');
const emailConfig = require('./emailConfig');

const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail(to, subject, text) {
  const mailOptions = {
    from: emailConfig.auth.user,
    to,
    subject,
    text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };
