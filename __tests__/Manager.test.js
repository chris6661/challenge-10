const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Michael Scott', '001', 'mscott@dmpaper.org', '13F')

    expect(manager.name).toBe('Michael Scott');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('mscott@dmpaper.org');
    expect(manager.office).toBe('13F');
});

test("gets employee's role", () => {
    const manager = new Manager('Michael Scott', '001', 'mscott@dmpaper.org', '13F')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});