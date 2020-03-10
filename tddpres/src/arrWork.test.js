
import arrWork from "./arrWork.js";

test('Does the array addItem work?', () => {
    const arr = [];
    expect(arr.length).toBe(0);
    const r = arrWork.addItem(arr, 5);
    expect(r.length).toBe(1);
    expect(r[0]).toBe(5);
    const r2 = arrWork.addItem(arr, 6);
    expect(r.length).toBe(2);
    expect(r[1]).toBe(6);
});

test('Does the arrShow function work?', () => {
    let msg = arrWork.showArr([5,6]);
    expect(msg).toBe("5,6");
    msg = arrWork.showArr([5,6,7]);
    expect(msg).toBe("5,6,7");
});


test('Does the arrTotal function work?', () => {
    expect(arrWork.totalArr([5,6])).toBe(11);
    expect(arrWork.totalArr([5,6,7])).toBe(18);
    expect(arrWork.totalArr([1,1,1,1,1,1,1,1,1])).toBe(9);
    expect(arrWork.totalArr(['5','6'])).toBe(11);
});


