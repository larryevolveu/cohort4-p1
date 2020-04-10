//
// npm test dom-p3 -- -t plumb
//
import domP3 from './dom-p3'

test('Does the plumbing work?', () => {
    
    // console.log("Hello World from dompp3");
    let div, txtnode;
    const group = document.createElement('div');

    div = document.createElement('div');
    txtnode = document.createTextNode("First");
    div.append(txtnode);

    group.append(div);

    console.log(group.children.length);
    console.log(group.children[0].textContent);

});



test('Does the addDiv work?', () => {
    const group = document.createElement('div');
    const txt = "First Node"
    // domP3.addDivSimple(group, txt);
    domP3.addDivComplex(group, txt);
    expect(group.children.length).toBe(1);
    expect(group.children[0].textContent).toBe(txt);

});
