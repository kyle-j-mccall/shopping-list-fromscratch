import { itemBought } from './fetch-utils.js';

export function renderItems(item) {
    const itemDiv = document.createElement('div');
    const itemP = document.createElement('p');
    const quantityP = document.createElement('p');

    itemP.textContent = item.item;
    quantityP.textContent = `(${item.quantity})`;

    if (item.bought === true) {
        itemDiv.classList.add('item-bought');
    } else {
        itemDiv.classList.add('list-item');
    }
    

    
    
    
    itemDiv.append(itemP, quantityP);
    
    

    return itemDiv;

}