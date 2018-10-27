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
});
