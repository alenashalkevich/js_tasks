function frame(array, symbol) {
    var arrayNam = [];
    for (var i = 0; i < array.length; i++) {
        var a = array[i].length;
        arrayNam.push(a);
    }
    arrayNam.sort(compareNumbers);

    function compareNumbers(num1, num2) {
        if (num1 > num2) {
            return 1;
        } else if (num1 === num2) {
            return 0;
        } else {
            return -1;
        }
    }

    var maxLength = arrayNam[arrayNam.length - 1];
    var stringFirst = "";
    for (var i=0; i < (maxLength+4); i++) {
        stringFirst += symbol;
    }
    console.log(stringFirst);

    for (var i = 0; i < array.length; i++) {
        var nextLine = symbol + " " + array[i];
        var spacesNumber = maxLength - array[i].length + 1;
        var finalString = nextLine + spacesNumberFunc(spacesNumber) + symbol;

        function spacesNumberFunc(spaces) {
            var spacesString = "";
            for (var i = 1; i <= spaces; i++) {
                spacesString += " ";
            }
            return spacesString;
        }
        console.log(finalString);
    }
    console.log(stringFirst);
    }

frame(['Create', 'a', 'frame'], '+');