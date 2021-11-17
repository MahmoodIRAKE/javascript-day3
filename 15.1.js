/*
What is wrong with this code? 
1. First find the line that contains the problem. Write it down.
    const sum 
    without a return statment
    and in calling function there is a need of ,between the two arrays
2. Which debug method did you use to find the bug?
   i used the break boints method 
3. Explain the bug in your own words.
   first bug is the coma that mean the function takes one onarray and the othe is undefiend
   the second error was with the const sum that can not be changed 
4. Fix the code and submit it all.


*/

function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
getSum([1, 2, 3], [5, 66, 23]);