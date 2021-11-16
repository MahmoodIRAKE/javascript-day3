const team4 = {
        id: 'team4',
        julie: 'Julie',
        alexander: 'Alexander',
        haldon: 'Haldon',
        guest: { guest1: 'aa' },
        10: 'Mahmood',
        arr: [1, 2],
    }
    // 2 ways of how to get certain value from abject
    //1 
team4.guest.guest1 ///='aa'
team4.guest['guest1']
team4['guest'].guest1
team4['guest']['guest1']

team4.arr[0] //1
team4.arr[1] //2
team4['arr'][0] //1
    //2

/* 
let res = Object.keys(team4);
console.log('Keys', res)

let res1 = Object.values(team4);
console.log('Values', res1);
*/

// guest as object
//team4['guest'] = {};
// function that take array of guests and add it to the team4 object


function addGuest(arr) {
    let lastGuest = Object.keys(team4['guest']).length;
    for (let i = 0; i < arr.length; i++) {
        team4['guest']['guest' + (i + lastGuest)] = arr[i];
    }
    return;
}
//addGuest(guestArr);
//console.log('arr 1', team4);
//addGuest(guestArr2);
//console.log('arr 2', team4);

team4['guest'] = [];

guestArr = ['sarit', 'offer', 'evgeni', 'Eric'];
guestArr2 = ['saaa', 'nnnn', 'bbb', 'sdfads'];

function addGuestWithArray(arr) {
    let lastGuest = Object.keys(team4['guest']).length;
    for (let i = 0; i < arr.length; i++) {
        team4['guest'].push({ guest: arr[i] });
    }
    return;
}
//addGuestWithArray(guestArr);
//console.log('arr 1', team4);
//addGuestWithArray(guestArr2);
//console.log('arr 2', team4);