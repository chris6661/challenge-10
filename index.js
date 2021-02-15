//dist folder for rendered output html and css style sheet
//index.js runs the application with node

//when you submit, you will need a link to the video showing functionality and add it to your README as well

//variables to make file/functions work
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer"); //install
const path = require('path');
const fs = require('fs');
//variables for function outside of file and paths to get there
const output_dir = path.resolve(__dirname, 'dist');
const outputPath = path.join(output_dir, 'team.html');
//render the html file with entered information
const render = require('./lib/Renderhtml');
//variables for creating my team html file
const people = [];

const getPersonInfo = () => {
    inquirer.prompt([{
            type: "input",
            message: "What is the manager's name?",
            name: "managername",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid manager name is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerid",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid manager id is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "manageremail",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid manager email is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "manageroffice",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid maanger office number is required.");
                }
                return true;
            }
        },

    ]).then((managerInfo) => [
        createManager(managerInfo)
    ])
};

const createManager = (personInfo) => {
    const manager = new Manager(personInfo.managername, personInfo.managerid, personInfo.manageremail, personInfo.manageroffice);
    people.push(manager);
    loop();
};

const createEngineer = (personInfo) => {
    const engineer = new Engineer(personInfo.engineername, personInfo.engineerid, personInfo.engineeremail, personInfo.engineergit);
    people.push(engineer);
    loop();
};

const createIntern = (personInfo) => {
    const intern = new Intern(personInfo.internname, personInfo.internid, personInfo.internemail, personInfo.internschool)
    people.push(intern);
    loop();
};

const createTeam = () => {
    if (!fs.existsSync(output_dir)) {

        fs.mkdirSync(output_dir);
    }
    fs.writeFileSync(outputPath, render(people), 'utf-8');

}

const getEngineerInfo = () => {
    inquirer.prompt([{
            type: "input",
            message: "What is the engineer's name?",
            name: "engineername",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid engineer name is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the engineer's id?",
            name: "engineerid",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid engineer id is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engineeremail",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid engineer email is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the engineer's GitHub?",
            name: "engineergit",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid engineer GitHub is required.");
                }
                return true;
            }
        }

    ]).then((engineerInfo) => {
        createEngineer(engineerInfo)
    })

}

const getInternInfo = () => {
    inquirer.prompt([{
            type: "input",
            message: "What is the intern's name?",
            name: "internname",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid intern name is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the intern's id?",
            name: "internid",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid intern id is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internemail",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid intern email is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internschool",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid school is required.");
                }
                return true;
            }
        }

    ]).then((internInfo) => {
        createIntern(internInfo)
    })

}

const loop = () => {
    inquirer.prompt([{
            type: "list",
            name: "teammember",
            choices: [
                "Engineer", "Intern", "I do not want to add any more team members."
            ]
        }])
        .then((personInfo) => {

            switch (personInfo.teammember) {
                case 'I do not want to add any more team members.':
                    createTeam();
                    break;

                case 'Engineer':
                    getEngineerInfo()
                    break;

                case 'Intern':
                    getInternInfo()
                    break;
            }
        })
};


getPersonInfo();