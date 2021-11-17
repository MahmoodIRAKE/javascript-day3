const shop = {
    category: {
        elctronics: {
            gaming: {},
            screens: {},
        },
        food: [{ name: 'sharma', meat: 'hodo', date: new Date() }],
        cloths: {
            shorts: [],
            t_shirt: [],
            shoes: [],
        }
    },
}

//function that add on gaming pc
function addGamingPc(obj) {
    shop.category.elctronics.gaming[obj.id] = obj;
}
addGamingPc({ name: 'ps5', id: 'ps5' });
addGamingPc({ name: 'ps6', id: 'ps6' });
addGamingPc({ name: 'ps6' });
console.log(shop.category.elctronics);