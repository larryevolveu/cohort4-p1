function hello() {
    return "Hello";
}

class Shape {
    constructor(key, x, y) {
        this.key = key;
        this.x = Number(x);
        this.y = Number(y);
    }

    move(x, y) {
        this.x += x;
        this.y += y;
        this.updateElement();
    }

    updateElement() {

    }

    getElement(txt) {
        const shape = document.createElementNS("http://www.w3.org/2000/svg", txt);
        shape.setAttribute("class", "clShape");
        this.shape = shape;
        return shape;
    }
}

class Rectangle extends Shape {

    getElement() {
        if (this.shape) return this.shape;

        const rect = super.getElement('rect');
        this.updateElement();
        return rect;
    }

    updateElement() {
        if (this.shape) {
            this.shape.setAttribute("x", this.x);
            this.shape.setAttribute("y", this.y);
            this.shape.setAttribute("width", "100");
            this.shape.setAttribute("height", "50");
            this.shape.setAttribute("key", this.key);
        }
    }
}

class Square extends Rectangle {

    updateElement() {
        super.updateElement();
        if (this.shape) {
            this.shape.setAttribute("height", "100");
        }
    }

}

class Circle extends Shape {

    getElement() {
        if (this.shape) return this.shape;

        const rect = super.getElement('circle');
        this.updateElement();
        return rect;
    }

    updateElement() {
        if (this.shape) {
            this.shape.setAttribute("cx", this.x);
            this.shape.setAttribute("cy", this.y);
            this.shape.setAttribute("r", "20");
            this.shape.setAttribute("key", this.key);
        }
    }

}


class Drawing {
    constructor(xxxwidth, height) {
        this.width = xxxwidth;
        this.height = height;
        this.shapes = {};
        this.counter = 1;
    }

    nextKey() {
        return `k${this.counter++}`;
    }

    createRectangle(x, y) {
        const key = this.nextKey();
        const rect = new Rectangle(key, x, y);
        this.shapes[key] = rect;
        if (this.svg) {
            const el = rect.getElement();
            this.svg.append(el);
        }

        return key;
    }

    createCircle(x, y) {
        const key = this.nextKey();
        const circle = new Circle(key, x, y);
        this.shapes[key] = circle;
        if (this.svg) {
            const el = circle.getElement();
            this.svg.append(el);
        }

        return key;
    }

    createSquare(x, y) {
        const key = this.nextKey();
        const shape = new Square(key, x, y);
        this.shapes[key] = shape;
        if (this.svg) {
            const el = shape.getElement();
            this.svg.append(el);
        }

        return key;
    }

    getShape(theKey) {
        return this.shapes[theKey];
    }

    draw() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svg.setAttribute("width", this.width);
        svg.setAttribute("height", this.height);
        this.svg = svg;
        svg.setAttribute("class", "clBox");
        for (let key in this.shapes) {
            // console.log(key);
            const el = this.shapes[key].getElement();
            svg.append(el);
        }
        return svg;
    }

    move(key, x, y) {
        const shape = this.getShape(key);
        shape.move(x, y);
    }

    async animate(key, x, y, cycle = 100, duration = 10) {
        let count = 0;
        const shape = this.getShape(key);

        let timerId = setInterval(() => {
            shape.move(x, y);
            count++;
        }, cycle);

        await new Promise((resolve, reject) =>
            setTimeout(() => {
                clearInterval(timerId);
                resolve("ok");
            }, duration * 1000));

        return count;
    }
}

export default { hello, Shape, Rectangle, Square, Circle, Drawing };
