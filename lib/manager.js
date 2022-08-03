// required employee constructor 
const Employee = require('./Employee');


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // using super syntax to call 
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // returns the role of manager instead of "employee"
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 