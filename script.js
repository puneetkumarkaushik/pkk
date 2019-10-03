var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	btn.setAttribute("class", "button");


	li.appendChild(span);
	li.appendChild(btn);

	// li.appendChild(document.createElement("button"))
	// li.appendChild(document.createTextNode(input.value));
	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function taskdone(event) {
	if(event.target.nodeName === 'SPAN'){
		event.target.classList.toggle("done");
	}

	if(event.target.nodeName === 'BUTTON'){
		var li = event.target.parentElement;
		ul.removeChild(li);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", taskdone);

