
import funcs from './pipelogic.js';


test('Our Plumbing', () => {
    console.log("Hello World!", funcs);
    console.log(funcs.functions.hello());
});

test('Our Pipe Class', () => {
    let pipe = new funcs.Pipe('p1',10,36,'good');
    expect(pipe.length).toBe(10);
    expect(pipe.id).toBe('p1');
});

test('Our PipeLine Class', () => {
    const pipeLine = new funcs.PipeLine();
    expect(pipeLine.get()).toBeNull();

    let pipe;
    pipeLine.insert(10, 36, 'good');
    expect(pipeLine.get().id).toBe('p1');

    expect(pipeLine.next().id).toBe('p1');
    expect(pipeLine.next().id).toBe('p1');

    expect(pipeLine.prev().id).toBe('p1');
    expect(pipeLine.prev().id).toBe('p1');

    pipeLine.insert(10, 36, 'good');
    expect(pipeLine.get().id).toBe('p2');

    expect(pipeLine.next().id).toBe('p1');
    expect(pipeLine.next().id).toBe('p2');
    expect(pipeLine.next().id).toBe('p1');

    expect(pipeLine.prev().id).toBe('p2');
    expect(pipeLine.prev().id).toBe('p1');
    expect(pipeLine.prev().id).toBe('p2');

    pipeLine.insert(10, 36, 'good');
    expect(pipeLine.get().id).toBe('p3');
    expect(pipeLine.next().id).toBe('p1');
    expect(pipeLine.next().id).toBe('p2');
    expect(pipeLine.next().id).toBe('p3');
    expect(pipeLine.next().id).toBe('p1');

});


test('Our PipeLine Class save and load', () => {
    const pipeLine = new funcs.PipeLine();
    const startKey = pipeLine.insert(1, 1, 'a');
    pipeLine.insert(2, 2, 'b');
    pipeLine.insert(3, 3, 'c');
    pipeLine.prev();
    pipeLine.insert(2.2, 2.2, 'b.1');
    
    pipeLine.find(startKey);

    expect(pipeLine.get().id).toBe('p1');
    expect(pipeLine.get().quality).toBe('a');

    const jsonValue = pipeLine.toJSON();
    // console.log(jsonValue);
    
    const pl2 = new funcs.PipeLine();
    pl2.loadFromJSON(jsonValue);
    pl2.find(startKey);
    expect(pl2.get().id).toBe('p1');
    expect(pl2.get().quality).toBe('a');
    expect(pl2.next().quality).toBe('b');
    expect(pl2.next().quality).toBe('b.1');
    expect(pl2.next().quality).toBe('c');
    expect(pl2.next().quality).toBe('a');
});
