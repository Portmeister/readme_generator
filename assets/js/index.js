// variables
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you located?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL?',
        default: "I don't have github acct!",
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




let createIndexTemplate = ({name, location, github}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-4">${name}</h1>
            <p class="lead">Location: ${location}</p>
            <hr class="my-4">
            <p>GitURL: ${github}</p>
        </div>
    </body>
    </html>`;
}



// console.log(template);


inquirer
  .prompt(questions)
  .then(answers => {
   
    const template = createIndexTemplate(answers);

    fs.writeFile('index.html', template, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

  })
  .catch(error => {
    console.log(error);
    }
  );
