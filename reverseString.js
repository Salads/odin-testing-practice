function reverseString(string) {
	if(string?.constructor !== String) {
		throw new Error("reverseString param 'string' must be a String!");
	}

	return string.split("").reverse().join("");
}

export {reverseString};