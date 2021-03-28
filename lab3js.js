"use strict"

    let fillData = () => {
		let value = document.getElementById("polecenie").value;
		if(value === ""){
			return
		}
        let ele = document.getElementById('ToDoList');
        ele.innerHTML += value;
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