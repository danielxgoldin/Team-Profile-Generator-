// this once again is the employee constructor 
const Employee = require('./Employee');


class Intern extends Employee  {
    constructor (name, id, email, school) {
        // using super syntax to call 
        super (name, id, email); 

        this.school = school; 
    }

    // returns a school from user entry 
    getSchool () {
        return this.school;
    }

    // provides the role of Intern instead of "employee"
    getRole () {
        return "Intern";
    }
}

// exports it 
module.exports = Intern; 