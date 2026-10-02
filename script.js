// Step 1: Declare JavaScript variables and data types

let studentName = "Ali";                    // String
let projectMarks = 85;                     // Number
let projectCompleted = true;               // Boolean
let technologies = ["HTML", "CSS", "JavaScript"]; // Array

let project = {                             // Object
    name: "Student Information System",
    semester: 3,
    subject: "Web Development"
};


// Step 2: Display variables using the DOM

let variablesDiv = document.getElementById("variables");

variablesDiv.innerHTML = `
    <strong>Student Name:</strong> ${studentName}<br>
    <strong>Project Marks:</strong> ${projectMarks}<br>
    <strong>Project Completed:</strong> ${projectCompleted}<br>
    <strong>Technologies:</strong> ${technologies.join(", ")}<br>
    <strong>Project Name:</strong> ${project.name}<br>
    <strong>Semester:</strong> ${project.semester}<br>
    <strong>Subject:</strong> ${project.subject}
`;


// Step 3: Create an arrow function for project logic

const showProjectSummary = () => {
    let totalTechnologies = technologies.length;

    return `
        <strong>Project Summary:</strong><br>
        Student <strong>${studentName}</strong> has completed the
        <strong>${project.name}</strong> project.<br>
        The project uses <strong>${totalTechnologies}</strong>
        technologies: ${technologies.join(", ")}.<br>
        Project Marks: <strong>${projectMarks}</strong>
    `;
};


// Step 4: Implement a click event

let summaryButton = document.getElementById("summaryButton");

summaryButton.addEventListener("click", () => {

    // Step 5: Update webpage dynamically
    document.getElementById("result").innerHTML = showProjectSummary();

});