
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
 
});



// Add constructor to Student model
// class Student {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }


const Student = mongoose.model('Student', studentSchema);
 // The Student model is created using the mongoose.model() method, which takes the model name ('Student') and
// the schema definition (studentSchema) as parameters. When you call new Student(),
// it internally uses the constructor provided by Mongoose to create a new instance of the Student model. -->

// exporting the modules
module.exports = {Student}
