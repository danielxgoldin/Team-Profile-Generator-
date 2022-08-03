// required engineer constructor 
const Engineer = require('../lib/Engineer');

// this creates the engineer object 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Daniel', 30, 'daniel@fakemail.com', 'danielgoldin30');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// this function pulls the github from the data 
test('gets engineer github value', () => {
    const engineer = new Engineer('Daniel', 30, 'daniel@fakemail.com', 'danielgoldin30');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// this function will populate the role 
test('gets role of employee', () => {
    const engineer = new Engineer('Daniel', 30, 'daniel@fakemail.com', 'danielgoldin30');

    expect(engineer.getRole()).toEqual("Engineer");
});