
function capitalize(string) {
	if(string?.constructor !== String) {
		throw new Error("capitalize - param 'string' must be a String!");
	}

	return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalize};