//dist folder for rendered output html and css style sheet
//index.js runs the application

//invoked by running node index.js in terminal/command line

// consider adding validation to ensure user input provided is in the proper expected format, refer to previous node project (#9) for syntax/#phrasing

//make sure you include all relevant information asked for in the project section of module 10...you will generate an html page and css stylesheet from this to  render in a browser... end result is html and it will have all information that you added through the prompts and such

//when you submit, you will need a link to the video showing functionality and add it to your README as well

//refer to previous lessons, you needed an html js file before!!

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const inquirer = require("inquirer"); //install
const fs = require("fs"); 
const render = require('./lib/Renderhtml'); 