const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isUpper(charCode) {
	if(charCode?.constructor !== Number) {
		throw new Error("isUpper - charStr is not a Number!");
	}

	return charCode >= 65 && charCode <= 90;
}

function isLower(charCode) {
	if(charCode?.constructor !== Number) {
		throw new Error("isUpper - charStr is not a Number!");
	}

	return charCode >= 97 && charCode <= 122;
}

function isAlpha(charCode) {
	if(charCode?.constructor !== Number) {
		throw new Error("isAlpha - charStr is not a Number!");
	}

	// Is Upper || Is Lower
	return isUpper(charCode) || isLower(charCode);
}

function findIdx(char) {
	let searchResult = lowercase.search(char);
	if(searchResult == -1) {
		searchResult = uppercase.search(char);
	}

	return searchResult;
}

function caesarCipher(string, shift) {
	if(string?.constructor !== String) {
		throw new Error("caesarCipher param 'string' must be a String!");
	}

	if(shift?.constructor !== Number) {
		throw new Error("caesarCipher param 'shift' must be a Number!");
	}

	if(string.length === 0) {
		return "";
	}

	let result = "";
	let iShift = Math.trunc(shift);

	for(let char of string) {
		let codePoint = char.charCodeAt(0);
		if(!isAlpha(codePoint)) {
			result += char;
			continue;
		}

		let idx = findIdx(char);
		let shiftedIdx = (idx + iShift) % 26;
		if(isLower(codePoint)) {
			result += lowercase[shiftedIdx];
		}
		else {
			result += uppercase[shiftedIdx];
		}
	}

	return result;
}

export { caesarCipher };