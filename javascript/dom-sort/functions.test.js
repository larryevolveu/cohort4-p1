import funcs from './functions.js';

const arrTest = [
    { key: "lar", fname: "Larry", lname: "Shumlich", comp: "Lean Minds" },
    { key: "lor", fname: "Lorraine", lname: "Shumlich", comp: "Lean Minds" },
    { key: "jes", fname: "Jessica", lname: "Shumlich", comp: "CCI" },
    { key: "erin", fname: "Erin", lname: "Shumlich", comp: "AHS" },
];

test('Test plumbing', () => {

    // console.log('Hello World');
    expect(funcs.lookup(arrTest,'lor','fname')).toBe("Lorraine");
    expect(funcs.lookup(arrTest,'lor','comp')).toBe("Lean Minds");
    expect(funcs.lookup(arrTest,'jes','fname')).toBe("Jessica");
    expect(funcs.lookup(arrTest,'jxxes','fnaxxme')).toBe("");
   
});