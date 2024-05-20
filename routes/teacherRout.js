
const express = require('express');
const router = express.Router();
const teacherService = require('../services/teacherService');

// Get all teachers
router.get('/api/teachers', async (req, res) => {
  try {
    const data = await teacherService.getAllTeachers();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Get a single teacher
router.get('/api/teacher/:id', async (req, res) => {
  try {
    const data = await teacherService.getTeacherById(req.params.id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Add a new teacher
router.post('/api/teacher/add', async (req, res) => {
  try {
    const teacherData = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      subject: req.body.subject,
    };
    const data = await teacherService.addTeacher(teacherData);
    res.status(200).json({
      code: 200,
      message: 'Teacher Added Successfully',
      addTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Update a teacher
router.put('/api/teacher/update/:id', async (req, res) => {
  try {
    const teacherData = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      subject: req.body.subject,
    };
    const data = await teacherService.updateTeacher(req.params.id, teacherData);
    res.status(200).json({
      code: 200,
      message: 'Teacher Updated Successfully',
      updateTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// Delete a teacher
router.delete('/api/teacher/delete/:id', async (req, res) => {
  try {
    const data = await teacherService.deleteTeacher(req.params.id);
    res.status(200).json({
      code: 200,
      message: 'Teacher Deleted Successfully',
      deleteTeacher: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
