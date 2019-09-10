function addNewItem() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    if (document.getElementById("input").placeholder == "Hello. What is your name?") {
        var userName = document.getElementById("input").value;
        if (userName == ""){
        } else {
        document.getElementById("input").value = "";
        document.getElementById("input").placeholder = "What do you want to do today, " + userName + "?";}
    } else {
    var userInput = document.getElementById("input").value;
    if (userInput == ""){
    } else {
    li.appendChild(document.createTextNode(userInput));
    ul.prepend(li);
    document.getElementById("input").value = ""; }
    li.onclick = removeItem;
}
}

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }