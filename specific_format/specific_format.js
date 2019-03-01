var controller = {
    processNumber: function (number) {
        var stats = "";
        for (var i = 1; i <= number; i++) {
            stats += i + " sheep...";
        }
        alert(stats);
        view.displayMessage(stats);
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
        var numberInput = document.getElementById("numberInput");
        var number = numberInput.value;

        controller.processNumber(number);
        numberInput.value = "";
    }
window.onload = init;
