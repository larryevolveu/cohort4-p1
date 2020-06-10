
import funcs from './pipelogic.js';


test('Our Pipe Logic', () => {
    console.log("Hello World!", funcs);
    console.log(funcs.functions.hello());
});

test('Our Pipe Class', () => {
    let pipe = new funcs.Pipe('p1',10,36,'good');
    expect(pipe.length).toBe(10);
    expect(pipe.id).toBe('p1');
});

/*

get ==> null
insert p1
get ==> what i inserted
next ==> same
next ==> same
prev ==> same
prev ==> same

insert p2
get ==> get p2
next ==> get p1
next ==> p2
next ==> p1
prev ==> p2
prev ==> p1

*/
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
