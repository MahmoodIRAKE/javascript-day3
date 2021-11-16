const arr = [2, 1, 3];

let max = arr.reduce((max, val) => {
    console.log('max', max);
    console.log('val', val);
    return Math.max(max, val);
})

let newMax = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (newMax < arr[i]) {
        newMax = arr[i];
    }
}
console.log('newMax', newMax);

console.log(max);
// ////////////////////////////////////////////
// let sum = arr.reduce((s, val) => {
//     if (val % 2 === 0) {
//         return s + val;
//     } else {
//         return s;
//     }
//     return s + val * (val % 2 === 0);
// }, 0);
// console.log(sum);
// ////////////////////////////////////////////
// let average = arr.reduce((s, val) => {
//     return s + val;
// }) / arr.length;
// console.log(average);