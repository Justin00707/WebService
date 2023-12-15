// server.js
const app = require('./app'); // Import the express app
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
