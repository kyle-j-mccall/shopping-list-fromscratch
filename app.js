import { checkAuth, signOutUser, createListItem, getItems } from './fetch-utils.js';

import { renderItems } from './render-utils.js';


checkAuth();

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

const listContainer = document.getElementById('list-container');
const form = document.querySelector('form');

let itemsArr = [];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const item = data.get('item');
    const quantity = data.get('quantity');
    console.log(item, quantity);

    const newItem = await createListItem(item, quantity);
    itemsArr.push(newItem);

    console.log(newItem);

    form.reset();


});

// local state:

async function displayItems() {
    itemsArr = await getItems();

    console.log(itemsArr);

}

displayItems();

// events:
