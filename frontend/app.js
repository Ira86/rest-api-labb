// app.js

// For students
const stContainer = document.getElementById('stdetails');

// Fetch student details from the backend API
fetch('/api/students')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process and display the student details using map and join methods
    const students = data.map(student => `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
      </tr>
    `);
    // Joining the student rows to table
    stContainer.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          ${students.join('')}
        </tbody>
      </table>
    `;
  })
  .catch(error => {
    console.error('Error:', error);
    stContainer.innerHTML = '<p>Failed to load student data.</p>';
  });

// For teachers
const teContainer = document.getElementById('tedetails');

// Fetch teacher details from the backend API
fetch('/api/teachers')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process and display the teacher details using map
    const teachers = data.map(teacher => `
      <div class="teacher-card">
        <h3>${teacher.name}</h3>
        <p><strong>Age:</strong> ${teacher.age}</p>
        <p><strong>Subject:</strong> ${teacher.subject}</p>
        <p><strong>Email:</strong> ${teacher.email}</p>
      </div>
    `).join('');
    // Joining the teacher cards
    teContainer.innerHTML = teachers;
  })
  .catch(error => {
    console.error('Error:', error);
    teContainer.innerHTML = '<p>Failed to load teacher data.</p>';
  });
