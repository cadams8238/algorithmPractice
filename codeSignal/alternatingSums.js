// Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third
// goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight
// of team 1, and the second element is the total weight of team 2 after the
// division is complete.

// Example

// For
// a = [50, 60, 60, 45, 70],

// the output should be
// alternatingSums(a) = [180, 105]

function alternatingSums(a) {
	let teamOneSum = 0,
		teamTwoSum = 0;

	for (let i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			teamOneSum += a[i];
		} else {
			teamTwoSum += a[i];
		}
	}

	return [teamOneSum, teamTwoSum];
}

const test1 = [50, 60, 60, 45, 70];
console.log(alternatingSums(test1));
// expected output
// [180, 105]

const test2 = [100, 50];
console.log(alternatingSums(test2));
// expected output
// [100, 50]

const test3 = [80];
console.log(alternatingSums(test3));
// expected output
// [80, 0]

const test4 = [100, 50, 50, 100];
console.log(alternatingSums(test4));
// expected output
// [150, 150]

const test5 = [100, 51, 50, 100];
console.log(alternatingSums(test5));
// expected output
// [150, 151]
