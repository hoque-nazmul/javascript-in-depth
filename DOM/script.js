// Change Bg Color of Document
const changeBg = document.getElementById('changeBg');
changeBg.addEventListener('click', function (e) {
    document.bgColor = '#252526';
    changeBg.style.display = 'none';
});


// ***** DOM Selector ***** //
// We can select DOM element using getElemenBySomething() & querySelector();
// select by getElementBySomething()
const container = document.getElementById('container');
const heading = document.getElementById('heading');
const listGroup = document.getElementById('list-group');
const listItems = document.getElementsByClassName('list-item');
const name = document.getElementById('name');

// select by querySelector() or querySelectorAll()
const addList = document.querySelector('#addBtn');
const checkbox = document.querySelectorAll('.checkbox');


// ***** Create DOM Element ***** //
const li = document.createElement('li');
li.classList = ['list-item', 'test']
li.title = 'this is title';
li.innerHTML = "I am created element"
listGroup.appendChild(li);

const paraOne = document.createElement('p');
paraOne.classList = ['para']
paraOne.innerHTML = "This is a simple paragraph for testing. It's created for testing."

const paraTwo = document.createElement('p');
paraTwo.classList = ['para']
paraTwo.innerHTML = "This is a simple paragraph for testing. It's created for testing."

const div = document.createElement('div');
[paraOne, paraTwo].forEach(paragraph => {
    div.appendChild(paragraph);
})
// container.appendChild(div);

// ***** insertAdjacentElement ***** //
// It's used for insert a element at anything.
// We can placed a created element using it instead of appendChild().

listGroup.insertAdjacentElement('beforebegin', div);
// there are another 3 types of insert position - afterbegin, beforeend, afterend


// ***** DOM Traversing ***** //
// there are some property that help us to select element for traversing.
/*
    1. children
    2. firstElementChild
    3. lastElementChild
    4. nextElementSibling
    5. previousElementSibling
    6. parentElement
    7. parentNode

*/

// console.log("Parent",listGroup.parentNode);
// console.log("children",listGroup.children);
// console.log("first children",listGroup.firstElementChild);

// By the way, selectors return us mulitple DOM elements via HTML Collections which is array like object not array. We can easily traversing them throgh for loop.
/*
    There are 3 options to convert those HTML collection into array. such as
    1. Array.form(HTML collections)
    2. Array.prototype.slice.apply(HTML collections)
    3. [...HTML Collections] (Spread Operator)
*/
// HTML collections traversing using spread operator
[...listItems].forEach((list) => {
    // console.log(list.innerHTML);
});

// ***** Update and Remove DOM Element ***** //
const firstItem = listGroup.firstElementChild;
const lastItem = listGroup.lastElementChild;
setTimeout(() => {
    firstItem.innerHTML = firstItem.innerHTML + '(Modified)';
    firstItem.style.color = "green";
}, 5000);

// setTimeout(() => {
//     lastItem.remove();
// }, 3000);


// ***** Clone DOM Element ***** //
// const clonedITem = lastItem.cloneNode(true);
// clonedITem.innerHTML = "This is cloned element";
// listGroup.appendChild(clonedITem);


// ***** Event Handling ***** //
addList.addEventListener('click', function (e) {
    const clonedITem = lastItem.cloneNode(true);
    clonedITem.innerHTML = "Newly Added Element";
    listGroup.appendChild(clonedITem);
});

// ***** Event Delegation Problem ***** //
// [...listItems].forEach(list => {
//     list.addEventListener('click', function (e) {
//         e.target.remove();
//     });
// })

// ***** Event Delegation Problem Solved ***** //
// listGroup.addEventListener('click', function (e) {
    
//     if (this.contains(e.target) && e.target !== listGroup) {
//         e.target.remove();
//     }
    
// });


// ***** setAttribute() ***** //
heading.setAttribute('title', 'this is heading');


// ***** Styling ***** //
// If we need multiple style to add, we can follow that.
const styleObj = {
    color: 'cyan',
    backgroundColor: 'black',
    padding: '5px 0px',
    border: '3px solid red'
}
Object.assign(heading.style, styleObj)

// for simple styling.
addList.style.color = 'red';
addList.style.backgroundColor = 'green';
addList.style.border = '5px solid green'


// ***** Event Handling with Input Element ***** //
const inputName = document.getElementById('name');
inputName.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        document.getElementById('showName').innerHTML = e.target.value;
        inputName.value = '';
    }
});


// ***** Event Handling with Checkbox ***** //
const skillStore = [];
const displaySkill = () => {
    let addedSkill = '';
    skillStore.forEach(skill => {
        addedSkill += skill + ', ';
    })
    document.getElementById('skills').innerHTML = addedSkill;
}
const checkElements = document.getElementsByClassName('checkbox');
[...checkElements].forEach((element) => {
    element.addEventListener('change', function (e) {
        if (e.target.checked) {
            skillStore.push(e.target.value);
            displaySkill();
        } else {
            const index = skillStore.indexOf(e.target.value);
            skillStore.splice(index, 1);
            displaySkill();
        }
    });
});


// ***** Event Handling with Text Element ***** //
listGroup.addEventListener('dblclick', function (event) {
    const listText = event.target.innerText;
    event.target.innerHTML = '';
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'listText';
    inputElement.value = listText;
    event.target.appendChild(inputElement);
    inputElement.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            event.target.innerHTML = e.target.value;
        }
    });
});

