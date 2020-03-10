
console.log(idButton);

idButton.addEventListener("click", e => {
    console.log("You Clicked, at your command");

    const div = document.createElement("div");
    div.className = "clCard";
    div.appendChild(document.createTextNode("This has been inserted"));

    idStuff2.insertAdjacentElement("afterend", div);


})

console.log(idStuff2);



