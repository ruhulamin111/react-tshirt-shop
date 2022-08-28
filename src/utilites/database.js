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
        // shopItem[id] = quatity + 1;
        return
    }
    else {
        shopItem[id] = 1;
    }
    localStorage.setItem('shopItem', JSON.stringify(shopItem));
}

const storedCart = () => {
    let shopItem;
    const savedItem = localStorage.getItem('shopItem');
    if (savedItem) {
        shopItem = JSON.parse(savedItem);
    }
    else {
        shopItem = {};
    }
    return shopItem;
}

const removeFromDb = (id) => {
    const savedItem = localStorage.getItem('shopItem');
    if (savedItem) {
        const shopItem = JSON.parse(savedItem)
        if (id in shopItem) {
            delete shopItem[id]
            localStorage.setItem('shopItem', JSON.stringify(shopItem))
        }
    }

}

export {
    addToDb,
    storedCart,
    removeFromDb
};