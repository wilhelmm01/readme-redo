
const fs = require('fs');
const inquirer = require('inquirer'); 

const generatePage = require('./utils/generateMarkdown.js');


const promptUser = () => {

    console.log(`
    *******************
       NEW PROJECT
    *******************

    `)

    return inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: "What's your Project Name",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of Project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions',
       
    },
    {
        type: 'input',
        name: 'uses',
        message: 'How is this project used?',
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions',

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Product License?',
        choices: ['OSU', 'ME'],
        default: ["OSU"],
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your github username",
        
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address",
        
    },

   
]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, answers => {
        if (answers) {
            console.log("checkout readme!");
        } 
    })
}; 


promptUser()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
 

