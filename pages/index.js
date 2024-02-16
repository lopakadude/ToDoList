const checkLists = document.querySelector('.checklists');
const checkList = checkLists.querySelector('.checklists__checklist');
const subtitleOfChecklists = checkLists.querySelectorAll('.checklists__subtitle');
const subtitleOfChecklist = checkList.querySelector('.checklists__subtitle');
const buttonEditSubtitleOfChecklist = checkList.querySelector('.checklists__edit-title');
const tasks = checkList.querySelector('.checklists__tasks');
const task = tasks.querySelector('.checklists__task');
const buttonAddCheckList = document.querySelector('.checklists__add');
const buttonAddTask = checkList.querySelector('.checklists__add-task');
const buttonDeleteTask = task.querySelector('.checklists__delete-task');


buttonAddTask.addEventListener('click', () => {
	const newTask = document.createElement('li');
	newTask.className = 'checklists__task';
	newTask.innerHTML = `
			<input type="checkbox" class="checklists__task-check">
					<p class="checklists__task-name">Пункт 1</p>
					<button class="checklists__delete-task"></button>
			`
	tasks.insertBefore(newTask, buttonDeleteTask)
});

buttonDeleteTask.addEventListener('click', () => {
task.remove()
})

buttonAddCheckList.addEventListener('click', () => {
	const newCheckList = document.createElement('div');
	newCheckList.className = 'checklists__checklist';
	newCheckList.innerHTML = `
			<div class="checklists__name">
				<input class="checklists__subtitle" value="Чек-лист" readonly></input>
				<button class="checklists__edit-title"></button>
			</div>
			<button class="checklists__delete">Удалить чек-лист</button>
			<ul class="checklists__tasks">
				<li class="checklists__task">
					<input type="checkbox" class="checklists__task-check">
					<p class="checklists__task-name">Пункт 1</p>
					<button class="checklists__delete-task"></button>
				</li>
			</ul>
			<button class="checklists__add-task">+ добавить пункт</button>
			`
checkLists.append(newCheckList);
})

buttonEditSubtitleOfChecklist.addEventListener('click', () => {
	subtitleOfChecklist.readOnly = false;
});

buttonEditSubtitleOfChecklist.addEventListener('keydown', () => {
	subtitleOfChecklist.readOnly = true;
})