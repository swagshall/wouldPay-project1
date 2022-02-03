// // fetch statement for amazon API //

// var amazonURL = 'https://amazon-products1.p.rapidapi.com/search?country=US&query=MacBook%2BPro&page=1';

// fetch(amazonURL, {
// 	"method": "GET",
// 	"headers": {
// 		 'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
    'x-rapidapi-key': '42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10'
// 	}
// })
// .then(function (response){
// 	return response.json();
// })
// .then (function (data){
// 	console.log(data);
// });



// fetch statement for Walmart API //

var walmartURL = 'https://walmart2.p.rapidapi.com/search?query=airpods+pro';

fetch(walmartURL, {
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
    console.log(data.items[0]);
    $('.card-text').text(data.items[0].brand);
    $('.card-text').text(data.items[0].description)

});




