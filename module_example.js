

const add = (a,b) => {
	console.log(`the sum of a + b = ${a+b}`);
	return a + b; 
};

const subtract = (a,b) => {
	console.log(`the difference of a - b = ${a-b}`);
	return a - b;
};

module.exports = {
	add: add,
	subtract: subtract,

}





