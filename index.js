const inquirer = require("inquirer")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const team = [];
init()

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
        buildTeam()

        console.log(team)
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
            // fire off createEngineer()
        } else if (userChoice === "Intern"){
            // fire off createIntern
        } else {
            // fire off renderTeam()       
        }
    })
}