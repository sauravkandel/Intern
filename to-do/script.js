document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Enter Task Name !")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">Delete</i>
                </button>
            </div>
        `;

         // Store the task on local storage
         var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
         tasks.push(document.querySelector('#newtask input').value);
         localStorage.setItem('tasks', JSON.stringify(tasks));

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();

        // Remove the task from local storage
        var taskName = this.parentNode.querySelector('#taskname').textContent;
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(tasks.indexOf(taskName), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
    }
}
