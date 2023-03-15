let tasks = document.querySelectorAll('.todo-list__task');
let yearField = document.querySelector('.js-set-year');
let today = new Date(); 
let year = today.getFullYear();

function toggleChekcTask(task){
    task.classList.toggle('checked');
}

tasks.forEach(loopTask => {
    loopTask.addEventListener('click', ()=> toggleChekcTask(loopTask));
})
yearField.innerText = year;
