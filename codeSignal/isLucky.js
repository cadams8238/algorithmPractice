// Ticket numbers usually consist of an even number of digits. A ticket number is considered 
// lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For 
// n = 1230, 

// the output should be
// isLucky(n) = true;

// For 
// n = 239017, 

// the output should be
// isLucky(n) = false



function isLucky(n) {
    const singleNums = n.toString().split(''),
          half = Math.floor(singleNums.length / 2);
    let first = 0,
        second = 0;
    
    // add up sum of first half
    for (let i = 0; i < half; i++) {
        first += Number(singleNums[i]);
    }
    
    // add up sum of second half
    for (let i = singleNums.length - 1; i >= half; i--) {
        second += Number(singleNums[i]);
    }

    return first === second;
}



const test1 = 1230;
console.log(isLucky(test1));  // answer: true

const test2 = 239017;
console.log(isLucky(test2));  // answer: false

const test3 = 134008;
console.log(isLucky(test3));  // answer: true

const test4 = 10;
console.log(isLucky(test4));  // answer: false

const test5 = 11;
console.log(isLucky(test5));  // answer: true

const test6 = 1010;
console.log(isLucky(test6));  // answer: true

const test7 = 261534;
console.log(isLucky(test7));  // answer: false

const test8 = 100000;
console.log(isLucky(test8));  // answer: false

const test9 = 999999;
console.log(isLucky(test9));  // answer: true

const test10 = 123321;
console.log(isLucky(test10));  // answer: true