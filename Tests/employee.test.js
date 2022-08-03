// required constructor for employee
const Employee = require('../lib/Employee');

// this will create an object of the employee 
test('creates an employee object', () => {
    const employee = new Employee('Daniel', 30, 'daniel@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// this function retrieves the name of the employee 
test('gets employee name', () => {
    const employee = new Employee('Daniel', 30, 'daniel@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// this function retrieves the ID 
test('gets employee ID', () => {
    const employee = new Employee('Daniel', 30, 'daniel@fakemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// this retrieves the emails 
test('gets employee email', () => {
    const employee = new Employee('Daniel', 30, 'daniel@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// this retrieves the roles of the employee 
test('gets role of employee', () => {
    const employee = new Employee('Daniel', 30, 'daniel@fakemail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 