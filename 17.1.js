var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// in the result there will be function not a number because we are not calling the function
// in result it must return b =5;

var a = 1;

function b2() {
    a = 10;
    return;

    function a() {}
}
b2();
console.log(a); // here it will print 1 because the a inside the function scope is different fro the a outside

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
// in here when we do set time out it will delay the log console