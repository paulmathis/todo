window.onload = function(){
    
   //Show task text input from button click
    $("#addTaskButton").onclick = toggleFooter;
     
    //Take text input value and add as a new task
    $("#addTaskInput").addEventListener("keydown", function(e){
        if (event.keyCode == 13) {        
            if (this.value != "") {
                addTask(this.value);
            }
            this.value = "";
            toggleFooter();

        }
    });   
};

//Add Task to List
function addTask(val) {
    var taskBar=document.createElement("div");
    taskBar.classList.add("task", "bar");
    var newTask = $("#tasks").appendChild(taskBar);
    newTask.innerHTML = "<div class='circle' onclick='addCheck(this)'>\
                            <i class='fa fa-check check hidden' aria-hidden='true'></i>\
                        </div>\
                        <span>"+val+"</span>\
                        <div class='close' onclick='removeParent(this)'>x</div>";
};

//Add Check Mark
function addCheck(ele) {
    var checkMark = ele.querySelector("i");
    checkMark.classList.toggle("hidden");
};

//Remove Parrent Element   
function removeParent(ele) {
    ele.parentElement.remove();
};

//jquery like selector
function $(selector){
    return document.querySelector(selector);
};

//First argument is the class you want to toggle, then as many selectors that you want to affect
function toggleClass(className) {
    for (var i=1; i<arguments.length; i++) {
        $(arguments[i]).classList.toggle(className);
    }
};

//Toggle footer elmenet to be hidden or unhidden
function toggleFooter() {
    toggleClass("hidden", "#addTaskButton", "#addTaskInput", "#showAll", "#showComplete", "#showIncomplete");
};
