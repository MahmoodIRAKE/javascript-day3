const beTrue1WithSet = () => {
    setTimeout(() => {
        console.log(1);
        return true;
    }, 0);
}
const beTrue2WithSet = () => {
    setTimeout(() => {
        console.log(2);
        return true;
    }, 0);
}
const beTrue1 = () => {
    console.log(1);
    return true;
}
const beTrue2 = () => {
    console.log(2);
    return true;
}
const beTrue3 = () => {
    console.log(3);
    return true;
}
const beFalse1 = () => {
    console.log(1);
    return false;
}
const beFalse2 = () => {
    console.log(2);
    return false;
}
const beFalse3 = () => {
    console.log(3);
    return false;
}

function findOdd(A) {
    let counter = 1;
    let res = 0;
    while (A.length > 0) {
        let temp = A[0];
        while (A.includes(temp)) {
            counter++;
            A.splice(A.indexOf(temp), 1);
            res = temp;
            console.log(temp);
        }
        if (counter % 2 !== 0) {
            return res;
        }

    }
    return 0;
}

console.log(beTrue2WithSet() && beTrue1WithSet());