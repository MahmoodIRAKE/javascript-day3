const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort((a, b) => a.localeCompare(b));
console.log(foods)
foods.sort((a, b) => b.localeCompare(a));
console.log(foods)
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort((a, b) => a.localeCompare(b));
console.log(foodsWithUpperCase)
foodsWithUpperCase.sort((a, b) => b.localeCompare(a));
console.log(foodsWithUpperCase)

const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"
];

words.sort((a, b) => a.length - b.length);
console.log(words);