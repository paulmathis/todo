window.onload = function(){
    //variable Assigning
    var addTaskButton = document.getElementById("addTaskButton");
    var addTaskInput = document.getElementById("addTaskInput");

    //Show task text input from button click
    addTaskButton.onclick = function() {
        addTaskInput.classList.toggle("hidden");
        this.classList.toggle("hidden");
    };
     
    //Take text input value and add as a new task
    addTaskInput.addEventListener("keydown", function(e){
        if (event.keyCode == 13) {        
            if (this.value != "") {
                addTask(this.value);
            }
            this.value = "";
            this.classList.toggle("hidden")
            addTaskButton.classList.toggle("hidden");
        }
    });   
};

//Add Task to List
function addTask(val) {
    var tasks = document.getElementById("tasks");
    var taskBar=document.createElement("div");
    taskBar.classList.add("task", "bar");
    var newTask = tasks.appendChild(taskBar);
    newTask.innerHTML = "<div class='circle' onclick='addCheck(this)'>\
                            <i class='fa fa-check check hidden' aria-hidden='true'></i>\
                        </div>\
                        <span>"+val+"</span>\
                        <div class='close' onclick='removeParent(this)'>x</div>";
}

//Add Check Mark
function addCheck(ele) {
    var checkMark = ele.querySelector("i");
    checkMark.classList.toggle("hidden");
}

//Remove Parrent Element   
function removeParent(ele) {
    ele.parentElement.remove();
};


