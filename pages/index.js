const checkListSection = document.querySelector('.checklists');
console.log(checkListSection);

const checkLists = document.querySelectorAll('.checklists__checklist');
console.log(checkLists);

// const subtitlesOfChecklists = document.querySelectorAll('.checklists__subtitle');
// console.log(subtitlesOfChecklists);

// const buttonsEditSubtitles = document.querySelectorAll('.checklists__edit-title');
// console.log(buttonsEditSubtitles);

const buttonAddCheckList = document.querySelector('.checklists__add');
console.log(buttonAddCheckList);

checkLists.forEach((checkList) => {
	const taskList = checkList.querySelector('.checklists__tasks');

	const tasks = taskList.querySelectorAll('.checklists__task');

	const buttonAddTask = checkList.querySelector('.checklists__add-task');

	const buttonDeleteCheckList = checkList.querySelector('.checklists__delete');
	console.log(buttonDeleteCheckList);


	buttonDeleteCheckList.addEventListener('click', () => {
		console.log(checkList);
		checkList.remove()
	})

	buttonAddTask.addEventListener('click', () => {
		const newTask = document.createElement('li');
		newTask.className = 'checklists__task';
		newTask.innerHTML = `
			<input type="checkbox" class="checklists__task-check">
					<p class="checklists__task-name">Пункт 1</p>
					<button class="checklists__delete-task"></button>
			`
		taskList.append(newTask)
	});

	tasks.forEach((task) => {
		const buttonDeleteTask = task.querySelector('.checklists__delete-task');
		const checkBox = task.querySelector('.checklists__task-check');
		const taskName = task.querySelector('.checklists__task-name');

		buttonDeleteTask.addEventListener('click', () => {
			console.log(task);
			task.remove()
		})

		checkBox.addEventListener('click', () => {
			if (checkBox.checked) {
				console.log('ok');
				taskName.classList.add('checklists__task-name_checked')
			} else {
				taskName.classList.remove('checklists__task-name_checked')
			}
		})
	})
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
	checkListSection.append(newCheckList);
})

// buttonEditSubtitleOfChecklist.addEventListener('click', () => {
// 	subtitleOfChecklist.readOnly = false;
// });

// buttonEditSubtitleOfChecklist.addEventListener('keydown', () => {
// 	subtitleOfChecklist.readOnly = true;
// })