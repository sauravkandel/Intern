// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// Function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// When user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// Function getresults
function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}

// Display results after conversion
function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// When user click on reset button
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};

/* Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
const search = document.querySelector(".searchBox");
const convert = document.querySelector(".convert");
const fromCurrency = document.querySelector(".from");
const toCurrency = document.querySelector(".to");
const finalValue = document.querySelector(".finalValue");
const finalAmount = document.getElementById("finalAmount");

let resultFrom;
let resultTo;
let searchValue;
let selectedDate = new Date().toISOString().slice(0, 10); // get today's date in ISO format (YYYY-MM-DD)

// Event when currency is changed
fromCurrency.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', (e) => {
	searchValue = e.target.value;
});

// When user clicks, it calls function getResults
convert.addEventListener("click", getResults);

// Function getResults
function getResults() {
	fetch(`${api}/${selectedDate}`)
		.then(response => response.json())
		.then(displayResults)
		.catch(error => console.error(error));
}

// Display results after conversion
function displayResults(currency) {
	const fromRate = currency.rates[resultFrom];
	const toRate = currency.rates[resultTo];
	finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}

// When user clicks on reset button
function clearVal() {
	window.location.reload();
	finalValue.innerHTML = "";
}

*/
