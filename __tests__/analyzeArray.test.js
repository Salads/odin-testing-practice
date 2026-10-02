import { test, expect } from "@jest/globals";
import { analyzeArray } from "../analyzeArray";

test("analyzeArray - empty", () => {
	expect(analyzeArray([]).toEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 0
	}));
});

test("analyzeArray - normal", () => {
	expect(analyzeArray([1,8,3,4,2,6]).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	}));
});

// #region type tests
test("analyzeArray - undefined", () => {
	expect(() => analyzeArray(undefined)).toThrow();
});

test("analyzeArray - null", () => {
	expect(() => analyzeArray(null)).toThrow();
});

test("analyzeArray - false", () => {
	expect(() => analyzeArray(false)).toThrow();
});

test("analyzeArray - true", () => {
	expect(() => analyzeArray(true)).toThrow();
});

test("analyzeArray - number", () => {
	expect(() => analyzeArray(2)).toThrow();
});

test("analyzeArray - object", () => {
	expect(() => analyzeArray({})).toThrow();
});

test("analyzeArray - function", () => {
	expect(() => analyzeArray(() => console.log("bleh"))).toThrow();
});

test("analyzeArray - BigInt", () => {
	expect(() => analyzeArray(BigInt(10928312039812039))).toThrow();
});

test("analyzeArray - Symbol", () => {
	expect(() => analyzeArray(Symbol("foo"))).toThrow();
});
// #endregion