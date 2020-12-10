// variables
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); 

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'descriptionOne',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'descriptionTwo',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'descriptionThree',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Key features of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Steps required to install? Provide a step-by-step description.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions/examples for use?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Collaborators? Provide links to their GitHub profiles.',
        default: "No collaborators.",
    },
    {
        type: 'input',
        name: 'creditsOne',
        message: 'Any third-party assets? List creators with links to their primary web presence.',
        default: "No third-party assets.",
    },
    {
        type: 'input',
        name: 'creditsTwo',
        message: 'Follow tutorials? include links to those here.',
        default: "No tutorials.",
    },
    {
        type: 'list',
        name: 'license',
        message: 'License type?',
        choices: ['Apache', 'GNU', 'MIT', 'None'],
        default: "Press Enter if no license.",
    },
];


// function to write README file
//function writeToFile(fileName, data) {

//}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
   
    const template = generateMarkdown(answers);

    fs.writeFile('README.md', template, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
    .catch(error => {
        console.log(error);
    }
  );
}

// function call to initialize program
init();