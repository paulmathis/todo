window.onload = function(){
    var addTaskButton = document.getElementById("addTaskButton");
    var addTaskInput = document.getElementById("addTaskInput");

    addTaskButton.onclick = function() {
        addTaskInput.classList.toggle("hidden");
        this.classList.toggle("hidden");
    };


};