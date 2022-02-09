"use strict";
const documentName = document.querySelector('body');
const btn = document.querySelector('#main-btn');
const btn2 = document.querySelector('#main-btn-2');
const subTitle = document.querySelector(".sub-title");

function change() {
  
}

function replace () {
  console.log('hi');
}


// color changing event 
const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

const btnRed = document.querySelector('#color-red');
const btnPink = document.querySelector('#color-pink');
const btnBlue = document.querySelector('#color-blue');


btnRed.addEventListener ('click', function () {
  child.style.backgroundColor = 'red';
});
btnPink.addEventListener ('click', function () {
  child.style.backgroundColor = 'hotPink';
});
btnBlue.addEventListener ('click', function () {
  child.style.backgroundColor = 'blue';
});


// printing user input
const display = document.querySelector('#full-name');
const firstName = document.querySelector('#f-name');
const lastName = document.querySelector('#l-name');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener ('click', () => {
  const fullName = firstName.value + ' ' + lastName.value;
  if ( fullName == ' ' ) {
    display.innerHTML = 'Please input your name';
    return;
  }
  display.innerHTML = fullName;
  firstName.value = '';
  lastName.value = '';
});


// student name list 
const addBtn = document.querySelector('#add');
const studentName = document.querySelector('#student-name');
const nameBox = document.querySelector('#name-box');

addBtn.addEventListener ('click', () => {
  const name = studentName.value;
  if (name == '') {
    return;
  }
  const newName = document.createElement('p');
  newName.innerText = name;
  nameBox.append(newName);
  studentName.value = '';
})