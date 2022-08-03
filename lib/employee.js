// Const function for employees  
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from input
    getEmail () {
        return this.email;
    }
    // returning ID from input
    getName () {
        return this.name;
    }

    // returning email from input
    getId () {
        return this.id;
    }   

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 