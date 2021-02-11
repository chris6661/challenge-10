const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 13;
    const e = new Manager("Albert", 75, "awesker@umbrella.org", testValue);
    expect(e.officeNumber).toBe(testValue); 
}); 

test("getRole() should return Manager", () => {
    const testValue = 'Manager';
    const e = new Manager("Albert", 75, "awesker@umbrella.org", 13);
    expect(e.getRole()).toBe(testValue); 
});

test("Can get office number via getOffice", () => {
    const testValue = 13; 
    const e = new Manager("Albert", 75, "awesker@umbrella.org", testValue);
    expect(e.getOfficeNumber()).toBe(testValue); 
});