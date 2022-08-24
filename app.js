import { checkAuth, signOutUser, createListItem, getItems, itemBought, deleteItems } from './fetch-utils.js';

import { renderItems } from './render-utils.js';


checkAuth();

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

const listContainer = document.getElementById('list-container');
const form = document.querySelector('form');
const deleteButton = document.getElementById('delete-button');


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

    await displayItems();
    

    form.reset();


});


// local state:

async function displayItems() {
    listContainer.textContent = '';

    

    itemsArr = await getItems();

    for (let item of itemsArr) {
        const renderedItem = renderItems(item);
        renderedItem.addEventListener('click', async () => {
            await itemBought(item.id);
            
            if (item.bought === true) {
                renderedItem.classList.add('item-bought');
                
            } displayItems();
            
        });
        listContainer.append(renderedItem);
        
    }
    

    

}

function displayDeleteButton() {
    if (itemsArr !== []) {
        deleteButton.classList.add('delete-button');
    } else if (itemsArr === []) {
        deleteButton.classList.add('hidden');
    }
}

deleteButton.addEventListener('click', async () => {
    await deleteItems();
    itemsArr = [];
    displayItems();    
});

displayItems();
displayDeleteButton();
console.log(itemsArr);

// events:
