// fetch statement for amazon API //

fetch("https://amazon-products1.p.rapidapi.com/search?country=US&query=MacBook%2BPro&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon-products1.p.rapidapi.com",
		"x-rapidapi-key": "47388dc074msh8f2434201e3f0d0p12cfd8jsnd9b2a609b60a"
	}
})
.then(function (response){
	return response.json();
})
.then (function (data){
	console.log(data);
});



// fetch statemtn for Walmart API //

fetch("https://walmart2.p.rapidapi.com/search?query=xiaomi", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "walmart2.p.rapidapi.com",
		"x-rapidapi-key": "42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10"
	}
})
.then(function (response){
	return response.json();
})
.then (function (data){
	console.log(data);
});

