// // fetch statement for amazon API //
var productContainer = document.querySelector("#card-container");
var productSelect = document.querySelector("#product");

var submitBtn = document.querySelector("#submitBtn");
var userOutput = [];

// Amazon Query Selectors //
var amazonName = document.querySelector('#amazonName');
var amazonReviews = document.querySelector('#amazonReviews');
var amazonStars = document.querySelector('#amazonStars');
var amazonImage = document.querySelector('#amazonImage');


// Walmart Query Selectors //
var walmartName = document.querySelector('#amazonName');
var walmartReviews = document.querySelector('#amazonReviews');
var walmartStars = document.querySelector('#amazonStars');
var wlalmartmage = document.querySelector('#amazonImage');


console.log(productContainer);
console.log(productSelect);
console.log(amazonName);
console.log(amazonImage);
console.log(walmartName);
console.log(walmartStars);



var amazonFetch = function(event){
	event.preventDefault();
	console.log('hello')

var amazonURL = 'https://amazon-products1.p.rapidapi.com/search?country=US&query=samsung';

fetch(amazonURL, {
	"method": "GET",
	"headers": {
  'x-rapidapi-host': 'amazon-products1.p.rapidapi.com',
    'x-rapidapi-key': '42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10'
	}
})
.then(function (response){
	return response.json();
})
.then (function (data){
	console.log(data);
amazonName.textContent = data.results[0].title;
amazonReviews.textContent = data.results[0].reviews.total_reviews;
amazonStars.textContent= data.results[0].reviews.stars;
amazonImage.setAttribute('src', data.results[0].image);


});

}

// var displayAmazonFetch = function(amazonQuery){
// 	productContainer.textContent = "";
// 	var productName = document.createElement("span");
// 	productName.textContent = $('.card-text').text(data.results[0].title);

	
// }


var submitHandler = function (event){
	event.preventDefault();
	var userInput = amazonQuery.ariaValueMax.trim();
	if (userInput){
		amazonFetch(userInput);
		userOutput.unshift({userInput});
		userInput.value = "";
	} else {
		alert("Please enter a product name");
	}
	saveInput();
}

var saveInput= function(){
	localStorage.setItem("userOutput", JSON.stringify(userOUtput))
};

submitBtn.addEventListener('click', amazonFetch);




// fetch statement for Walmart API //
//       Searching for AirPod Pros

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
     console.log(data.items[0])  

	 $('.card-text').text(data.items[0].custom);
	 $('#product').text(data.items[0].brand);


/// All of the DOM manipul.atiion is going to happen in here //

    $('#descriptiion').text(data.items[0].description);

 
});

