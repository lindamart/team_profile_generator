const Engineer = require("../lib/engineer");

test("Can be an instance of Engineer", ()=>{
    const e = new Engineer();
    expect(typeof(e)).toBe("object")
})

test("Can set name via constructor", ()=>{
    const name = "Linda";
    const e = new Engineer(name);
    expect(e.name).toBe(name)
})

test("Can set id via constructor", ()=>{
    const id = 100;
    const e = new Engineer("Linda", id);
    expect(e.id).toBe(id)
})

test("Can get GitHub name via getGitHub()", ()=>{
    const name = "Linda";
    const id = 100;
    const email = "linda@gmail.com"
    const gitHubName = "lindamart";
    const e = new Engineer(name, id, email, gitHubName)
    expect(e.getGitHub()).toBe(gitHubName);
})