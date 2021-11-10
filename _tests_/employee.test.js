const Employee = require("../lib/employee");

test("Can be an instance of Employee", ()=>{
    const e = new Employee();
    expect(typeof(e)).toBe("object")
})

test("Can set name via constructor", ()=>{
    const name = "Linda";
    const e = new Employee(name);
    expect(e.name).toBe(name)
})

test("Can set id via constructor", ()=>{
    const id = 100;
    const e = new Employee("Linda", id);
    expect(e.id).toBe(id)
})

test("Can get name via getName()", ()=>{
    const name = "linda";
    const e = new Employee(name)
    expect(e.getName()).toBe(name);
})

