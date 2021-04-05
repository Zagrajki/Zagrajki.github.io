"use strict"

var trash=null;
var tempP;
var tempB;
let fillData = () => {
	let value = document.getElementById("polecenie").value;
	if(value === ""){
		return
	}
    var newP = document.createElement('p');
    newP.className="p-3 mb-2 bg-warning";
    newP.style.fontFamily = "cursive";
    var newT = document.createElement('i');
	newP.innerHTML = value;
	newP.onclick = function () {
	if(this.style.color === 'gray'){
		this.removeChild(newT);
		this.style.color = 'black';
		this.style.setProperty("text-decoration", "none");
    } else {
		var today = new Date();
		newT.innerHTML = ' '+today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
		this.appendChild(newT);
		this.style.color = 'gray';
		this.style.setProperty("text-decoration", "line-through");
    }
	};
	var table = document.getElementById('ToDoList');
    var btn = $("<button>X</button>").addClass("btn btn-danger").click(function () {
    	$(".popup-overlay, .popup-content").addClass("active");
        tempP=newP;
        tempB=this;
    });
    $("#ToDoList").append(btn);
	table.appendChild(newP);
}
let koszyk = () => {
	if(trash !== null){
    var newP = trash;
	var table = $('#ToDoList');
    var btn = $("<button>X</button>").addClass("btn btn-danger").click(function () {
    	$(".popup-overlay, .popup-content").addClass("active");
        tempP=newP;
        tempB=this;
    });
    $("#ToDoList").append(btn);
	$("#ToDoList").append(newP);
    trash=null;
    }
}

$(".open").on("click", function() {
	$(".popup-overlay, .popup-content").addClass("active");
});

$(".nienie").on("click", function() {
	$(".popup-overlay, .popup-content").removeClass("active");
});

$(".taktak").click(function() {
    $(tempP).remove();
    $(tempB).remove();
	trash=tempP;
    $(".popup-overlay, .popup-content").removeClass("active");
});