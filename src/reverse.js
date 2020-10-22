let reverse = function (arr) {
    let newArr = [],
    i = arr.length;
    while (i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

const result = reverse([1, 2, 3, 4]) //  [4,3,2,1]
