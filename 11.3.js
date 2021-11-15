const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

function AllNames() {
    return data.map(function(item) {
        return item.name
    })
}
console.log(AllNames());

function Allbefore() {
    return data.map(function(item) {
        if (new Date(item.birthday).getFullYear() < 1990) {
            return item;
        }
    })
}
console.log(Allbefore());


function allFood() {
    let res1 = {}
    data.forEach(function(item, index) {
        item.favoriteFoods.meats.concat(item.favoriteFoods.fish).forEach(function(item) {
            if (res1[item] === undefined) {
                res1[item] = 0;
            }
            if (res1[item] !== undefined) {
                res1[item]++;
            }
        })
    });
    return res1;
}
console.log(allFood());