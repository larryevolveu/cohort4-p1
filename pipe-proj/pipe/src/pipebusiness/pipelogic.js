
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
        const id = 'p' + this.count;
        const pipe = new Pipe(id, length, diameter, quality);
        
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
        return id;
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

    find(id) {
        if (!this.current) {
            return false;
        }
        const startid = this.current.id;
        // console.log(this.current.id);
        
        while (this.current.id !== id) {
            this.next();
            // console.log(this.current.id);
            // we didn't find it
            if (startid === this.current.id) {
                return false;
            }
        }
        return true;
    }

    /*
    Linked lists are notoriously hard to save and load from
    persistent storage. This is because pointers can not be
    represented easily. What this logic does is move the linked list
    to an object and then turns the object into a string.
    */
    toJSON() {
        if (!this.current) {
            return "";
        }
        const startid = this.current.id;
        const obj = {};
        do {
            const c = this.current;
            obj[c.id] = {id:c.id, length:c.length, diameter:c.diameter, quality:c.quality, nextid: c.nextPipe.id, previd: c.prevPipe.id};

            this.next();
        } while (this.current.id !== startid);

        return JSON.stringify(obj);
    }

    /*
    Read to description for the toJSON function. This is turning
    and object into a linked list.
    */
    loadFromJSON(s) {
        const obj = JSON.parse(s);

        // create a pipe object of each pojo object
        for (let id in obj) {
            const p = obj[id];
            const pipe = new Pipe(p.id, p.length, p.diameter, p.quality);
            p.pipe = pipe;
        }

        // link each object to the next and prev oject
        for (let id in obj) {
            const p = obj[id];
            // console.log(p);
            p.pipe.nextPipe = obj[p.nextid].pipe;
            p.pipe.prevPipe = obj[p.previd].pipe;
            // console.log(p.pipe.id, p.pipe.prevPipe.id, p.pipe.nextPipe.id);
        }

        const keys = Object.keys(obj);
        // console.log(keys[0]);
        this.current = obj[keys[0]].pipe;

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