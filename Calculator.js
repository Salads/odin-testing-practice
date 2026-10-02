
class Calculator {
	add(x, y) {
		if(x?.constructor !== Number) {
			throw new Error("Calculator::add param 'x' must be a Number!");
		}

		if(y?.constructor !== Number) {
			throw new Error("Calculator::add param 'y' must be a Number!");
		}

		return x + y;
	}

	subtract(x, y) {
		if(x?.constructor !== Number) {
			throw new Error("Calculator::subtract param 'x' must be a Number!");
		}

		if(y?.constructor !== Number) {
			throw new Error("Calculator::subtract param 'y' must be a Number!");
		}

		return x - y;
	}

	multiply(x, y) {
		if(x?.constructor !== Number) {
			throw new Error("Calculator::multiply param 'x' must be a Number!");
		}

		if(y?.constructor !== Number) {
			throw new Error("Calculator::multiply param 'y' must be a Number!");
		}

		return x * y;
	}

	divide(x, y) {
		if(x?.constructor !== Number) {
			throw new Error("Calculator::divide param 'x' must be a Number!");
		}

		if(y?.constructor !== Number) {
			throw new Error("Calculator::divide param 'y' must be a Number!");
		}

		if(y === 0) {
			throw new Error("Calculator::divide param 'y' must be non-zero!");
		}

		return x / y;
	}
}

export { Calculator };