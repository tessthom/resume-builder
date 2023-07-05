// Tess Thomas

// Shortcut reference variable to find elements
const $ = function (id) {
  return document.getElementById(id);
};

// Button reference variables
const addGenSkillBtn = $('addGenSkillBtn');
const addTechSkillBtn = $('addTechSkillBtn');
const resetBtn = $('reset');
const createBtn = $('createBtn');

// This function adds an input field above the button element whose event calls it
function addInput(e) {
  const parentEl = e.currentTarget.parentElement;   // Refs the container div
  const newInput = document.createElement('input'); // Creates new input
  newInput.type = 'text';                           // Assigns input type
  const divClass = parentEl.classList[1];           // Gets class value of parent div
  newInput.name = divClass;                         // Assigns name value
  parentEl.insertBefore(newInput, e.currentTarget); // Adds new input
}

// Event listeners for all buttons
addGenSkillBtn.addEventListener('click', addInput);
addTechSkillBtn.addEventListener('click', addInput);
createBtn.addEventListener('click', function (event) {
  createResume(event);
});
resetBtn.addEventListener('click', resetForm);

// This function resets the form
function resetForm() {
  $('myForm').reset();
}

// This function validates the email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// Header
function getHeaderValues() {
  // Basic info reference variables
  const fname = $('fname').value;
  const lname = $('lname').value;
  const title = $('title').value;
  const phone = $('phone').value;
  const email = $('email').value;
  // Return values as properties of object
  return {
    fname,
    lname,
    title,
    phone,
    email,
  };
}

// Links
function getLinkValues() {
  const linkedin = $('linkedin').value;
  const github = $('github').value;
  const portfolio = $('portfolio').value;

  return {
    linkedin,
    github,
    portfolio,
  };
}

// About
function getAboutValue() {
  const aboutText = $('about').value;

  return aboutText;
}

// Skills
function getSkillsInput(inputName) {
  let skills = [];
  const skillInputs = document.querySelectorAll(`input[name="${inputName}"]`);
  skillInputs.forEach((input) => {
    skills.push(input.value);
  });

  return skills;
}

// Education
function getEducationValue() {
  let edu = $('education').value;
  // This formats education output to preserve line breaks
  edu = `<p>${edu.replaceAll('\n', '</p><p>')}</p>`;

  return edu;
}

// Work
function getJobValues() {
  // These sections store input values per job as properties of job objects
  let job1 = {
    job: $('job1').value,
    emp: $('emp1').value,
    start: $('job1startdate').value,
    end: $('job1enddate').value,
    desc: $('job1desc').value,
    // This line formats input as list items
    list: `<li>${$('job1list').value.replaceAll('\n', '</li><li>')}</li>`,
  };

  let job2 = {
    job: $('job2').value,
    emp: $('emp2').value,
    start: $('job2enddate').value,
    end: $('job2enddate').value,
    desc: $('job2desc').value,
    list: `<li>${$('job2list').value.replaceAll('\n', '</li><li>')}</li>`,
  };

  let job3 = {
    job: $('job3').value,
    emp: $('emp3').value,
    start: $('job3enddate').value,
    end: $('job3enddate').value,
    desc: $('job3desc').value,
    list: `<li>${$('job3list').value.replaceAll('\n', '</li><li>')}</li>`,
  };

  return {
    job1,
    job2,
    job3,
  };
}

// References
function getReferences() {
  let refs = $('ref').value;
  refs = `<p>${refs.replaceAll('\n', '</p><p>')}</p>`;

  return refs;
}

// This function writes a new page with all input
function createResume(event) {
  event.preventDefault();

  // Reference variables to store input by section
  const headerInfo = getHeaderValues();
  const links = getLinkValues();
  const about = getAboutValue();
  const gskills = getSkillsInput('gskills');
  const tskills = getSkillsInput('tskills');
  const edu = getEducationValue();
  const jobValues = getJobValues();
  const refs = getReferences();

  // Validates email
  if (!validateEmail(headerInfo.email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Links
  // const links = getLinkValues();

  // About
  // const about = getAboutValue();

  // Skills
  // const gskills = getSkillsInput('gskills');
  // const tskills = getSkillsInput('tskills');

  // Education
  // const edu = getEducationValue();

  // Experience
  // const jobValues = getJobValues();

  // References
  // const refs = getReferences();

  // Write HTML
  // Head
  let myText = `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${headerInfo.fname} ${headerInfo.lname} - Resume</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
    *  {
      box-sizing: border-box;
    }
    body.n  {
      max-width: 1100px;
      margin: 0 auto 2rem;
      display: grid;
      grid-template-columns: 1fr 60%;
      grid-template-rows: auto;
      grid-template-areas:
        "a a"
        "b e"
        "c e"
        "d e"
        "f e"
        "g h";
      gap: 1rem 3rem;
      font-family: 'Inter', sans-serif;
      background-color: #fff;
      color: #000;
      font-size: 1.25em;
    }
    .n header  {
      grid-area: a;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0 1rem;
      background-color: #fff;
      color: #000;
      background-image: none;
    }
    .n .hright  {
      width: 60%;
      display: flex;
      align-items: center;
    }
    .n .hright h2  {
      border-bottom: none;
      margin-left: 1rem;
      font-size: 1.5rem;
    }
    .n h1  {
      font-size: 3em;
      margin: 0;
    }
    .n .about  {
      grid-area: b;
    }
    .n .skills  {
      grid-area: c;
    }
    .n .edu  {
      grid-area: d;
    }
    .n .work  {
      grid-area: e;
      padding-bottom: 2rem;
      border-bottom: 3px solid #000;
    }
    .n .refs  {
      grid-area: f;
      padding-bottom: 2rem;
      border-bottom: 3px solid #000;
    }
    .n .foot-left  {
      grid-area: g;
    }
    .n .foot-right  {
      grid-area: h;
    }
    .n div>h2  {
      width: 100%;
      font-size: 2em;
      margin: 0;
      border-bottom: 3px solid #000;
    }
    .n h3  {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .n h4  {
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0;
    }
    .n div.job  {
      display: flex;
      flex-flow: column wrap;
      margin-left: 1rem;
      row-gap: none;
      margin-bottom: none;
    }
    .n .jdeets  {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5rem;
      flex: 0 1 auto;
    }
    .n .jdeets p  {
      padding-left: 10%;
      border-left: solid 2px;
      margin: 0;
    }
    .n p  {
      line-height: 1.5em;
    }
    .n .jdesc  {
      flex: 0 1 auto;
      display: flex;
      flex-flow: column wrap;
      width: 100%;
      align-self: start;
    }
    .n .foot-left  {
      display: inline-flex;
      font-style: italic;
    }
    .n .foot-right  {
      display: inline-flex;
      justify-content: space-between;
      font-style: italic;
    }
  </style>
  </head>`;

  // Header
  myText += `
  <body class="n">
  <header>
    <div class="name">
      <h1 class="fname">${headerInfo.fname}</h1>
      <h1 class="lname">${headerInfo.lname}</h1>
    </div>

    <div class="hright">
      <h2 class="title">${headerInfo.title}</h2>

      <address>
        <p class="phone">${headerInfo.phone}</p>
        <p class="email">${headerInfo.email}</p>
        <p class="linkedin">${links.linkedin}</p>
        <p class="gh">${links.github}</p>
        <p class="port">${links.portfolio}</p>
      </address>
    </div>
  </header>`;

  // About
  myText += `
  <div class="about">
    <h2>about</h2>
    <p class="about-p">${about}</p>
  </div>`;

  // Skills
  myText += `
  <div class="skills">
  <h2>skills</h2>
  <h3>soft skills</h3>`;

  // This section writes an unordered list with the dynamically created skills inputs
  // General Skills
  let listA = document.createElement('ul');
  gskills.forEach((skill) => {
    let li = document.createElement('li');
    li.textContent = skill;
    listA.appendChild(li);
  });

  myText += listA.outerHTML;

  myText += '<h3>tools & tech</h3>';

  // Tech and Tool Skills
  let listB = document.createElement('ul');
  tskills.forEach((skill) => {
    let li = document.createElement('li');
    li.innerHTML = skill;
    listB.appendChild(li);
  });

  myText += `${listB.outerHTML}</div>`;

  // Education
  myText += `
  <div class="edu">
    <h2>education</h2>
    <p>${edu}</p>
  </div>`;

  // References
  myText += `
  <div class="refs">
    <h2>references</h2>
    <p>${refs}</p>
  </div>`;

  // Work Experience
  myText += `
  <div class="work">
    <h2><span>experience</span></h2>
    <div class="job">
      <h3>${jobValues.job1.job}</h3>
      <div class="jdeets">
        <h4>${jobValues.job1.emp}</h4>
        <p><span class="d1">${jobValues.job1.start.replace(
          /-/g,
          '.'
        )}</span><span class="d2"> - </span>${jobValues.job1.end.replace(
    /-/g,
    '.'
  )}</p>
      </div>
      <div class="jdesc">
        <p>${jobValues.job1.desc}</p>
        <ul>
          ${jobValues.job1.list}
        </ul>
      </div>
    </div>

    <div class="job">
      <h3>${jobValues.job2.job}</h3>
      <div class="jdeets">
        <h4>${jobValues.job2.emp}</h4>
        <p><span class="d1">${jobValues.job2.start.replace(
          /-/g,
          '.'
        )}</span><span class="d2"> - ${jobValues.job2.end.replace(
    /-/g,
    '.'
  )}</span></p>
      </div>
      <div class="jdesc">
        <p>${jobValues.job2.desc}</p>
        <ul>
          ${jobValues.job2.list}
        </ul>
      </div>
    </div>

    <div class="job">
      <h3>${jobValues.job3.job}</h3>
      <div class="jdeets">
        <h4>${jobValues.job3.emp}</h4>
        <p><span class="d1">${jobValues.job3.start.replace(
          /-/g,
          '.'
        )}</span><span class="d2"> - ${jobValues.job3.end.replace(
    /-/g,
    '.'
  )}</span></p>
      </div>
      <div class="jdesc">
        <p>${jobValues.job3.desc}</p>
        <ul>
          ${jobValues.job3.list}
        </ul>
      </div>
    </div>
  </div>`;

  // Footer
  myText += `
  <div class="foot-left">
    <p>${headerInfo.phone}</p>
  </div>
  <div class="foot-right">
    <p>${headerInfo.email}</p>
    <p>${links.linkedin}</p>
  </div>`;

  // Close document
  myText += `
  </body>
  </html>`;

  // Open window
  const flyWindow = window.open('about:blank', 'myResume');
  flyWindow.document.write(myText);
}
