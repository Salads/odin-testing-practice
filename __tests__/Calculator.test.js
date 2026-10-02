import { test, expect } from "@jest/globals";
import { Calculator } from "../Calculator";

// #region Calculator - Add
test("calculator - add - two numbers", () => {
	expect((new Calculator()).add(1, 2)).toBe(3);
});

// #region Calculator - Add - x types
test("calculator - add - x:null", () => {
	expect(() => (new Calculator()).add(null, 2)).toThrow();
});

test("calculator - add - x:undefined", () => {
	expect(() => (new Calculator()).add(undefined, 2)).toThrow();
});

test("calculator - add - x:true", () => {
	expect(() => (new Calculator()).add(true, 2)).toThrow();
});

test("calculator - add - x:false", () => {
	expect(() => (new Calculator()).add(false, 2)).toThrow();
});

test("calculator - add - x:obj", () => {
	expect(() => (new Calculator()).add({}, 2)).toThrow();
});

test("calculator - add - x:function", () => {
	expect(() => (new Calculator()).add(() => console.log("bleh"), 2)).toThrow();
});

test("calculator - add - x:string", () => {
	expect(() => (new Calculator()).add("hello", 2)).toThrow();
});

test("calculator - add - x:BigInt", () => {
	expect(() => (new Calculator()).add(BigInt(Number.MAX_SAFE_INTEGER), 2)).toThrow();
});

test("calculator - add - x:Symbol", () => {
	expect(() => (new Calculator()).add(Symbol("foo"), 2)).toThrow();
});
// #endregion

// #region Calculator - Add - y types
test("calculator - add - y:null", () => {
	expect(() => (new Calculator()).add(2, null)).toThrow();
});

test("calculator - add - y:undefined", () => {
	expect(() => (new Calculator()).add(2, undefined)).toThrow();
});

test("calculator - add - y:true", () => {
	expect(() => (new Calculator()).add(2, true)).toThrow();
});

test("calculator - add - y:false", () => {
	expect(() => (new Calculator()).add(2, false)).toThrow();
});

test("calculator - add - y:obj", () => {
	expect(() => (new Calculator()).add(2, {})).toThrow();
});

test("calculator - add - y:function", () => {
	expect(() => (new Calculator()).add(2, () => console.log("bleh"))).toThrow();
});

test("calculator - add - y:string", () => {
	expect(() => (new Calculator()).add(2, "hello")).toThrow();
});

test("calculator - add - y:BigInt", () => {
	expect(() => (new Calculator()).add(2, BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
});

test("calculator - add - y:Symbol", () => {
	expect(() => (new Calculator()).add(2, Symbol("foo"))).toThrow();
});
// #endregion

// #endregion

// #region Calculator - Subtract
test("calculator - Subtract - two numbers", () => {
	expect((new Calculator()).subtract(3, 2)).toBe(1);
});

// #region Calculator - Subtract - x types
test("calculator - Subtract - x:null", () => {
	expect(() => (new Calculator()).subtract(null, 2)).toThrow();
});

test("calculator - Subtract - x:undefined", () => {
	expect(() => (new Calculator()).subtract(undefined, 2)).toThrow();
});

test("calculator - Subtract - x:true", () => {
	expect(() => (new Calculator()).subtract(true, 2)).toThrow();
});

test("calculator - Subtract - x:false", () => {
	expect(() => (new Calculator()).subtract(false, 2)).toThrow();
});

test("calculator - Subtract - x:obj", () => {
	expect(() => (new Calculator()).subtract({}, 2)).toThrow();
});

test("calculator - Subtract - x:function", () => {
	expect(() => (new Calculator()).subtract(() => console.log("bleh"), 2)).toThrow();
});

test("calculator - Subtract - x:string", () => {
	expect(() => (new Calculator()).subtract("hello", 2)).toThrow();
});

test("calculator - Subtract - x:BigInt", () => {
	expect(() => (new Calculator()).subtract(BigInt(Number.MAX_SAFE_INTEGER), 2)).toThrow();
});

test("calculator - Subtract - x:Symbol", () => {
	expect(() => (new Calculator()).subtract(Symbol("foo"), 2)).toThrow();
});
// #endregion

// #region Calculator - Subtract - y types
test("calculator - Subtract - y:null", () => {
	expect(() => (new Calculator()).subtract(2, null)).toThrow();
});

test("calculator - Subtract - y:undefined", () => {
	expect(() => (new Calculator()).subtract(2, undefined)).toThrow();
});

test("calculator - Subtract - y:true", () => {
	expect(() => (new Calculator()).subtract(2, true)).toThrow();
});

test("calculator - Subtract - y:false", () => {
	expect(() => (new Calculator()).subtract(2, false)).toThrow();
});

test("calculator - Subtract - y:obj", () => {
	expect(() => (new Calculator()).subtract(2, {})).toThrow();
});

test("calculator - Subtract - y:function", () => {
	expect(() => (new Calculator()).subtract(2, () => console.log("bleh"))).toThrow();
});

test("calculator - Subtract - y:string", () => {
	expect(() => (new Calculator()).subtract(2, "hello")).toThrow();
});

test("calculator - Subtract - y:BigInt", () => {
	expect(() => (new Calculator()).subtract(2, BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
});

test("calculator - Subtract - y:Symbol", () => {
	expect(() => (new Calculator()).subtract(2, Symbol("foo"))).toThrow();
});
// #endregion

// #endregion

// #region Calculator - Multiply
test("calculator - Multiply - two numbers", () => {
	expect((new Calculator()).multiply(3, 2)).toBe(6);
});

// #region Calculator - Multiply - x types
test("calculator - Multiply - x:null", () => {
	expect(() => (new Calculator()).multiply(null, 2)).toThrow();
});

test("calculator - Multiply - x:undefined", () => {
	expect(() => (new Calculator()).multiply(undefined, 2)).toThrow();
});

test("calculator - Multiply - x:true", () => {
	expect(() => (new Calculator()).multiply(true, 2)).toThrow();
});

test("calculator - Multiply - x:false", () => {
	expect(() => (new Calculator()).multiply(false, 2)).toThrow();
});

test("calculator - Multiply - x:obj", () => {
	expect(() => (new Calculator()).multiply({}, 2)).toThrow();
});

test("calculator - Multiply - x:function", () => {
	expect(() => (new Calculator()).multiply(() => console.log("bleh"), 2)).toThrow();
});

test("calculator - Multiply - x:string", () => {
	expect(() => (new Calculator()).multiply("hello", 2)).toThrow();
});

test("calculator - Multiply - x:BigInt", () => {
	expect(() => (new Calculator()).multiply(BigInt(Number.MAX_SAFE_INTEGER), 2)).toThrow();
});

test("calculator - Multiply - x:Symbol", () => {
	expect(() => (new Calculator()).multiply(Symbol("foo"), 2)).toThrow();
});
// #endregion

// #region Calculator - Multiply - y types
test("calculator - Multiply - y:null", () => {
	expect(() => (new Calculator()).multiply(2, null)).toThrow();
});

test("calculator - Multiply - y:undefined", () => {
	expect(() => (new Calculator()).multiply(2, undefined)).toThrow();
});

test("calculator - Multiply - y:true", () => {
	expect(() => (new Calculator()).multiply(2, true)).toThrow();
});

test("calculator - Multiply - y:false", () => {
	expect(() => (new Calculator()).multiply(2, false)).toThrow();
});

test("calculator - Multiply - y:obj", () => {
	expect(() => (new Calculator()).multiply(2, {})).toThrow();
});

test("calculator - Multiply - y:function", () => {
	expect(() => (new Calculator()).multiply(2, () => console.log("bleh"))).toThrow();
});

test("calculator - Multiply - y:string", () => {
	expect(() => (new Calculator()).multiply(2, "hello")).toThrow();
});

test("calculator - Multiply - y:BigInt", () => {
	expect(() => (new Calculator()).multiply(2, BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
});

test("calculator - Multiply - y:Symbol", () => {
	expect(() => (new Calculator()).multiply(2, Symbol("foo"))).toThrow();
});
// #endregion

// #endregion

// #region Calculator - Divide
test("calculator - Divide - two numbers", () => {
	expect((new Calculator()).divide(3, 2)).toBeCloseTo(1.5);
});

test("calculator - Divide - divide by zero", () => {
	expect(() => (new Calculator()).divide(3, 0)).toThrow();
});

// #region Calculator - Divide - x types
test("calculator - Divide - x:null", () => {
	expect(() => (new Calculator()).divide(null, 2)).toThrow();
});

test("calculator - Divide - x:undefined", () => {
	expect(() => (new Calculator()).divide(undefined, 2)).toThrow();
});

test("calculator - Divide - x:true", () => {
	expect(() => (new Calculator()).divide(true, 2)).toThrow();
});

test("calculator - Divide - x:false", () => {
	expect(() => (new Calculator()).divide(false, 2)).toThrow();
});

test("calculator - Divide - x:obj", () => {
	expect(() => (new Calculator()).divide({}, 2)).toThrow();
});

test("calculator - Divide - x:function", () => {
	expect(() => (new Calculator()).divide(() => console.log("bleh"), 2)).toThrow();
});

test("calculator - Divide - x:string", () => {
	expect(() => (new Calculator()).divide("hello", 2)).toThrow();
});

test("calculator - Divide - x:BigInt", () => {
	expect(() => (new Calculator()).divide(BigInt(Number.MAX_SAFE_INTEGER), 2)).toThrow();
});

test("calculator - Divide - x:Symbol", () => {
	expect(() => (new Calculator()).divide(Symbol("foo"), 2)).toThrow();
});
// #endregion

// #region Calculator - Divide - y types
test("calculator - Divide - y:null", () => {
	expect(() => (new Calculator()).divide(2, null)).toThrow();
});

test("calculator - Divide - y:undefined", () => {
	expect(() => (new Calculator()).divide(2, undefined)).toThrow();
});

test("calculator - Divide - y:true", () => {
	expect(() => (new Calculator()).divide(2, true)).toThrow();
});

test("calculator - Divide - y:false", () => {
	expect(() => (new Calculator()).divide(2, false)).toThrow();
});

test("calculator - Divide - y:obj", () => {
	expect(() => (new Calculator()).divide(2, {})).toThrow();
});

test("calculator - Divide - y:function", () => {
	expect(() => (new Calculator()).divide(2, () => console.log("bleh"))).toThrow();
});

test("calculator - Divide - y:string", () => {
	expect(() => (new Calculator()).divide(2, "hello")).toThrow();
});

test("calculator - Divide - y:BigInt", () => {
	expect(() => (new Calculator()).divide(2, BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
});

test("calculator - Divide - y:Symbol", () => {
	expect(() => (new Calculator()).divide(2, Symbol("foo"))).toThrow();
});
// #endregion

// #endregion