

const express = require('express');
// creating express router calling express.Router function to represent router object and allows you to define routes specific to this router.
const router = express.Router();
// importing studentService module that is responsible for handling student-related operations.
const studentService = require('../services/studentService');



// Get all students/route handler for a get request to api/students
router.get('/api/students', async (req, res) => {
  try {
    // calls the getAllStudents() function from the studentService module asynchronously.
    const data = await studentService.getAllStudents();
    // sending response
    res.send(data);
  } catch (err) {
    console.log(err);

    // A response with a status code of 500 (Internal Server Error) and the message 'Server Error' is sent back to the client.

    res.status(500).send('Server Error');
  }
});

// Get a single student
router.get('/api/student/:id', async (req, res) => {
  try {
    // The req.params.id retrieves the value of the id parameter from the request URL.
    const data = await studentService.getStudentById(req.params.id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Add a new student with route handler/post request
router.post('/api/student/add', async (req, res) => {
  try {
    // extracts the student data from the request body (req.body) and assigns it to the studentData object
    const studentData = {
      age: req.body.age,
      course: req.body.course,
      name: req.body.name,
    };
    const data = await studentService.addStudent(studentData);
    res.status(200).json({
      code: 200,
      message: 'Student Added Successfully',
      addStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update a student
router.put('/api/student/update/:id', async (req, res) => {
  try {
    const studentData = {
      age: req.body.age,
      course: req.body.course,
      name: req.body.name,
    };
    const data = await studentService.updateStudent(req.params.id, studentData);
    res.status(200).json({
      code: 200,
      message: 'Student Updated Successfully',
      updateStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Delete a student
router.delete('/api/student/delete/:id', async (req, res) => {
  try {
    const data = await studentService.deleteStudent(req.params.id);
    res.status(200).json({
      code: 200,
      message: 'Student deleted',
      deleteStudent: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});
// expoting router
module.exports = router;
