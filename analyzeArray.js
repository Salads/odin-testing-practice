
function analyzeArray(array) {
	if(array?.constructor !== Array) {
		throw new Error("analyzeArray - param 'array' must be an Array!");
	}

	if(array.length === 0) {
		return {average: 0, min: 0, max: 0, length: 0};
	}

	let total = Math.trunc(
		array.reduce((accum, cur) => {
			return accum + cur;
		}, 0));

	return {
		average: total / array.length,
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length
	}
}

export { analyzeArray };