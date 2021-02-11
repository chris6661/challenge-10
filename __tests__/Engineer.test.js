const Engineer = require ('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Nikola Tesla', '500', 'ntesla@notelon.com', 'officialnteslagit')

    expect(engineer.name).toBe('Nikola Tesla');
    expect(engineer.id).toBe('500');
    expect(engineer.email).toBe('ntesla@notelon.com');
    expect(engineer.github).toBe('officialnteslagit');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer ('Nikola Tesla', '500', 'ntesla@notelon.com', 'officialnteslagit')

    expect(engineer.getGithub()).toEqual(expectstringContaining('officialnteslagit'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Nikola Tesla', '500', 'ntesla@notelon.com', 'officialnteslagit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});