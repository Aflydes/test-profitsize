let tasks = document.querySelectorAll('.todo-list__task');

function toggleChekcTask(task){
    task.classList.toggle('checked');
}

tasks.forEach(loopTask => {
    loopTask.addEventListener('click', ()=> toggleChekcTask(loopTask));
})