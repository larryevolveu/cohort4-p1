//
// npm test -- -t whatever
//
import pfunc from './play.js';

test('Test the plumbing', () => {
    console.log("Test the unit test plumbing");
    expect(123).toBe(123);
});

test('Test to learn how arrays work.', () => {
    const arr1 = [5, 6, 7];
    expect(arr1.length).toBe(3);
    expect(arr1[1]).toBe(6);

    arr1.push(12);
    expect(arr1.length).toBe(4);
    expect(arr1[3]).toBe(12);

    arr1.unshift(15);
    expect(arr1.length).toBe(5);
    expect(arr1[0]).toBe(15);

    // for (let i = 0; i < arr1.length; i++) {
    //     console.log(i, arr1[i]);
    // }

    arr1.forEach( (val, i, ar) => {
        // console.log(val, i, ar);
    });

    // console.log(arr1);
    
    // console.log("Test the unit test plumbing");
    expect(123).toBe(123);
});


test('Test to learn how dictionaries work.', () => {

    const obj = {ab:'Alberta', sk:'Saskatchewan'};
    console.log(obj['ab']);
    obj['mn'] = "Manatoba";
    console.log(obj);

    for (let v in obj) {
        console.log(v, obj[v]);
        
    }
});

test('Test the link to play.js.', () => {
    console.log('In link test');
    const retval = pfunc.play(123);
    expect(retval[0]).toBe(123);
    
    expect(pfunc.play(234)[0]).toBe(234);
});

test('Test more complex data structures.', () => {
    console.log('complex');
    const obj1 = {
        ab:'Alberta', 
        sk:'Saskatchewan',
        city: {
            yyc: "Calgary",
            yeg: "Edmonton",
        },
        arr: [5,6,7],
    };

    // const city = {
    //     yyc: "Calgary",
    //     yeg: "Edmonton",
    // }

    // obj1["city"] = city;

    console.log(obj1["city"]["yyc"]);
   

});
