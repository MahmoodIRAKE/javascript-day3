///Block 1

// function funcA() {
//     console.log(a); //can not print a becuase it is undefiend hoisting to fix it we need to declare the a before
//     console.log(foo());
//     var a = 1;

//     function foo() {
//         return 2;
//     }
// }
// funcA();
//Block 2

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function() {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // the result will be 'Aurelio De Rosa'
var test = obj.prop.getFullName;
console.log(test()); // in here it will give undefiend necause in the test ththis change from obj scope to global scope
//Block 3


function funcB() {
    let a = b = 0; // in this case it will consoder the b as var 
    a++;
    return a;
}
funcB();
console.log(typeof a); // it will give undefiend because a is defiend only inside function scope
console.log(typeof b);

//Block 4
//Block 5
//Block 6

function funcC() {
    console.log("1");
}
funcC();

function funcC() {
    console.log("2");
}
funcC();

function funcD1() {
    d = 1;
}
funcD1();
console.log(d); // it will print d because 

function funcD2() {
    var e = 1;
}
funcD2();
//console.log(e); // it will consider e no defiend becuase it is initilized inside function scop


function funcE() {
    console.log("Value of f in local scope: ", f); // it will print f becuase we called the function after intializing f
}
console.log("Value of f in global scope: ", f); // it wont print f becuase of hositing
var f = 1;
funcE();