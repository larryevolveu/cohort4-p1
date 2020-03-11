import arrdictionary from './arrdictionary.js';

// console.log('Hello world from index.js');

// console.log(idArrayAdd);

let arr = [];

idArrayAdd.addEventListener("click", e => {
    // console.log(arr,idArrayInput.value);
    
    arr = arrdictionary.arrayAdd(arr,idArrayInput.value);
    
    // console.log(arr);
    // console.log("Inside event listener.");
});

idArrayTotal.addEventListener("click", e => {
    let total = arrdictionary.arrayTotal(arr);
    // console.log(total);

});

idCodeLookup.addEventListener("click", e => {
    // console.log(idCodeInput);
    let result = arrdictionary.getCountryCapital(idCodeInput.value);
    // console.log(result);
});

idDictEntry.addEventListener("click", e => {
    let result = arrdictionary.addCountryCapital(idCountryInput.value, idCapitalInput.value);
    // console.log(result);
})


document.body.addEventListener("click", e => {
    console.log("You clicked", e.target.nodeName);
});
