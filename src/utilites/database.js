const addToDb = (id) => {
    let shopItem;
    const savedItem = localStorage.getItem('shopItem');
    if (savedItem) {
        shopItem = JSON.parse(savedItem);
    }
    else {
        shopItem = {};
    }
    const quatity = shopItem[id];
    if (quatity) {
        shopItem[id] = quatity + 1;
    }
    else {
        shopItem[id] = 1;
    }
    localStorage.setItem('shopItem', JSON.stringify(shopItem));
}

export {
    addToDb
};