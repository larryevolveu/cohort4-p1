import shapes from './shapes.js'

const panel = new shapes.Drawing(401, 402);
const svg = panel.draw();

idDrawings.append(svg);

document.body.addEventListener("click", e => {
    const el = e.target;
    const todo = el.getAttribute("todo");
    const key = el.getAttribute("key");

    if (key) {
        panel.animate(key, 2, 2, 10, 10);
    }

    if(todo === "newRectangle") {
        panel.createRectangle(idx.value, idy.value);
    }

    if(todo === "newSquare") {
        panel.createSquare(idx.value, idy.value);
    }

    if(todo === "newCircle") {
        const circle = panel.createCircle(idx.value, idy.value);
    }

});
