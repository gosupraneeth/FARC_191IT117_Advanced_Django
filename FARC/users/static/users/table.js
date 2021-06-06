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
    dustbin = document.querySelectorAll(".trash");
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
    for (var item of dustbin){
        item.addEventListener("dragover", trashdragOver);
        item.addEventListener("dragenter", trashdragEnter);
        item.addEventListener("dragleave", trashdragLeave);
        item.addEventListener("drop", trashdragDrop);
    }
});

// requestAnimationFrame - подменяет стиль на прозрачный. работает с частотой 60fps
function dragStart(event) {
    console.log("start");
    drag = this;
    //this.style.backgroundColor = "white";
    //requestAnimationFrame(() => (this.style.backgroundColor = "transparent"), 0);
}

function dragEnd() {
    console.log("end");
    var div1 = document.querySelector('.dragtabs1');
    var div2 = document.querySelector('.dragtabs2');
    if(div1.childElementCount==0 && div2.childElementCount==0){
        div1.innerHTML = '';
        div1.style.width='0';
        div2.innerHTML = '';
        div2.style.width = '0';
    }
    //this.style.backgroundColor = "#a0ffb38f";
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
    //this.style.height = '30px';
}

// drop срабатывает после того, как перетаскиваемый объект опустится на блок
function dragDrop() {
    console.log("drop");
    this.style.height = "fit-content";
    if (this.innerHTML == "")
        this.append(drag);
    else{
        return;
    }
    if (window.getComputedStyle(this.parentElement, null).getPropertyValue('background-color') == "rgba(160, 255, 179, 0.25)"){
        drag.style.backgroundColor = "#a0ffb38f";
    }
    else{
        drag.style.backgroundColor = "#ff7272";
    }
    if(this.innerHTML=="")
        this.append(drag);
    
    empty = document.querySelectorAll(".empty");
    for (var item of empty) {
        if(item.innerHTML==""){
            item.style.height="30px";
        }
        else{
            item.style.height = "fit-content";
        }
    }
}


function trashdragOver() {
    event.preventDefault();
}

// dragEnter срабатывает над объектом один раз
function trashdragEnter() {
    //this.style.backgroundColor = "gray";
    this.querySelector('span').style.transform = "rotate(-45deg)";
    this.querySelector('span').style.transition = "transform 250ms";
}

// dragLeave срабатывает после ухода
function trashdragLeave() {
    this.querySelector('span').style.transform = "";
    this.querySelector('span').style.transition = "";
    //this.style.backgroundColor = "#eee";
}

// drop срабатывает после того, как перетаскиваемый объект опустится на блок
function trashdragDrop() {
    this.append(drag);
    this.innerHTML = `<span></span><i></i>`;
    empty = document.querySelectorAll(".empty");
    for (var item of empty) {
        if (item.innerHTML == "") {
            item.style.height = "30px";
        }
        else {
            item.style.height = "fit-content";
        }
    }
}




function formtable() {
    var rows = document.getElementById('row').value;
    var cols = document.getElementById('column').value;

}
function gentabs() {
    var course = document.querySelector('#course').value;
    var credits = document.querySelector('#credits').value;
    if(course!='' && credits!='' && parseInt(credits)>0){
        if(window.innerWidth<800){
            var div1 = document.querySelector('.dragtabs3');
            var div2 = document.querySelector('.dragtabs4');
        }
        else{
            var div1 = document.querySelector('.dragtabs1');
            var div2 = document.querySelector('.dragtabs2');
        }
        div1.style.width = "20%";
        div2.style.width = "20%";
        div1.innerHTML = 'Courses';
        div2.innerHTML = 'Courses';
        for (i = 0; i < credits; i++) {
            var c = document.createElement('div');
            c.classList.add('drag');
            c.setAttribute('draggable', 'true');
            c.innerHTML = course;
            if (div1.childElementCount >= div2.childElementCount) {
                div2.appendChild(c);
            }
            else {
                div1.appendChild(c);
            }

        }
        document.querySelector('#course').value = '';
        document.querySelector('#credits').value = '';
        document.querySelector('#course').focus();
        addingevent();
    }
    return false;
}