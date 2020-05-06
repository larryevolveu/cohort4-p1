
import funcs from './functions.js';

console.log('Hello World');

const arrTest = [
    { key: "lar", fname: "Larry", lname: "Shumlich", comp: "Lean Minds" },
    { key: "lor", fname: "Lorraine", lname: "Shumlich", comp: "Lean Minds" },
    { key: "jes", fname: "Jessica", lname: "Shumlich", comp: "CCI" },
    { key: "erin", fname: "Erin", lname: "Shumlich", comp: "AHS" },
];

document.addEventListener('click',myEventListener);

let lastKey = '';

function myEventListener(e) {

    const el = (e.target);
    const k = el.getAttribute('key');
    const td = el.getAttribute('todo');

    if(k) {
        console.log(k);
        lastKey = k;
    }

    if(td === 'whatCompany') {
        // console.log("Well Do Something:", td);
        console.log('The Last key was:', lastKey);
        console.log(funcs.lookup(arrTest,lastKey,'comp'));
    }

    if(td === 'addPerson') {
        // console.log("Well Do Something:", td);
        console.log('Lets add the people:');

        funcs.createAllCards(idGroup, arrTest);
    }
    
    if(td === 'addafter') {
        console.log('you pressed add after');
        console.log(el);        
        console.log(el.parentElement);
    }

}
