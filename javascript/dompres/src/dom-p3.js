const domFuncs = {
    play() {
        console.log("Hello from domFunc");
    },

    addDivSimple(group, text) {
        const div = document.createElement('div');
        const txt = document.createTextNode(text);
        div.append(txt);
        group.append(div);
        return group;
    },

    addDivComplex(group, text) {
        const div = document.createElement('div');
        div.append(document.createTextNode(text));
        group.append(div);
        return group;
    },

    addDivComplexxxx(group, text) {
        const div = document.createElement('div');
        div.append(document.createTextNode(text));
        group.append(div);
        return group;
    }
}

export default domFuncs;