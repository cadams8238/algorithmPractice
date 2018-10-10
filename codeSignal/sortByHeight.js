// Some people are standing in a row in a park. There are trees between them which 
// cannot be moved. Your task is to rearrange the people by their heights in a 
// non-descending order without moving the trees. People can be very tall!

// Example

// For 
// a = [-1, 150, 190, 170, -1, -1, 160, 180],

// the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]


function sortByHeight(a) {
    const treeIndexes = [];
    let people = [];
     
    // grabs indexes of all trees
    a.forEach((elem, index) => {
        if (elem === -1) {
            treeIndexes.push(index);
        }
    })
    
    // filters out trees and sorts people in ascending order
    people = a.filter(elem => elem !== -1).sort((a, b) => a - b)
    
    // putting trees in people array at their original indexes
    for (let i = 0; i < treeIndexes.length; i++) {
        people.splice(treeIndexes[i], 0, -1);
    }
    
    return people;
}


const test1 = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(test1));
// expected output
// [-1, 150, 160, 170, -1, -1, 180, 190]

const test2 = [-1, -1, -1, -1, -1]
console.log(sortByHeight(test2));
// expected output
// [-1, -1, -1, -1, -1]

const test3 = [-1]
console.log(sortByHeight(test3));
// expected output
// [-1]

const test4 = [4, 2, 9, 11, 2, 16]
console.log(sortByHeight(test4));
// expected output
// [2, 2, 4, 9, 11, 16]

const test5 = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
console.log(sortByHeight(test5));
// expected output
// [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2]

const test6 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]
console.log(sortByHeight(test6));
// expected output
// [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
