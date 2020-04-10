//
// import domfuncs from './domfunc'
//

test('Does the dom functions work?', () => {
    const parent = document.createElement('div');

    let div = document.createElement('div');
    let txtstuff = document.createTextNode("First");
    div.appendChild(txtstuff);
    parent.append(div);

    div = document.createElement('div');
    txtstuff = document.createTextNode("Second");
    div.appendChild(txtstuff);
    parent.append(div);

    div = document.createElement('div');
    txtstuff = document.createTextNode("One.One");
    div.appendChild(txtstuff);

    parent.children[0].after(div);



    // div.appendChild(txtstuff);




    console.log(parent.children.length);
    console.log(parent.children[0]);
    console.log(parent.children[0].textContent);
    console.log(parent.children[1]);
    console.log(parent.children[1].textContent);
    console.log(parent.children[2]);
    console.log(parent.children[2].textContent);

    document.body.append(div);
    
    
    // console.log(div.textContent);
    // console.log(div);
    // console.log(div);
    
});




// const element = domfuncs.buildCard();
// expect(element).toBeTruthy();

    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);


// const div = document.createElement('div');
// div.appendChild(document.createTextNode(text));
