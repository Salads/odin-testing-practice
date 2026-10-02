import { test, expect } from "@jest/globals";
import { caesarCipher } from "../caesarCipher";

test("caesarCipher - empty string", () => {
	expect(caesarCipher("", 2)).toBe("");
});

test("caesarCipher - shift wrapping", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher - shift fractional", () => {
	expect(caesarCipher("xyz", 3.5)).toBe("abc");
});

test("caesarCipher - case preservation", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher - punctuation", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// #region Type Tests
// #region ceasarCipher - string types
test("ceasarCipher - string:null", () => {
	expect(() => caesarCipher(null, 2)).toThrow();
});

test("ceasarCipher - string:undefined", () => {
	expect(() => caesarCipher(undefined, 2)).toThrow();
});

test("ceasarCipher - string:true", () => {
	expect(() => caesarCipher(true, 2)).toThrow();
});

test("ceasarCipher - string:false", () => {
	expect(() => caesarCipher(false, 2)).toThrow();
});

test("ceasarCipher - string:obj", () => {
	expect(() => caesarCipher({}, 2)).toThrow();
});

test("ceasarCipher - string:function", () => {
	expect(() => caesarCipher(() => console.log("bleh"), 2)).toThrow();
});

test("ceasarCipher - string:number", () => {
	expect(() => caesarCipher(2, 2)).toThrow();
});

test("ceasarCipher - string:BigInt", () => {
	expect(() => caesarCipher(BigInt(Number.MAX_SAFE_INTEGER), 2)).toThrow();
});

test("ceasarCipher - string:Symbol", () => {
	expect(() => caesarCipher(Symbol("foo"), 2)).toThrow();
});
// #endregion

// #region ceasarCipher - shift types
test("caesarCipher - shift:null", () => {
	expect(() => caesarCipher(2, null)).toThrow();
});

test("caesarCipher - shift:undefined", () => {
	expect(() => caesarCipher(2, undefined)).toThrow();
});

test("caesarCipher - shift:true", () => {
	expect(() => caesarCipher(2, true)).toThrow();
});

test("caesarCipher - shift:false", () => {
	expect(() => caesarCipher(2, false)).toThrow();
});

test("caesarCipher - shift:obj", () => {
	expect(() => caesarCipher(2, {})).toThrow();
});

test("caesarCipher - shift:function", () => {
	expect(() => caesarCipher(2, () => console.log("bleh"))).toThrow();
});

test("caesarCipher - shift:string", () => {
	expect(() => caesarCipher(2, "hello")).toThrow();
});

test("caesarCipher - shift:BigInt", () => {
	expect(() => caesarCipher(2, BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
});

test("caesarCipher - shift:Symbol", () => {
	expect(() => caesarCipher(2, Symbol("foo"))).toThrow();
});
// #endregion
// #endregion