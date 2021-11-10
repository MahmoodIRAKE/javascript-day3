const book1 = {
    name: 'mahmood',
    author: 'irake',
    year: 1995
};

function iterObject(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}
console.log(iterObject(book1));