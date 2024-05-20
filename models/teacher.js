
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  subject: String,
});

// Add constructor to Teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);
// The Teacher model is created using the mongoose.model() method, which takes the model name ('Teacher') and
// the schema definition (teacherSchema) as parameters. When you call new Teacher(),
// it internally uses the constructor provided by Mongoose to create a new instance of the Teacher model. -->

module.exports = { Teacher };
