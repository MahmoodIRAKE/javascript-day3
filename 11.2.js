function doubleValues(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}
const test = [1, 2, 3, 4]
console.log(doubleValues(test));

function onlyEvenValues(arr) {
    let res1 = [];
    arr.forEach(function(item, index) {
        if (index % 2 === 0) {
            res1.push(item);
        }

    });
    return res1;
}

console.log(onlyEvenValues(test));


function showFirstAndLast(arr) {
    let res1 = ["", ""];
    let check = 0;
    arr.forEach(function(item, index) {
        if (check === 0 && typeof item === 'string') {
            res1[0] = item.slice();
            check = 1;

        }
        if (typeof item === 'string') {
            res1[1] = item.slice();
        }


    });
    return res1;
}
const test2 = [1, "Mahmood", "sdaf", 2.3, 4, "Irake", 7]
console.log(showFirstAndLast(test2));

function vowelCount(str) {
    let res1 = {}
    let temp = 'aieuo';
    str.toLowerCase().split('').forEach(function(item, index) {
        if (res1[item] === undefined && temp.includes(item)) {
            res1[item] = 0;
        }
        if (res1[item] !== undefined) {
            res1[item]++;
        }

    });
    return res1;
}

console.log(vowelCount("mahmood"));

function capitalize(str) {

    return str.split('').map(function(item, index) {
        if (item >= 'a' && item <= 'z') {
            return String.fromCharCode(item.charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
        }
    }).join('');

}

console.log(capitalize("mahmood"));

function shiftLetters(str) {

    return str.split('').map(function(item, index) {
        if (item > 'a' && item <= 'z') {
            return String.fromCharCode((item.charCodeAt(0) - 1));
        } else {
            return item;
        }
    }).join('');

}

console.log(shiftLetters("mahmood mahmood!"));

function swapCase(str) {
    let nextToCap = false;
    return str.split('').map(function(item, index) {
        if (index === 0 || nextToCap) {
            nextToCap = false;
            return capitalize(item);
        }
        if (item === ' ') {
            nextToCap = true;
        }
        return item;
    }).join('');

}

console.log(swapCase("mahmood irake is the best"));