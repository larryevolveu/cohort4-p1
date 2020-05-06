
const functions = {

    lookup(array, key, name) {

        for (let i in array) {
            if (array[i].key === key) {
                return array[i][name];
            }
        }
        return '';
    },
};

export default functions;