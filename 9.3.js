const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"
];
const food1 = ["Fries", "Ice-cream", "Pizza", "Meat",
    "Hamburgers"
];

function compareArrays(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
                break;
            }
        }

    }
    return (res.length === 0) ? false : res;

}
console.log(compareArrays(food1, food));