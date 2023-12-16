const jwt = require('jsonwebtoken');

// payload data
const payload = {
    userId: 1, // Example user ID

};

// Your secret key
const secret = '6vQ5ZQGpDwjH92MC97wbQqttZDiRJn372pdBOUnjJdQ='; 

// Token generation
const token = jwt.sign(payload, secret, { expiresIn: '72h' }); // Token expires in 3 days

console.log('Generated JWT:', token);
