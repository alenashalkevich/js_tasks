var controller = {
    processNumber: function (number) {
        if (number > 30 || number < 0) {
            alert("Numbers must be in range from 0 to 30");
        }
        else {
            createRectangle(number);
        }
    }
}
function createRectangle(rectNum) {
    var offset = 5;
    var width = 15;
    var height = 10;
    var x = 10;
    var y = 10;
    var c=document.getElementById("test");
    var ctx=c.getContext("2d");

    for (var i = 0; i < rectNum; i++){
        ctx.fillStyle = randColor();
        ctx.fillRect(x, y, width, height);
        for(var j = 0; j < rectNum-1; j++){
            ctx.fillStyle = randColor();
            ctx.fillRect(x+=width+offset, y, width, height);
        }
        y+=height+offset;
        x=10;
    }
}
function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }}

function init() {
    var sendButton = document.getElementById("sendButton");
    sendButton.onclick = handleSendButton;
}
function handleSendButton() {
    var numberInput = document.getElementById("numberInput");
    var number = numberInput.value;

    controller.processNumber(number);
    numberInput.value = "";
}
window.onload = init;
