//Dom Manipulation 

//const title = document.querySelector('#main-heading')

//manipulation CSS
//title.style.color = 'red'

//console.log(title);
//-----------------------------------------------------

//const listItems = document.querySelectorAll('.list-items');

//manipulation CSS
//for( i = 0; i < listItems.length; i++) {
//    listItems[i].style.fontSize = '4rem';
//}

//console.log(listItems);
//-----------------------------------------------------

//Creating Elements 
const ul = document.querySelector('ul');
const li = document.createElement('li')

//Adding Elements
ul.append(li)

//Modifying the text 
li.innerText = 'X-men';
//-----------------------------------------------------

/*
//Modifying the text too

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
*/
//---------------------------------------------------

//Modifying Attributes & Classes 
li.classList.remove('list-items')

console.log(li.classList.contains('list-items'));
//-------------------------------------


/*
//Modifying Attributes & Classes 
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'))
*/