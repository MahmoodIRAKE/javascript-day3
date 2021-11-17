// What is wrong with this code? 
// 1. First find the line that contains the problem. Write it down.
//findSmalest is not defined
// 2. Which debug method did you use to find the bug?
//breakpoint
// 3. Explain the bug in your own words.
// the error was in the function name 
// 4. Fix the code and submit it all.



function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2);