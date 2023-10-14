document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("inputtask");
    const ul = document.getElementById("items");
    
    function addTask() {
	    if (input.value === '') {
	        alert("You need to enter the task!");
    	} else {
	        var li = document.createElement("li");
	        li.innerHTML = input.value;
	        ul.appendChild(li);
	        let span=document.createElement("span");
	        span.innerHTML="\u00d7";
	        li.appendChild(span);
	        input.value = ''; // Clear the input field
	        saveItems();
    	}
	}
	ul.addEventListener("click",(data)=>{
		if(data.target.tagName === "LI"){			
			data.target.innerHTML=" Task Completed";
			data.target.classList.toggle("checked")
			let span=document.createElement("span");
			span.innerHTML="\u00d7";
	        data.target.appendChild(span);
		}
		else if(data.target.tagName === "SPAN"){
			data.target.parentElement.remove();
		}
		saveItems();		
	}, false);
	function saveItems(){
		localStorage.setItem("tasks",ul.innerHTML);
	}
	function displayItems(){
		ul.innerHTML=localStorage.getItem("tasks");
	}
	displayItems();

	const addButton = document.getElementById("addButton");
	addButton.addEventListener("click", addTask);
});
  


