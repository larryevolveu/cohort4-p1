
// console.log("Hello from index");

// console.log(idDomEx);

// idDomEx.addEventListener("click", e => {
//     console.log("In EventListener");
// })

// idDomEx.addEventListener("mouseover", myEventFunc);
// idDomEx.addEventListener("click", myEventFunc);
// idDomEx.addEventListener("mouseout", myEventFunc);

idBox1.addEventListener("mouseover", myEventFunc);

function myEventFunc(e) {
    // console.log("In EventListener",e, e.type, e.target, e.target.tagName, e.target.textContent);
    const el = e.target;
    const myAttr = el.getAttribute("myAttr");
    // console.log(myAttr);
    
    if (myAttr === 'changeMe') {
        e.target.textContent = e.target.textContent + ' stuff'
    }
}

/*


        while (idWherePeopleGo.firstChild) {
            idWherePeopleGo.removeChild(idWherePeopleGo.firstChild);
        }


*/