// Make "stupidlogin" when clicked give message on screen
// Message onscreen = "Nice Cock"

const loginButton = document.getElementById("stupidlogin");

const message = document.createElement("p");

const messageContainer = document.getElementById("message-container");

message.innerHTML = "Nice Cock";
message.style.margin = "0px";
message.style.marginBottom = "0px";
message.style.textAlign = "center";
message.style.justifyContent = "center";
message.style.marginTop = "0px";
message.style.transition = "0.3s";
messageContainer.style.borderRadius = "6px"
let numberOfClicks = 0;

function onClick (event) {

    messageContainer.appendChild(message);
    messageContainer.style.marginBottom = "40px";
    numberOfClicks += 1;
    if(numberOfClicks != 69){
        message.innerHTML = "";
        message.innerHTML = "Nice Cock " + "(" + numberOfClicks + ')';
    } else{
        message.innerHTML = "";
        message.innerHTML = "Nice Cock " + "(" + numberOfClicks + ') ;) Nice.';
    
    }
}

loginButton.addEventListener("click", onClick);