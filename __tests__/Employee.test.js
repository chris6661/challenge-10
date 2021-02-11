const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John Rambo', '123', 'jrambo@mail.com');

    expect(employee.name).toBe('John Rambo');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('jrambo@mail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John Rambo', '1234', 'jrambo@mail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Rambo'));
});

test("gets employee's ID", () => {
    const employee = new Employee('John Rambo', '123', 'jrambo@mail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test("gets employee's email", () => {
    const employee = new Employee('John Rambo', '123', 'jrambo@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('jrambo@mail.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('John Rambo', '123', 'jrambo@mail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});