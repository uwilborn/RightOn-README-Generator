// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

    {
        name: "title",
        message: "What is your project title?",
        type: "input"
    },
    {
        name: "description",
        message: "What is your project description?",
        type: "input"
    },
    {
        name: "installation",
        message: "How do you install the app?",
        type: "input"
    },
    {
        name: "usage",
        message: "How do you use the app?",
        type: "input"
    },
    {
        name: "licenses",
        message: "Does your app have a license?",
        type: "list",
        choices: ["MIT", "ISC", "APACHE", "GIT", "None"]
    },
    {
        name: "contributing",
        message: "Who is the developer?",
        type: "input"
    },
    {
        name: "test",
        message: "Was there testing?",
        type: "input"
    },
    {
        name: "contact",
        message: "Enter email address?",
        type: "input"
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', process.argv[2](err))
    err ? console.error(err) : console.log('Success!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            console.log(response)
            var READMEContent = `
#${response.title}
-----------------
## Table of Contents
--------------------
* [Description](#description)
* [License](#licence)
* [Developer] (#developer)
* [Tests] (#tests)
* [Contact] (#contact)


### DEscription
${response.description}

### License
${response.licenses}

### Developer
${response.contributing}

### Test
${response.test}

### Contact
${response.contact}`

            console.log(READMEContent);

            fs.writeFile('README.md', READMEContent, function (err, message) {
                console.log('file generated');
            })
        })
}

// Function call to initialize app
init();




