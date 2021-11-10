const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"
];

function goOver(array) {
    const res = {};
    array.forEach(element => {
        for (let index = 0; index < element.length; index++) {
            if (res[element[index].toLowerCase()] === undefined) {
                res[element[index].toLowerCase()] = 1;
            } else {
                res[element[index].toLowerCase()]++;
            }
        }
    });
    return res;
}
console.log(goOver(array));