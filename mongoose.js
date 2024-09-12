require('dotenv').config(); // Make sure dotenv is loaded before using environment variables

const mongoose = require('mongoose');

mongoose.set('debug', true); // Enable debug mode

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connection successful');
})
.catch((err) => {
  console.log(`No connection: ${err}`);
});

const logInSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  passconfirm: { type: String, required: true },
});

const LogInCollection = mongoose.model('UserData', logInSchema);
module.exports = LogInCollection;
