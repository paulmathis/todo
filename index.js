//jquery like selector
function $(selector){
    return document.querySelector(selector);
}
//First argument is the class you want to toggle, then as many selectors that you want to affect
function toggleClass(className) {
    for (var i=1; i<arguments.length; i++) {
        $(arguments[i]).classList.toggle(className);
    }
}

window.onload = function(){
    //Toggle footer elmenet to be hidden or unhidden
    function toggleFooter() {
        toggleClass("hidden", "#addTaskButton", "#addTaskInput", "#showAll", "#showComplete", "#showIncomplete");
    }
    //Show task input bar on click
    $("#addTaskButton").addEventListener("click", toggleFooter);

    //Take text input value and add as a new task
    function inputTask() {
        if (event.keyCode == 13) {        
            if (this.value !== "") {

                 //Add Task to List
                function addTask(val) {
                    var taskBar=document.createElement("div");
                    taskBar.classList.add("task", "bar");
                    var newTask = $("#tasks").appendChild(taskBar);
                    newTask.innerHTML = "<div class='circle' "+">\
                                            <i class='fa fa-check check hidden' aria-hidden='true'></i>\
                                        </div>\
                                        <span>"+val+"</span>\
                                        <div class='close'>x</div>";
                    var taskCircle = newTask.querySelector(".circle");
                    var taskClose = newTask.querySelector(".close");

                    //Add Check Mark
                    function addCheck(ele) {
                        var checkMark = this.querySelector("i");
                        checkMark.classList.toggle("hidden");
                        var parent = this.parentElement;
                        if ($("#showAll").classList.contains("active")) {
                            //do nothing
                        } else {
                            parent.classList.toggle("checked");
                            parent.classList.toggle("hidden");
                        }
                        
                    }
                    taskCircle.addEventListener("click", addCheck);

                    //Remove Parrent Element   
                    function removeParent() {
                        this.parentElement.remove();
                    }
                    taskClose.addEventListener("click", removeParent);
                }
                addTask(this.value);
            }
            this.value = "";
            toggleFooter();
        }
    }

    $("#addTaskInput").addEventListener("keydown", inputTask);

    //Toggle view between all tasks, completed tasks, and incomplete tasks
    function show(pick) {
        var tasks = document.querySelectorAll(".task");
        for (var i=0; i<tasks.length; i++) {
            var task = tasks[i];
            switch (pick) {
                case "all":
                    task.classList.remove("hidden");
                    $("#showAll").classList.add("active");
                    $("#showIncomplete").classList.remove("active");
                    $("#showComplete").classList.remove("active");
                    break;
                case "complete":
                    $("#showAll").classList.remove("active");
                    $("#showIncomplete").classList.remove("active");
                    $("#showComplete").classList.add("active");
                    if(task.classList.contains("checked")){
                        task.classList.remove("hidden");
                    } else {
                        task.classList.add("hidden");
                    }
                    break;
                case "incomplete":
                    $("#showAll").classList.remove("active");
                    $("#showIncomplete").classList.add("active");
                    $("#showComplete").classList.remove("active");
                    if(!task.classList.contains("checked")){
                        task.classList.remove("hidden");
                    } else {
                        task.classList.add("hidden");
                    }
                    break;
            }        
        } 
    }
    //Show all on click
    $("#showAll").addEventListener("click", function() {
        show("all");
    });
    //Show all on click
    $("#showComplete").addEventListener("click", function() {
        show("complete");
    });
    //Show incomplete on click
    $("#showIncomplete").addEventListener("click", function() {
        show("incomplete");
    });

    function searchTasks() {
        var search = this.value.toUpperCase();
        var tasks = $("#tasks").querySelectorAll("span");
        for(var i=0; i<tasks.length; i++) {
            var compare = tasks[i].innerHTML.toUpperCase();
            console.log()
            if (search.substring(0, search.length) == compare.substring(0, search.length)) {
                tasks[i].parentElement.classList.remove("hidden");
            } else if (this.value == "") {
                tasks[i].parentElement.classList.remove("hidden");
            }else {
                tasks[i].parentElement.classList.add("hidden");
            }
        }
    }
    $("#search").addEventListener("keyup", searchTasks);
};














