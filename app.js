const url = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cf4f4c72eamsh065efa2a0112b62p1ea0d1jsn72174e23d7be',
		'x-rapidapi-host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

async function main(){

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
main();


//{"continent":"Asia","country":"Nepal","zipCode":null,"accuracyRadius":1000,"flag":"https://ipworld.info/static/flags/np.png","city":"Kathmandu","timezone":"Asia/Kathmandu","latitude":27.7142,"countryGeoNameId":1282988,"gmt":"(GMT+05:45) Katmandu","network":"43.245.84.0/22","currencyName":"Nepalese Rupee","countryNativeName":"नपल","stateGeoNameId":12095449,"phoneCode":"+977","state":"Province 3","continentCode":"AS","longitude":85.3145,"currencyNamePlural":"Nepalese rupees","cityGeoNameId":1283240,"languages":"ne","numOfCities":56,"org":"Vianet Communications Pvt. Ltd.","ip":"43.245.86.115","currencySymbol":"NPRs","currencySymbolNative":"नेरू","isEU":"No","countryTLD":".np","countryCapital":"Kathmandu","metroCode":null,"continentGeoNameId":6255147,"stateCode":"P3","countryISO2":"NP","numOfStates":19,"countryISO3":"NPL","currencyCode":"NPR","asNo":45650,"status":200}
