function func(str) {
    console.log(str)
}

function isString(str, func) {
    if (typeof str === 'string') {
        func(str);
    }
}

isString("mahmood", func);
isString("mahmsdaf", func);
isString(1, func);

function func1(str) {
    return str.replaceAll(" ", "-")
}

function firstWordUpperCase(str, func) {
    let temp = str.slice(0, str.indexOf(' '));
    temp = temp.toUpperCase();
    let res = temp + str.slice(str.indexOf(' '), str.length);
    console.log(func(res));
}

firstWordUpperCase("Mahmood Irake", func1);