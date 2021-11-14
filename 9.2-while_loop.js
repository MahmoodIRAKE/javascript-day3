function len_ofStrings(arr) {
    let newArr = [];
    let i = 0;
    while (newArr.length !== arr.length) {
        newArr.push(arr[i].length);
        i++;
    }
    return newArr
}

console.log(len_ofStrings(["boo", "doooo", "hoo", "ro"]));