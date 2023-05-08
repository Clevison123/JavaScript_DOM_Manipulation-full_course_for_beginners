// Dom Manipulation

// Event Delegation 

// It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector 

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + 'Is clicked');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);

/*
document.querySelector('#football').addEventListener('click', function(e){
    console.log('Football is clicked ');
    //alert('Football is clicked ');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})


document.querySelector('#basktball').addEventListener('click', function(e){
    console.log('Basktball is clicked ');
    //alert('Basktball is clicked ');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#boxing').addEventListener('click', function(e){
    console.log('Boxing is clicked ');
    //alert('Boxing is clicked ');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#tennis').addEventListener('click', function(e){
    console.log('Tennis is clicked ');
    //alert('Tennis is clicked ');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#golf').addEventListener('click', function(e){
    console.log('Golf is clicked ');
    //alert('Golf is clicked ');

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})
*/