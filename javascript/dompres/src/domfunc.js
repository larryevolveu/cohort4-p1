
const functions = {

    buildCard (text) {

        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));

        const add = document.createElement('button');
        add.appendChild(document.createTextNode("Add"));
        div.appendChild(add);

        const before = document.createElement('button');
        before.appendChild(document.createTextNode("Before"));
        div.appendChild(before);

        return div;
    },

    addBefore(node, text) {
        // console.log(node);
        // console.log(node.parentElement);
        
        
        const div = functions.buildCard(text);
        node.parentElement.insertBefore(div,node);
    }
    
};

export default functions;
