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
