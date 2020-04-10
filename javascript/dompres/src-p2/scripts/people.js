const domFuncs = {

    createCard(name, key) {
        const div = document.createElement("div");
        const txt = document.createTextNode(name);
        div.setAttribute("myKey", key);
        div.className = "clBox";
        div.append(txt);
        return div;
    }, 

    createCardFromArray(group, arr) {
        arr.forEach(item => {
            // console.log(item);
            const div = domFuncs.createCard(item.name,item.key);
            group.append(div);
        })
        return group;
    }
}

export default domFuncs;