# guc-evaluation-automate
Simple scripts to automate the GUC's evaluate courses and academics process

Evaluating courses/academics is a tedious process that every student has to go through a lot to view their grades.
These scripts automate the evaluation process, while being customizable.

## To evaluate academics
Simply paste the evaluate-academics.js code into your browser's console.

## To evaluate courses
Simply paste the evaluate-courses.js code into your browser's console.

### Tips
To open Google chrome's console right click on the form and click on inspect element, you'll find the console tab.

### Customization
- var grade = 0; // holds the grade; 0 for strongly agree 5 for strongly disagree
- var attendance = 0; // holds the attendance; 0 for always, 5 for almost never
- var studyTime = 5; // hold the study time; 0 for 1 hour, 5 for 6 hours
- var amountOfWork = 2; // holds the amount of work; 0 very great and 5 very low
- If you don't want the form to be submitted automatically, remove the line:
document.getElementById('pstEvalBtn').click();

##### Disclaimer
- These scripts are in no way affilated with the GUC itself, they're just a student activity to automate a time consuming process.
- You do not have to use these scripts to evaluate the courses/academics you can just fill the form manually everytime.
