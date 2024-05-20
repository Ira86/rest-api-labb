const { Student } = require('../models/student');

// Get all students
async function getAllStudents() {
  try {
    const data = await Student.find({});
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Server Error');
  }
}

// Get a single student by ID
async function getStudentById(id) {
  try {
    const data = await Student.findOne({ _id: id });
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Server Error');
  }
}

// Add a new student
async function addStudent(studentData) {
  try {
    const stu = new Student(studentData);
    const data = await stu.save();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Server Error');
  }
}

// Update a student
async function updateStudent(id, studentData) {
  try {
    const data = await Student.findOneAndUpdate({ _id: id }, { $set: studentData }, { new: true });
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Server Error');
  }
}

// Delete a student
async function deleteStudent(id) {
  try {
    const data = await Student.findOneAndRemove({ _id: id });
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Server Error');
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
