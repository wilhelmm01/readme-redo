

const inquirer = require('inquirer'); 

const questions = () => {
    
    return inquirer.prompt([
    {
        type: 'input',
        name: 'Project',
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
   
]);
};


questions()
