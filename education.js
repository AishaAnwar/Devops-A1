const coursesList = document.querySelector('#courses');

const courses = [
  {
    year: '9th Grade',
    name: 'Mathematics',
    school: 'The City School',
    location: 'Karachi, Pakistan',
  },
  {
    year: '10th Grade',
    name: 'English',
    school: 'The City School',
    location: 'Karachi, Pakistan',
  },
  {
    year: '11th Grade',
    name: 'Chemistry',
    school: 'Sceptre',
    location: 'Karachi, Pakistan',
  },
  {
    year: '12th Grade',
    name: 'Computer Science',
    school: 'Sceptre',
    location: 'Karachi, Pakistan',
  },
  {
    year: 'Freshman Year',
    name: 'Intro to Computer Science',
    school: 'FAST University',
    location: 'Karachi, Pakistan',
  },
  {
    year: 'Sophomore Year',
    name: 'Data Structures and Algorithms',
    school: 'FAST University',
    location: 'Karachi, Pakistan',
  },
  {
    year: 'Junior Year',
    name: 'Software Engineering',
    school: 'FAST University',
    location: 'Karachi, Pakistan',
  },
  {
    year: 'Senior Year',
    name: 'Web Development',
    school: 'FAST University',
    location: 'Karachi, Pakistan',
  },
];

// Create HTML for each course
const coursesHTML = courses.map(course => {
  return `
    
      <h3>${course.name}</h3>
      <p>${course.year} | ${course.school} | ${course.location}</p>
    
  `;
}).join('');

// Add courses to the page
coursesList.innerHTML = coursesHTML;
