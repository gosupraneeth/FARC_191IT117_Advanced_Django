//file for editing the table
var empty;
var drag;

//function calls and adds events when drag event happens
function addingevent() {
    document.querySelectorAll(".drag").forEach((d) => {
        d.addEventListener("dragstart", dragStart);
        d.addEventListener("dragend", dragEnd);
    });
}

//adding events when drag stars
document.addEventListener('dragstart', () => {
    document.querySelectorAll(".drag").forEach((d) => {
        d.addEventListener("dragstart", dragStart);
        d.addEventListener("dragend", dragEnd);
    });
});

//adding events when document loaded
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

//calls the function when drag starts
function dragStart(event) {
    console.log("start");
    drag = this;
}

//calls the function when drag ends
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
}

function dragOver() {
    event.preventDefault();
}

//calls the function when drag on the empty cell
function dragEnter() {
    //this.style.backgroundColor = "gray";
}


//calls the function when drag is left
function dragLeave() {
    //this.style.height = '30px';
}

//calls the function when drag is dropin
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


function trashdragEnter() {
    //this.style.backgroundColor = "gray";
    this.querySelector('span').style.transform = "rotate(-45deg)";
    this.querySelector('span').style.transition = "transform 250ms";
}


function trashdragLeave() {
    this.querySelector('span').style.transform = "";
    this.querySelector('span').style.transition = "";
    //this.style.backgroundColor = "#eee";
}


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


//generates the new cell tabs
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