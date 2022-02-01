
// Fetch Statements for NewEgg API // https://rapidapi.com/ZombieBest/api/newegg-products/ //

fetch("https://newegg-products.p.rapidapi.com/product?url=https%253A%252F%252Fwww.newegg.com%252Fasus-geforce-rtx-3080-tuf-rtx3080-o10g-gaming%252Fp%252FN82E16814126452&itemno=N82E16814126452", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "newegg-products.p.rapidapi.com",
		"x-rapidapi-key": "42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Fetch Statements for Zombie Bestbuy API // https://rapidapi.com/ZombieBest/api/bestbuy-products/ //


fetch("https://bestbuy-products.p.rapidapi.com/product?url=https%253A%252F%252Fwww.bestbuy.com%252Fsite%252Fpro-wireless-controller-for-nintendo-switch%252F5748618.p%253FskuId%253D5748618&sku=5748618", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bestbuy-products.p.rapidapi.com",
		"x-rapidapi-key": "42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});