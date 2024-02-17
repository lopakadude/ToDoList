const checkListSection = document.querySelector('.checklists');
const checkLists = checkListSection.querySelectorAll('.checklists__checklist');
const buttonAddCheckList = document.querySelector('.checklists__add');

function renderCheckList(checkList) {
	const taskList = checkList.querySelector('.checklists__task-list');
	const buttonAddTask = checkList.querySelector('.checklists__add-task');
	const buttonDeleteCheckList = checkList.querySelector('.checklists__delete');
	const buttonEditTitle = checkList.querySelector('.checklists__edit-title');
	const titleOfCheckList = checkList.querySelector('.checklists__subtitle');
	const iconEdit = checkList.querySelector('.checklists__edit-title');

	function renderTask(task) {
		const buttonDeleteTask = task.querySelector('.checklists__task-delete');
		const checkBox = task.querySelector('.checklists__task-check');
		const taskName = task.querySelector('.checklists__task-name');

		buttonDeleteTask.addEventListener('click', () => {
			console.log('ok');
			task.remove()
		})

		checkBox.addEventListener('click', () => {
			if (checkBox.checked) {
				taskName.classList.add('checklists__task-name_checked')
			} else {
				taskName.classList.remove('checklists__task-name_checked')
			}
		})
	}

	const tasks = taskList.querySelectorAll('.checklists__task');
	tasks.forEach((task) => {
		renderTask(task);
	})


	buttonDeleteCheckList.addEventListener('click', () => {
		checkList.remove()
	})

	buttonAddTask.addEventListener('click', () => {
		const taskList = checkList.querySelector('.checklists__task-list');
		const newTask = document.createElement('li');
		newTask.className = 'checklists__task';
		newTask.innerHTML = `
			<input type="checkbox" class="checklists__task-check">
			<input class="checklists__task-name" placeholder='пункт чек-листа' type='text'>
			<button class="checklists__task-delete"></button>
			`
		taskList.append(newTask);
		renderTask(newTask);
	});

	buttonEditTitle.addEventListener('click', () => {
		if (titleOfCheckList.readOnly) {
			titleOfCheckList.readOnly = false;
			titleOfCheckList.placeholder = 'Введите название чек-листа';
			iconEdit.classList.add('checklists__confirm-title')
		} else {
			titleOfCheckList.readOnly = true;
			titleOfCheckList.placeholder = 'Нажмите на кнопку справа';
			iconEdit.classList.remove('checklists__confirm-title')
		}
	})
}

checkLists.forEach((checkList) => {
	renderCheckList(checkList);
})

buttonAddCheckList.addEventListener('click', () => {
	const newCheckList = document.createElement('div');
	newCheckList.className = 'checklists__checklist';
	newCheckList.innerHTML = `
			<div class="checklists__name">
				<input 
					class="checklists__subtitle"
					placeholder='Нажмите на кнопку справа'
					readonly
					type='text'>
				<button class="checklists__edit-title"></button>
			</div>
			<button class="checklists__delete">Удалить чек-лист</button>
			<ul class="checklists__task-list">
				<li class="checklists__task">
					<input type="checkbox" class="checklists__task-check">
					<input 
					class="checklists__task-name"
					placeholder='пункт чек-листа'
					type='text'>
					<button class="checklists__task-delete"></button>
				</li>
			</ul>
			<button class="checklists__add-task">+ добавить пункт</button>
			`
	checkListSection.append(newCheckList);
	renderCheckList(newCheckList);
})

