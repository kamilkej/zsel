// emailConfig.js

module.exports = {
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your_username',
    pass: 'your_password'
  }
};
