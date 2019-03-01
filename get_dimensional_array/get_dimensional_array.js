function getDimensionalArray(array, num) {
    var firstArray = [];
    for (var i = 0; i < array[num]; i++) {
        firstArray.push(i);
    }
    var secondArray = [];
    for (var i = array[num]; i < array.length; i++) {
        secondArray.push(i);
    }
    var dimensionalArray = [];
    //dimensionalArray = [firstArray, secondArray];
    dimensionalArray.push(firstArray);
    dimensionalArray.push(secondArray);
    for (var i=0; i < dimensionalArray.length; i++) {
        console.log(dimensionalArray[i])
    }
};
getDimensionalArray([0, 1, 2, 3, 4, 5], 3)