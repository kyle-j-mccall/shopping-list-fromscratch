export function renderItems(item) {
    const itemDiv = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = item.item;

    itemDiv.append(p);

    return itemDiv;

}