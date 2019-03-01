function getLowerestIndex(array, num) {
        array [array.length] = num;

        array.sort(compareNumbers);
        var index = array.indexOf(num);
        console.log(index);

        function compareNumbers(num1, num2) {
            if (num1 > num2) {
                return 1;
            } else if (num1 === num2) {
                return 0;
            } else {
                return -1;
            }
        }
};
getLowerestIndex([1,2,3,4], 6)
