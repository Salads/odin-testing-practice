import { test, expect } from "@jest/globals";
import { reverseString } from "../reverseString";

test("reverseString - empty string", () => {
	expect(reverseString("")).toBe("");
});

test("reverseString - one character string", () => {
	expect(reverseString("s")).toBe("s");
});

test("reverseString - regular string", () => {
	expect(reverseString("fable")).toBe("elbaf");
});

test("reverseString - regular string - mixed", () => {
	expect(reverseString("fAbLe")).toBe("eLbAf");
});

test("reverseString - undefined", () => {
	expect(() => reverseString(undefined)).toThrow();
});

test("reverseString - null", () => {
	expect(() => reverseString(null)).toThrow();
});

test("reverseString - false", () => {
	expect(() => reverseString(false)).toThrow();
});

test("reverseString - true", () => {
	expect(() => reverseString(true)).toThrow();
});

test("reverseString - number", () => {
	expect(() => reverseString(2)).toThrow();
});

test("reverseString - object", () => {
	expect(() => reverseString({})).toThrow();
});

test("reverseString - function", () => {
	expect(() => reverseString(() => console.log("bleh"))).toThrow();
});