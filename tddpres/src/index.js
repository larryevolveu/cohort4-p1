import arrWork from "./arrWork.js";

const arr = [];

document.body.addEventListener("click", (e) => {

    const cmd = e.target.textContent;
    if (cmd === 'Add') {
        arrWork.addItem(arr, idNumber.value);
    } else if (cmd === 'Show') {
        idMessage.textContent = arrWork.showArr(arr);
    } else if (cmd === 'Total') {
        idMessage.textContent = arrWork.totalArr(arr);
    }


})