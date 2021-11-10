const inquirer = require("inquirer")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/template.js");
const team = [];
init();

function init(){
    console.log("Please build your team!")
    createManager()
}

function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is the manager's office number?"
        },
    ]).then(answers =>{
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber)
        team.push(manager)
        console.log(team)
        buildTeam()
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's Id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub username?"
        },
    ]).then(answers =>{
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
        team.push(engineer)

        console.log(team)
        buildTeam()
    })
}


function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the interns's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the interns's Id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the interns's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the interns's school?"
        },
    ]).then(answers =>{
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        team.push(intern)

        console.log(team)
        buildTeam()
    })
}

function buildTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "I dont want to add anymore members"]
        }
    ]).then(answer =>{
        let userChoice = answer.choice;
        if(userChoice === "Manager"){
            createManager()
        } else if (userChoice === "Engineer"){
            createEngineer()
        } else if (userChoice === "Intern"){
            createIntern()
        } else {
            createTeam()       
        }
    })
}

function createTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}