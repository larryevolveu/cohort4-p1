
global.fetch = require('node-fetch');

import commFuncs from './communicate.js';
import pipeFuncs from '../pipebusiness/pipelogic.js';


test('Our Plumbing', () => {
    console.log("Hello World!");
    // console.log(funcs.functions.hello());
});

test('test communicate functions', async () => {
    const pipeLine = new pipeFuncs.PipeLine();
    const name = 'from react 1 unit test';
    pipeLine.insert(1,1,'a');
    pipeLine.insert(2,2,'b');
    pipeLine.insert(3,3,'c');
    const data = pipeLine.toJSON();
    // console.log(data);
    const resp = await commFuncs.saveProject(0, name, data);
    const id = resp.id
    // console.log('-------id should be ------:', resp, resp.id);

    const pl2 = new pipeFuncs.PipeLine();
    const loaddata = await commFuncs.loadProject(resp.id);
    // console.log(loaddata);
    
    pl2.loadFromJSON(loaddata);
    pl2.find('p1');
    expect(pl2.get().id).toBe('p1');
    expect(pl2.get().quality).toBe('a');
    expect(pl2.next().quality).toBe('b');
    expect(pl2.next().quality).toBe('c');
    expect(pl2.next().quality).toBe('a');

    await commFuncs.saveProject(id, "Changed Name", data);
  
})