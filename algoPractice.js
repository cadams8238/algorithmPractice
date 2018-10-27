"use strict";

// Return the best profit I could have made from purchase
// and then sale the following stock prices.

var stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices) // returns 6, cause if I bought
// at 5 and then sell at 11, the profit will be 6.

function bestStockProfit(stocks) {
	let min = stocks[0],
		minIndex = 0,
		max = stocks[0];

	if (stocks.length < 2) {
		throw new Error("There needs to be at least 2 stocks to compare");
	}

	for (let i = 0; i < stocks.length; i++) {
		if (stocks[i] < min) {
			min = stocks[i];
			minIndex = i;
		}
		if (stocks[i] > max && i > minIndex) {
			max = stocks[i];
		}
	}

	return max - min;
}

console.log(bestStockProfit(stockPrices));

///////////////////////////////////////////////////////////////

// A website considers a password to be strong if it satisfies
// the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters
// are: !@#$%^&*()-+

// Given a string, can you find the minimum number of characters you
// must add to make a strong password?

// #Ab1 is not strong because its length is 4, so you need to add 2 more characters.

// ABcd is not strong because its length is 4 and is missing one digit and
// one special character, so at least you need to add 2 more characters.

// 12345 is not strong because its length is 5 and is missing one lowercase,
// one uppercase and one special character, so at least you need to add 3
// more characters.

function strongPassword(pswd) {
	const specialChars = "!@#$%^&*()-+".split(""),
		pswdArr = pswd.split("");

  let conditionsMet = 0;

  for (let i = 0; i < pswdArr.length; i++) {
    if (pswdArr[i])
  }
}

const test1 = "#Ab1";
const test2 = "ABcd";
const test3 = "12345";

console.log(strongPassword(test1));
// console.log(strongPassword(test2));
// console.log(strongPassword(test3));
