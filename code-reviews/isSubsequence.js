/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 
Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/
​
// function isSubsequence(str1, str2) {
//   let combined = str1 + str2;
//   let j = 0;
//   for (let i = str1.length - 1; i < combined.length; i++){
//       if (j === str1.length - 1) {
//           return true;
//       } else if (combined[j] === combined[i]){
//           j++;
//       }
//   }
//   return false;
// }
​
function isSubsequence(str1, str2) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < str2.length && index1 < str1.length){
        getMatchAndIncrementIndices(index1, index2);
    }
    return index1 === str1.length;
    
    function getMatchAndIncrementIndices(num1, num2) {
        if (str2[index2] === str1[index1]){
            index1++;
            index2++;
        } else {
            index2++;
        }
    }
  }


console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

