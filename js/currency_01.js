$(function() {

	const currencyEUR = $('.currency__EUR'),
		currencyUSD = $('.currency__USD');

	function getCurrency(){

		$.get(
		'http://data.fixer.io/api/latest',
		{'access_key': '1fe02a73d7b828bd2da2fdfa41d8e6f6'},

		function (response) {
		/*	console.log(response);
			console.log(response.base);
			console.log(response.rates.RUB); */
			
			currencyEUR.append(response.rates.RUB.toFixed(2));	
			currencyUSD.append((response.rates.RUB / response.rates.USD).toFixed(2));		
			}
		);
	}

	getCurrency();

});	
