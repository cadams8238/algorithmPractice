"use strict";

const chai = require("chai");
const assert = chai.assert;

const { allLongestStrings } = require("../codeSignal/allLongestStrings");

describe("All Longest Strings function", () => {
	it("should exist", () => {
		assert.exists(allLongestStrings, "allLongestStrings is null or undefined");
	});

	it("should be a function", () => {
		assert.isFunction(allLongestStrings, "allLongestString is not a function");
	});

	it("should return an array", () => {
		const test = ["a", "ab", "abc"];
		assert.isArray(
			allLongestStrings(test),
			"allLongestStrings does not return an array"
		);
	});

	describe("should return the longest string(s)", () => {
		it('should return ["aba", "vcd", "aba"] when ["aba", "aa", "ad", "vcd", "aba"] is inputed', () => {
			const input = ["aba", "aa", "ad", "vcd", "aba"];
			const output = ["aba", "vcd", "aba"];

			assert.lengthOf(
				allLongestStrings(input),
				output.length,
				"array length of expected output doesn't match actual output"
			);

			output.forEach((string, index) => {
				assert.equal(allLongestStrings(input)[index], string);
				assert.isString(allLongestStrings(input)[index], string);
			});
		});

		it('should return ["aa"] when ["aa"] is inputed', () => {
			const input = ["aa"];
			const output = ["aa"];

			assert.lengthOf(
				allLongestStrings(input),
				output.length,
				"array length of expected output doesn't match actual output"
			);

			output.forEach((string, index) => {
				assert.equal(allLongestStrings(input)[index], string);
				assert.isString(allLongestStrings(input)[index], string);
			});
		});

		it('should return ["eeee", "abcd"] when ["abc", "eeee", "abcd", "dcd"] is inputed', () => {
			const input = ["abc", "eeee", "abcd", "dcd"];
			const output = ["eeee", "abcd"];

			assert.lengthOf(
				allLongestStrings(input),
				output.length,
				"array length of expected output doesn't match actual output"
			);

			output.forEach((string, index) => {
				assert.equal(allLongestStrings(input)[index], string);
				assert.isString(allLongestStrings(input)[index], string);
			});
		});

		it('should return ["zzzzzz", "abcdef", "aaaaaa"] when ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"] is inputed', () => {
			const input = [
				"a",
				"abc",
				"cbd",
				"zzzzzz",
				"a",
				"abcdef",
				"asasa",
				"aaaaaa"
			];
			const output = ["zzzzzz", "abcdef", "aaaaaa"];

			assert.lengthOf(
				allLongestStrings(input),
				output.length,
				"array length of expected output doesn't match actual output"
			);

			output.forEach((string, index) => {
				assert.equal(allLongestStrings(input)[index], string);
				assert.isString(allLongestStrings(input)[index], string);
			});
		});
	});
});
