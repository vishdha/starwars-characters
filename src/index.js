var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-characters.json');

module.exports = {
	all: starWarsNames,
	random:uniqueRandomArray(starWarsNames)
};