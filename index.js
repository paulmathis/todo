window.onload = function(){
    var addTaskButton = document.getElementById("addTaskButton");
    var addTaskInput = document.getElementById("addTaskInput");

    addTaskButton.onclick = function() {
        addTaskInput.classList.toggle("hidden");
        this.classList.toggle("hidden");
    };

    /*var taskBar = document.querySelectorAll("div.task.bar");
    console.log(taskBar);
    taskBar.onclick = function() {
        console.log("test");
    };*/
    
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

function addTask(val) {
    var tasks = document.getElementById("tasks");
    var taskBar=document.createElement("div");
    taskBar.classList.add("task", "bar");
    var newTask = tasks.appendChild(taskBar);
    newTask.innerHTML = "<div class='circle'>\
                        </div><span>"+val+"</span>\
                        <div class='close'>x</div>";
}
