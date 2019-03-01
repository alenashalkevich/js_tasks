var controller = {
    processNumber: function (string) {
        var arrayNum = [];
        var arrayString = string.split(" ");
        for (var i = 0; i < arrayString.length; i++) {
            arrayNum[i] = arrayString[i].length;
        }
        arrayNum.sort(compareNumbers);
        var min = arrayNum[0];
        alert(min);
        view.displayMessage(min);

        function compareNumbers(num1, num2) {
            if (num1 > num2) {
                return 1;
            } else if (num1 === num2) {
                return 0;
            } else {
                return -1;
            }
        }
    }
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
    var stringInput = document.getElementById("stringInput");
    var string = stringInput.value;

    controller.processNumber(string);
    stringInput.value = "";
}
window.onload = init;

