/*What is wrong with this code? 
1. First find the line that contains the problem. Write it 
down.
  counter was not changing
2. Which debug method did you use to find the bug?
break points
3. Explain the bug in your own words.
the counter was not adding for real 
4. Fix the code and submit it all.
*/

function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");