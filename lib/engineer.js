const Employee = require("./employee");

class Engineer extends Employee
{
    constructor(name, id, title, github)
    {
        super(name, id, title);
        this.github = github;
    }

    getRole()
    {
        return "Engineer";
    }

    getGithub()
    {
        return this.github;
    }

}

module.exports = Engineer