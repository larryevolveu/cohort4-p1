
/*

pipe id = insert (length, diameter, quality) 
get
next
prev
remove

*/

const functions = {
    hello() {
        return "Hello World";
    }
}

class PipeLine {
    constructor() {
        this.current = null;
        this.count = 0;
    }

    get() {
        return this.current;
    }

    insert(length, diameter, quality) {
        this.count++;
        const pipe = new Pipe('p' + this.count, length, diameter, quality);
        
        if (this.current) { 

            pipe.nextPipe = this.current.nextPipe;
            pipe.nextPipe.prevPipe = pipe;

            this.current.nextPipe = pipe;
            pipe.prevPipe = this.current;

            this.current = pipe;
        } else {
            pipe.nextPipe = pipe;
            pipe.prevPipe = pipe;
            this.current = pipe;
        }
    }

    next() {
        if (this.current) {
            this.current = this.current.nextPipe;
        }
        return this.current;
    }
    prev() {
        if (this.current) {
            this.current = this.current.prevPipe;
        }
        return this.current;
    }
}

class Pipe {
    constructor(id, length, diameter, quality) {
        this.id = id;
        this.length = length;
        this.diameter = diameter;
        this.quality = quality;
    }
}

export default {functions, Pipe, PipeLine};