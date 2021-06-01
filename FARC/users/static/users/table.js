var empty;
var drag;
function addingevent() {
    document.querySelectorAll(".drag").forEach((d) => {
        d.addEventListener("dragstart", dragStart);
        d.addEventListener("dragend", dragEnd);
    });
}
document.addEventListener('dragstart', () => {
    document.querySelectorAll(".drag").forEach((d) => {
        d.addEventListener("dragstart", dragStart);
        d.addEventListener("dragend", dragEnd);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    empty = document.querySelectorAll(".empty");
    document.querySelectorAll(".drag").forEach((d) => {
        d.addEventListener("dragstart", dragStart);
        d.addEventListener("dragend", dragEnd);
    });
    for (var item of empty) {
        item.addEventListener("dragover", dragOver);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
        item.addEventListener("drop", dragDrop);
    }
});

// requestAnimationFrame - подменяет стиль на прозрачный. работает с частотой 60fps
function dragStart(event) {
    console.log("start");
    drag = this;
    this.style.backgroundColor = "#ff7272";
    requestAnimationFrame(() => (this.style.backgroundColor = "transparent"), 0);
}

function dragEnd() {
    console.log("end");
    this.style.backgroundColor = "#a0ffb38f";
}


// dragOver срабатывает всё время
// preventDefault - обязательно! Сбрасывает стандартные обработчики браузера
function dragOver() {
    event.preventDefault();
}

// dragEnter срабатывает над объектом один раз
function dragEnter() {
    //this.style.backgroundColor = "gray";
}

// dragLeave срабатывает после ухода
function dragLeave() {
    //this.style.backgroundColor = "#eee";
}

// drop срабатывает после того, как перетаскиваемый объект опустится на блок
function dragDrop() {
    console.log("drop");
    this.append(drag);
}

function formtable() {
    var rows = document.getElementById('row').value;
    var cols = document.getElementById('column').value;

}
function gentabs() {
    var course = document.querySelector('#course').value;
    var credits = document.querySelector('#credits').value;
    var div = document.querySelector('.dragtabs');
    div.innerHTML = '';
    for (i = 0; i < credits; i++) {
        var c = document.createElement('div');
        c.classList.add('drag');
        c.setAttribute('draggable', 'true');
        c.innerHTML = course;
        div.appendChild(c);
    }
    addingevent();
    return false;
}