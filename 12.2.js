const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    return candyStore.candies.find(item => item.id === id);
}
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
    return candyStore.candies.find(item => item.id === id).price;
}
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
    if (getCandy(candyStore, id)) {
        return "this candy does exist"
    }
    let temp = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(temp);
    console.log(candyStore);
}
addCandy(candyStore, "sdaf", "mahmood", 5);

function buy(candyStore, id) {
    let can = getCandy(candyStore, id);
    can.amount--;
    candyStore.cashRegister += getPrice(candyStore, id);
    console.log(candyStore);
}
buy(candyStore, "5hd7y");