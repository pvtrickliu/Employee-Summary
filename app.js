var inquirer = require("inquirer");
var Employee = require("./lib/employee");
var team = [];


function main()
{
    console.log("start building your team.")
    inquirer.prompt([
        {
            type:"list",
            name:"employeeType",
            message: "What type of employee?",
            choices: ["Engineer", "Manager", "Intern"]
        },
        {
            type:"input",
            name: "employeeName",
            message: "What is the employee's name?"
        },
        {
            type:"input",
            name: "employeeID",
            message: "What is the employee's ID?"
        },
        {
            type:"input",
            name: "employeeEmail",
            message: "What is the employee's email?"
        }
    ])
    .then(function(results){
    
        const {employeeName, employeeID, employeeEmail} = results;
        const employeeToAdd = new Employee(employeeName, employeeID, employeeEmail);
        team.push(employeeToAdd);
        console.log(team);
        
    })
}

main();