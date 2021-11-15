const people = [{
        name: 'shani',
        age: 12
    },
    {
        name: 'adssa',
        age: 202
    }

]
let str = "dassa";
const arr = [1, "sda", 22];

people.forEach(function(item) {
    if (item.age > 20) {
        console.log(`age: ${item.age} name: ${item.name}`);
    }
})
const shani = {
    name: 'shani',
    age: 12
}

Object.keys(shani).map(function(item) {
    console.log(item);
})
Object.values(shani).map(function(item) {
    console.log(item);
})