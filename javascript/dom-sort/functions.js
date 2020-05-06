
const functions = {

    lookup(array, key, name) {

        for (let i in array) {
            if (array[i].key === key) {
                return array[i][name];
            }
        }
        return '';
    },

    createCard(person) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(person.fname));
        div.className = 'clCard';
        div.setAttribute('key', person.key);
        const button = document.createElement('button');
        button.appendChild(document.createTextNode("do some stuff"));
        button.setAttribute('todo', 'addafter');
        div.appendChild(button);
        
        return div;
    },

    createAllCards(div, array) {

        while(div.firstChild) {
            div.firstChild.remove();
        }

        array.forEach(p => {
            const card = functions.createCard(p);
            div.appendChild(card);
            // console.log(p);
        });
    }
};

export default functions;