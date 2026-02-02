const input = document.querySelector(".inp1");
const addbtn = document.querySelector(".btn1");
const tasklist = document.querySelector(".tasklist ul");
const completedList = document.querySelector(".completed ul");

addbtn.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        tasklist.appendChild(li);
        input.value = "";

        const completebtn = document.createElement("button");
        completebtn.textContent = "Task Completed";
        completebtn.classList.add("complete-btn");

        completebtn.addEventListener("click", function () {
            tasklist.removeChild(li);
            completedList.appendChild(li);
            li.removeChild(completebtn);
       });

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete Task";
        deletebtn.classList.add("delete-btn");
        

        deletebtn.addEventListener("click", function () {
            tasklist.removeChild(li);
        });

        li.appendChild(completebtn);
        li.appendChild(deletebtn);
        taskList.appendChild(li);
        
    }

});



