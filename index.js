const inquirer = require("inquirer")
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)
const generateMarkdown = require("./generateMarkdown")

// creating an array of questions to be answered by the user through the terminal
function userPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title'
        },
        {
            type: 'input',
            message: "Give a description for your project",
            name: 'description'
        },
        {
            type: 'input',
            message: "What are the installation requirements for this project?",
            name: 'installation'
        },
        {
            type: 'input',
            message: "How is the project intended to be used?",
            name: 'usage'
        },
        {
            type: 'input',
            message: "Who is credited for this project?",
            name: 'credits'
        },
        {
            type: 'input',
            message: "What is your github username?",
            name: 'github'
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email'
        },
        {
            type: 'list',
            message: "Choose a license for your project",
            name: 'license',
            choices: ["Apache", "MIT", "ISC"]
        }
    ])
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err))
}

// call the userPrompt function to start the questions in Node
userPrompt()