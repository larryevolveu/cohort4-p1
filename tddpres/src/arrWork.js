
const functions = {
    addItem(arr, item) {
        arr.push(item);
        return arr;
    },

    showArr(arr) {
        return "" + arr;
    },

    totalArr(arr) {
        return arr.reduce((p,v) => p + v, 0);
    }
}

export default functions;