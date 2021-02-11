const Engineer = require('../lib/Engineer');

test("Can get GitHub account via constructor", () => {
    const testValue = "ClaireRGit";
    const e = new Engineer("Claire", 50, "clairer@umbrella.org", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Claire", 50, "clairer@umbrella.org", "ClaireRGit");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "ClaireRGit"; 
    const e = new Engineer("Claire", 50, "clairer@umbrella.org", "ClaireRGit");
    expect(e.getGithuc()).toBe(testValue);
});