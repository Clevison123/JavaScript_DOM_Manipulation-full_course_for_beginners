// Dom Manipulation

// Event Probagation 
/* 3 Phases
1.Event Capturing
2.Target
3.Event Bubbling
*/

window.addEventListener('click', function(){
    console.log('Window');
},false);

document.addEventListener('click', function() {
    console.log('document');
}, false);

document.querySelector(".div2").addEventListener("click", function() {
    // e.stopProgagation()
    console.log('DIV 2');
}, {once: true});

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, false);

document.querySelector(".button").addEventListener("click", function(e) {
    e.preventDefault()
    console.log(e.target.innerText = 'clicked!');
}, false);