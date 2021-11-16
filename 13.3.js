const arr = [1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4];

let max = arr.reduce((max, val) => {
    return Math.max(max, val);
})
console.log(max);
let sum = arr.reduce((s, val) => {
    return s + val * val % 2;
})
console.log(sum);

let average = arr.reduce((s, val) => {
    return s + val;
}) / arr.length;
console.log(average);