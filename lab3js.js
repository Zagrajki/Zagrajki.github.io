"use strict"

    let fillData = () => {
		let value = document.getElementById("polecenie").value;
		if(value === ""){
			return
		}
        let ele = document.getElementById('ToDoList');
        //ele.innerHTML += value+'\n';
		let node = document.createTextNode (value);
        ele.appendChild(node);
    }

const fun1 = () => {
	let value = document.getElementById("polecenie").value;
	if(value === ""){
		return
	}
	const newP = document.createElement("p");
	newP.innerHTML = value;
	$("#ToDoList").append(newP);
}

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
		//var newT = document.createElement('t');
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