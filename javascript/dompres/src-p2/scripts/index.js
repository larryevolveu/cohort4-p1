
import people from './people.js';

// console.log("Hello from Index.");

// console.log(idHeadPlay);

document.body.addEventListener("click", myEventListener);
// idHeadPlay.addEventListener("click", myEventListener);

function myEventListener(e) {
    const el = e.target;
    const whattodo = el.getAttribute("todo");
    const theKey = el.getAttribute("myKey");
    // console.log(theKey);

    // console.log("I'm in my event listener", 
    // el.textContent,
    // myAttr);
    if(theKey) {
        console.log("Do something Special to ", theKey, el);
        
    }

    if (whattodo === "addPeople") {
        // console.log(whattodo);

        const peopleList = [
            { name: "Larry", key: "p1" },
            { name: "Lorraine", key: "p2" },
            { name: "Jessica", key: "p3" },
        ];

        // console.log(idWherePeopleGo.children.length);
        // console.log(idWherePeopleGo.firstChild);

        while(idWherePeopleGo.firstChild) {
            idWherePeopleGo.removeChild(idWherePeopleGo.firstChild);
        }
        

        const pCards = people.createCardFromArray(idWherePeopleGo, peopleList);

        // document.body.append(pCards);



        // console.log("I'm in my event listener", 
        // el.textContent = el.textContent + " 123";
    }
}