import { itemBought } from './fetch-utils.js';

export function renderItems(item) {
    const itemDiv = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = item.item;

    if (item.bought === true) {
        itemDiv.classList.add('item-bought');
    } else {
        itemDiv.classList.add('list-item');
    }
    

    
    
    
    itemDiv.append(p);
    
    

    return itemDiv;

}