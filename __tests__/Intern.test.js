const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const testValue = "Pitt";
    const e = new Intern("Jill", 25, "jvalentine@umbrella.org", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Jill", 25, "jvalentine@umbrella.org", "Pitt");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via school()", () => {
    const testValue = "Pitt";
    const e = new Intern("Jill", 25, "jvalentine@umbrella.org", testValue);
    expect(e.getSchool()).toBe(testValue);
});