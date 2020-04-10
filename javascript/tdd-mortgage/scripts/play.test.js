
test('Test the plumbing', () => {
    console.log("Test the unit test plumbing");

    const arr1 = [5,6,7];

    expect(arr1.length).toBe(3);
    expect(arr1[1]).toBe(6);

    arr1.push(12);
    expect(arr1.length).toBe(4);
    expect(arr1[1]).toBe(6);

    for (let i = 0; i < arr1.length; i++) {
        // console.log(i,arr1[i]);
    }

    arr1.forEach((val, i, ar) => {
        // console.log(val, i, ar);
    })

    const obj = {sk:"Sask", ab:"albera"};

    console.log(obj['sk']);

    obj['mn'] = "Manitoba";
    

    for(let v in obj) {
        console.log(v);
    }
});