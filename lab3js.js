"use strict"

var newT = document.createElement('t');
let fillData = () => {
	let value = document.getElementById("polecenie").value;
	if(value === ""){
		return
	}
    var newP = document.createElement('p');
	newP.innerHTML = value;
	newP.onclick = function () {
	if(this.style.color === 'gray'){
		this.removeChild(newT);
		this.style.color = 'black';
		this.style.setProperty("text-decoration", "none");
    } else {
		var today = new Date();
		newT.innerHTML = ' '+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		this.appendChild(newT);
		this.style.color = 'gray';
		this.style.setProperty("text-decoration", "line-through");
    }
	};
	var table = document.getElementById('ToDoList');
	table.appendChild(newP);
}