const Manager = require("../lib/manager");

test("Can be an instance of manager", ()=>{
    const e = new Manager();
    expect(typeof(e)).toBe("object")
})

test("Can set name via constructor", ()=>{
    const name = "Linda";
    const e = new Manager(name);
    expect(e.name).toBe(name)
})

test("Can set id via constructor", ()=>{
    const id = 100;
    const e = new Manager("Linda", id);
    expect(e.id).toBe(id)
})

test("Can get office number name via getOfficeNumber()", ()=>{
    const officeNumber = "555-555-5555";
    const name = "Linda";
    const email = "linda@gmail.com"
    const id = 100;

    const e = new Manager(name, id, email, officeNumber)
    expect(e.getOfficeNumber()).toBe(officeNumber);
})