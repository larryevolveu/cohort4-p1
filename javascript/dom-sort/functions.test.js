import funcs from './functions.js';

const arrTest = [
    { key: "lar", fname: "Larry", lname: "Shumlich", comp: "Lean Minds" },
    { key: "lor", fname: "Lorraine", lname: "Shumlich", comp: "Lean Minds" },
    { key: "jes", fname: "Jessica", lname: "Shumlich", comp: "CCI" },
    { key: "erin", fname: "Erin", lname: "Shumlich", comp: "AHS" },
];

test('Test lookup', () => {

    // console.log('Hello World');
    expect(funcs.lookup(arrTest,'lor','fname')).toBe("Lorraine");
    expect(funcs.lookup(arrTest,'lor','comp')).toBe("Lean Minds");
    expect(funcs.lookup(arrTest,'jes','fname')).toBe("Jessica");
    expect(funcs.lookup(arrTest,'jxxes','fnaxxme')).toBe("");
   
});

test('Test createCard', () => {
    const div = funcs.createCard(arrTest[1]);
    expect(div.nodeName).toBe('DIV');
    expect(div.getAttribute('key')).toBe(arrTest[1].key);
});


test('Test createPeople', () => {

    const div = document.createElement('div');
    funcs.createAllCards(div, arrTest);
    expect(div.children.length).toBe(arrTest.length);

    funcs.createAllCards(div, arrTest);
    expect(div.children.length).toBe(arrTest.length);

    // expect(div.getAttribute('key')).toBe(arrTest[1].key);
});