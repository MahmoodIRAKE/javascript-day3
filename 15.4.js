/*What is wrong with this code? 
1. First find the line that contains the problem. Write it 
down.
   sum was not intiliazed so it will have value NAN also 
   to calc avg we need to divide the sum to arr .length
2. Which debug method did you use to find the bug?
break point
3. Explain the bug in your own words.
4. Fix the code and submit it all.
*/

function calcAverage(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
calcAverage([85, 90, 92]);