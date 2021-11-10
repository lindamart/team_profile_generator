const Intern = require("../lib/intern");

test("Can be an instance of Intern", ()=>{
    const e = new Intern();
    expect(typeof(e)).toBe("object")
})

test("Can set name via constructor", ()=>{
    const name = "Linda";
    const e = new Intern(name);
    expect(e.name).toBe(name)
})

test("Can set id via constructor", ()=>{
    const id = 100;
    const e = new Intern("Linda", id);
    expect(e.id).toBe(id)
})

test("Can get School name via getSchool()", ()=>{
    const name = "Linda";
    const id = 100;
    const email = "linda@gmail.com"
    const school = "U of Penn";
    const e = new Intern(name, id, email, school)
    expect(e.getSchool()).toBe(school);
})