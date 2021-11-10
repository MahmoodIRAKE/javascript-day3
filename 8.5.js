const book1 = {
    name: 'mahmood',
    author: 'irake',
    year: 1995
};

function iterObject(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}
console.log(iterObject(book1));