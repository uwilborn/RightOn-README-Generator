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
    {
        name: "github",
        message: "What is the Github username?",
        type: "input"
    },
];





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
* [Developer](#developer)
* [Github](#github)
* [Tests](#tests)
* [Contact](#contact)


### Description
${response.description}

### License
${response.licenses}
![Github Lincense](https://img.shields.io/badge/license-${response.licenses}-blue.svg)

### Developer
${response.contributing}


### Github
Check developer porifle: https://github.com/${response.github}

### Test
${response.test}

### Contact
If you have any questions please email me at:
${response.contact}`

            console.log(READMEContent);

            fs.writeFile('README.md', READMEContent, function (err, message) {
                console.log('file generated');
            })
        })
}

// Function call to initialize app
init();




