//
// npm test -- -t mort
//
import mortfunc from './mortgage.js';

test('Test the plumbing', () => {
    console.log("Test the unit test plumbing");
    mortfunc.play();
});

test('Test the mortgage calculation', () => {
    let result = mortfunc.calcLoan(1000, 1, 1);
    expect(result.monthly).toBe(83.79);
    expect(result.total).toBe(1005.42);
    expect(result.interest).toBe(5.42);

    result = mortfunc.calcLoan(1000, 10, 1);
    expect(result.monthly).toBe(87.92);
    expect(result.total).toBe(1054.99);
    expect(result.interest).toBe(54.99);

    result = mortfunc.calcLoan(1000, 10, 10);
    expect(result.monthly).toBe(13.22);
    expect(result.total).toBe(1585.81);
    expect(result.interest).toBe(585.81);

    result = mortfunc.calcLoan('', '', '');
    expect(result.monthly).toBe('');
    expect(result.total).toBe('');
    expect(result.interest).toBe('');

});

test('Test the round function', () => {
    expect(mortfunc.round(123.1234)).toBe(123.12);
    expect(mortfunc.round(1234.2345)).toBe(1234.23);
});

