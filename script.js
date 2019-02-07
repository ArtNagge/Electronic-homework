let timeTable = document.querySelector('#timeTable'),
    selectMath = document.querySelector('#selectMath'),
    selectDay = document.querySelector('#selectDay'),
    nameTask = document.querySelector('#nameTask'),
    dayList = document.querySelector('#dayList'),
    taskList = document.querySelector('#taskList'), i;

function Task() {
    this.listDay = [
        {text: ''},
        {text: 'Понедельник', class: 'timeHead'},
        {text: 'Вторник', class: 'timeHead'},
        {text: 'Среда', class: 'timeHead'},
        {text: 'Четверг', class: 'timeHead'},
        {text: 'Пятница', class: 'timeHead'},
    ];
    this.listLessons = [
        {class: 'timeStroke', startContent: '<td class="timeHead">Математика</td>'},
        {class: 'timeStroke', startContent: '<td class="timeHead">История</td>'},
        {class: 'timeStroke', startContent: '<td class="timeHead">Русский</td>'},
        {class: 'timeStroke', startContent: '<td class="timeHead">Изо</td>'},
    ];
    this.templateLesson = '<textarea onfocus="clickInput()" onblur="blurInput()" class="task"></textarea>';
}
Task.prototype.renderPointTask = function (placeRender) {
    let day = this.listDay;
    for (i=1;i<day.length; i++) {
        let tmp = document.createElement('td');
        tmp.className= 'timePoint';
        tmp.innerHTML = this.templateLesson;
        placeRender.appendChild(tmp)
    }
};
Task.prototype.renderDays = function (placeRender) {
    let day = this.listDay;
    for (let items of day) {
        let el = document.createElement('td');
        el.innerText = items.text;
        el.className = items.class;
        placeRender.appendChild(el);
    }
};
Task.prototype.renderLesson = function (placeRender) {
    let lesson = this.listLessons;
    for (let items of lesson) {
        let el = document.createElement('tr');
        el.className = items.class;
        el.innerHTML = items.startContent;
        placeRender.appendChild(el);
        this.renderPointTask(el);
    }
};
Task.prototype.addTask = function() {
    let selectValue = selectMath.value.toUpperCase(),
        valueDay = selectDay.value.toUpperCase(),
        nameValue = nameTask.value,
        timeHead = document.querySelectorAll('.timeHead');
    if (selectValue === '' || valueDay === '' || nameValue === '') {
        throw "Ошибка. Выберети предмет по какому хотите добавить задание, дату и текст";
    }else {
        for (let i = 0; i<timeHead.length; i++) {
            if (timeHead[i].innerText.toUpperCase() === valueDay) {
                let position = i+1;
                console.log(timeHead[i]);
                for (let i = 0; i<timeHead.length; i++) {
                    if (timeHead[i].innerText.toUpperCase() === selectValue) {
                        console.log(timeHead[i]);
                        let el = timeHead[i].parentElement.children[position].children[0];
                        el.value = nameValue;
                    }
                }
            }
        }
    }
};

timeTable = new Task();
timeTable.renderDays(dayList);
timeTable.renderLesson(taskList);
//
// function clickInput() {
//     console.log('кликнул');
//     this.disabled = false;
// }
// function blurInput() {
//     console.log('убрал');
//     this.disabled = true;
// }