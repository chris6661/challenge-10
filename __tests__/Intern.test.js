const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Steven Spielberg', '1000', 'stevens@jpark.org', 'Film School');
    expect(intern.name).toBe('Steven Spielberg'); 
    expect(intern.id).toBe('1000'); 
    expect(intern.email).toBe('stevens@jpark.org'); 
    expect(intern.school).toBe('Film School'); 
});

test("gets intern's school", () => {
    const intern = new Intern('Steven Spielberg', '1000', 'stevens@jpark.org', 'Film School');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Film School'));
});

test("gets interns role", () => {
    const intern = new Intern('Steven Spielberg', '1000', 'stevens@jpark.org', 'Film School');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});