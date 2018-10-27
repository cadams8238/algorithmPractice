"use strict";

// Given an array of strings, return another array containing all of its longest strings.

// Example

// For
// inputArray = ["aba", "aa", "ad", "vcd", "aba"]

// the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"]

function allLongestStrings(inputArray) {
	let longestStringLength = 0;

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length > longestStringLength) {
			longestStringLength = inputArray[i].length;
		}
	}

	return inputArray.filter(str => str.length === longestStringLength);
}

const test1 = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(test1));
// expected output
// [
//  "aba",
//  "vcd",
//  "aba"
// ]

const test2 = ["aa"];
console.log(allLongestStrings(test2));
// expected output
// ["aa"]

const test3 = ["abc", "eeee", "abcd", "dcd"];
console.log(allLongestStrings(test3));
// expected output
// [
//  "eeee",
//  "abcd"
// ]

const test4 = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"];
console.log(allLongestStrings(test4));
// expected output
// [
//     "zzzzzz",
//     "abcdef",
//     "aaaaaa"
// ]

module.exports = { allLongestStrings };
