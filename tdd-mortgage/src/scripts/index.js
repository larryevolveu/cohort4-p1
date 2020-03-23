import mortfunc from './mortgage.js';


// console.log("Hello World");


document.loandata.calc.addEventListener("click", e => {
    // console.log("Inside click event listener.");
    calc();
});

document.loandata.addEventListener("change", e => {
    // console.log("Inside loandata change event listener.");
    calc();
});


function calc() {
    // console.log("We are in the calc function.");
    console.log(document.loandata.principal.value);

    const result = mortfunc.calcLoan(
        document.loandata.principal.value, 
        document.loandata.interest.value,
        document.loandata.years.value);

    // console.log(result);

    document.loandata.payment.value = result.monthly;
    document.loandata.total.value = result.total;
    document.loandata.totalinterest.value = result.interest;
    
}
