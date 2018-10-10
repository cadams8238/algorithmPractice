// Given two strings, find the number of common characters between them.

// Example

// For 
// s1 = "aabcc" and s2 = "adcaa", 

// the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {
    let count = 0;
    
    const s1_charObj = createCharObj(s1);
    const s2_charObj = createCharObj(s2);
    
    // iterate over 1st char object
    for (let char in s1_charObj) {
        // if the 2nd char object also contains the same char add the char count with the lesser value
        if (s2_charObj.hasOwnProperty(char)) {
            s1_charObj[char] > s2_charObj[char] ? 
                count += s2_charObj[char] :
                count += s1_charObj[char]
        }
    }
    return count;
}


// creates an object of all characters appeared in string and 
// sets their value to how many times that char occurred in the string
function createCharObj(string) {
    let chars = {};
    
    for (let i = 0; i < string.length; i++) {
        // if char doesn't exist in obj yet, add it
        if (!chars.hasOwnProperty(string[i])) {
            chars[string[i]] = 1;
        }
        
        // if char does exist in obj, add 1 to current count
        else if (chars.hasOwnProperty(string[i])) {
            chars[string[i]] = chars[string[i]] + 1;
        }
    }
    return chars;
}


const s1 = "aabcc",
    s2 = "adcaa";
console.log(commonCharacterCount(s1, s2));  // answer: 3

const s1 = "zzzz"
    s2 = "zzzzzzz";
console.log(commonCharacterCount(s1, s2));  // answer: 4

const s1 = "abca"
    s2 = "xyzbac";
console.log(commonCharacterCount(s1, s2));  // answer: 3

const s1 = "a"
    s2 = "b";
console.log(commonCharacterCount(s1, s2));  // answer: 0

const s1 = "a"
    s2 = "aaa";
console.log(commonCharacterCount(s1, s2));  // answer: 1

