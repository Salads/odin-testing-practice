import { test, expect } from "@jest/globals";
import { capitalize } from "../capitalize.js";

test("captialize - empty string", () => {
	expect(capitalize("")).toBe("");
});

test("captialize - one character string - needs modification", () => {
	expect(capitalize("s")).toBe("S");
});

test("captialize - one character string - doesn't need modification", () => {
	expect(capitalize("S")).toBe("S");
});

test("captialize - regular string - needs modification", () => {
	expect(capitalize("cool string")).toBe("Cool string");
});

test("captialize - regular string - doesn't need modification", () => {
	expect(capitalize("Cool string")).toBe("Cool string");
});

test("captialize - undefined", () => {
	expect(() => capitalize(undefined)).toThrow();
});

test("captialize - null", () => {
	expect(() => capitalize(null)).toThrow();
});

test("captialize - false", () => {
	expect(() => capitalize(false)).toThrow();
});

test("captialize - true", () => {
	expect(() => capitalize(true)).toThrow();
});

test("captialize - number", () => {
	expect(() => capitalize(2)).toThrow();
});

test("captialize - object", () => {
	expect(() => capitalize({})).toThrow();
});

test("captialize - function", () => {
	expect(() => capitalize(() => console.log("bleh"))).toThrow();
});