// This is the employee constructor 
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
     //using super syntax to call 
        super (name, id, email);

        this.github = github; 
    }

    //This will return git hub from what the user enters.
    getGithub () {
        return this.github;
    }

     //this will return the engineer role instead of "employee"
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 