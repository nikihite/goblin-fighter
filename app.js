// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const rickHPEl = document.querySelector('#rick-hp');
const rickImgEl = document.querySelector('#rick-img');
const form = document.querySelector('form');
const goblinsListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 2;
let goblins = [
    { name: 'Doug', hp: 1 },
    { name: 'Russel', hp: 4 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user input
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    // use user input to update state 
    // update DOM to reflect the new state
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
    goblinsListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinsListEl.append(goblinEl);
    }
}

displayGoblins();

function goblinClickHandler(goblin) {
    console.log(`I am clicking on ${goblin.name}`);
}