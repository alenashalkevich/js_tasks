function createHolder(number) {
    var o = {
        value: number
    }
    o.setValue = function (parameter) {
        o.value = parameter;
    };
    o.getValue = function () {
        console.log(o.value);
        return o.value;
    }
    return o;
}

var obj = createHolder(5);
obj.getValue(); // returns 5
obj.setValue(2);
obj.getValue(); // returns 2
obj.setValue(3);
obj.getValue(); // returns 3
