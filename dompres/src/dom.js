
console.log(idButton);

document.body.addEventListener("click", e => {
    console.log("You Clicked, at your command");
    console.log(e.target.textContent);
    console.log(e.target.nodeName);
    console.log(e.target);

    
    

    // const div = document.createElement("div");
    // div.className = "clCard";
    // div.appendChild(document.createTextNode("This has been inserted"));

    // idStuff2.insertAdjacentElement("afterend", div);


})

console.log(idStuff2);



