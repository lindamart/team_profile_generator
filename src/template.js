
const generateTeam = team => {



const addManager = function (manager) {
    return `

    
    <div class="mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>Manager</h4><i class="material-icons"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.getId()}</p>
                <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const addEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h4>Engineer</h4><i class="material-icons"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.getId()}</p>
                <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const addIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>Intern</h4><i class="material-icons"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.getId()}</p>
                <p class="email">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
    </div>
</div>
    `
};

const html = [];

html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => addManager(manager)));

html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => addEngineer(engineer)).join(""));

html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => addIntern(intern)).join(""));

    return html.join("");


}

module.exports = team => {

    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        
        <div class='container'>
            <div class='row'>
                <div class='team col-12 d-flex justify-content-center'>
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html> `;
};