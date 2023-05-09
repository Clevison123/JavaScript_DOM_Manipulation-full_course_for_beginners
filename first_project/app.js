// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        "Quote": "Difficulties mastered are opportunities won. ",
        "Person": "Winston Churchill "
    },
    {
        "Quote": "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
        "Person": "Martin Luther King, Jr. "
    },
    {
        "Quote": "A government which does not trust its citizens to be armed is not itself to be trusted. ",
        "Person": "Niccolo Machiavelli "
    },
    {
        "Quote": "Knowing yourself is the beginning of all wisdom. ",
        "Person": "Aristotle "
    },
    {
        "Quote": "Without training, they lacked knowledge. Without knowledge, they lacked confidence. Without confidence, they lacked victory. ",
        "Person": "Julius Caesar "
    },{
        "Quote": "Forgive your enemies, but never forget their names. ",
        "Person": "John F. Kennedy  "
    }
 ];

 btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].Quote;
    person.innerText = quotes[random].Person;

 })