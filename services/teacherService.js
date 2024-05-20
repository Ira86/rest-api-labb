const { Teacher } = require('../models/teacher');

// Get all teachers
const getAllTeachers = async () => {
  try {
    const data = await Teacher.find({});
    return data;
  } catch (err) {
    throw new Error('Failed to get teachers');
  }
};

// Get a teacher by ID
const getTeacherById = async (id) => {
  try {
    const data = await Teacher.findOne({ _id: id });
    return data;
  } catch (err) {
    throw new Error('Failed to get teacher');
  }
};

// Add a new teacher
const addTeacher = async (teacherData) => {
  try {
    const teacher = new Teacher(teacherData);
    const data = await teacher.save();
    return data;
  } catch (err) {
    throw new Error('Failed to add teacher');
  }
};

// Update a teacher
const updateTeacher = async (id, teacherData) => {
  try {
    const data = await Teacher.findOneAndUpdate({ _id: id }, { $set: teacherData }, { new: true });
    return data;
  } catch (err) {
    throw new Error('Failed to update teacher');
  }
};

// Delete a teacher by ID
const deleteTeacher = async (id) => {
  try {
    const data = await Teacher.findOneAndRemove({ _id: id });
    return data;
  } catch (err) {
    throw new Error('Failed to delete teacher');
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
