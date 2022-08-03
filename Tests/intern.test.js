// required intern constructor 
const Intern = require('../lib/Intern');

// this will create the intern object 
test('creates an Intern object', () => {
    const intern = new Intern('Daniel', 30, 'daniel@fakemail.com', 'UT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// this function will pull the school from the data 
test('gets employee school', () => {
    const intern = new Intern('Daniel', 30, 'daniel@fakemail.com', 'UT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// this function will pull the role of the employee
test('gets role of employee', () => {
    const intern = new Intern('Daniel', 30, 'daniel@fakemail.com', 'UT');

    expect(intern.getRole()).toEqual("Intern");
}); 