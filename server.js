const dotenv = require("dotenv").config();
const app=require('./app')
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}.`);
});