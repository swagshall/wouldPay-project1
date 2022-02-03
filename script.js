
//Selector Statements - Large Page Elements //
var content = document.querySelector("#content");
var header = document.querySelector('#header');

console.log(content);
console.log(header);

//Selector Statements for Side Bar - Amazon //
var amazonSearch = document.querySelector("#amazonProduct");
var amazonSubmit = document.querySelector('#submitBtn1');

//Selector Statements for Side Bar - Walmart //
var walmartSearch = document.querySelector("#walmartProduct");
var walmartSubmit = document.querySelector('#submitBtn2');

console.log(walmartSearch, walmartSubmit, amazonSearch, amazonSubmit);


// Amazon Card Query Selectors //
var amazonName = document.querySelector('#amazonName');
var amazonReviews = document.querySelector('#amazonReviews');
var amazonStars = document.querySelector('#amazonStars');
var amazonImage = document.querySelector('#amazonImage');

console.log(amazonName,amazonReviews,amazonStars,amazonImage);


// Walmart Card Query Selectors //
var walmartName = document.querySelector('#walmartName');
var walmartReviews = document.querySelector('#walmartReviews');
var walmartStars = document.querySelector('#walmartStars');
var walmartImage = document.querySelector('#walmartImage');

console.log(walmartName,walmartReviews,walmartStars,walmartImage);

// End of Query Selectors//

// Adding Event Handlers to Submit Buttions  //

amazonSubmit.addEventListener('click', amazonFetch);
walmartSubmit.addEventListener('click', walmartFetch);


// Fetch Statements  //

// Amazon Fetch Function // 
//varible for userinput for search
var userInputAmazon = ""

function amazonFetch (event){
	event.preventDefault();
	console.log('amazon');
	fetch("https://amazon-products1.p.rapidapi.com/search?country=US&query=" + userInputAmazon, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "amazon-products1.p.rapidapi.com",
			"x-rapidapi-key": "9473a74dfamshd8d87205311e913p1a7df2jsneb5c88b554ea"
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

// Walmart Fetch Function //

function walmartFetch(event) {
	event.preventDefault();
	console.log('walmart');

	fetch("https://walmart2.p.rapidapi.com/search?query=airpods", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "walmart2.p.rapidapi.com",
			"x-rapidapi-key": "9473a74dfamshd8d87205311e913p1a7df2jsneb5c88b554ea"
		}
	})
	.then(function (response){
		return response.json();
	})
	.then (function (data){
		console.log(data);
walmartName.textContent = data.items[0].title;
walmartReviews.textContent = data.items[0].numReviews;
walmartStars.textContent= data.items[0].customerRating;
walmartImage.setAttribute('src', data.items[0].imageUrl);

	});
}












// // var displayAmazonFetch = function(amazonQuery){
// // 	productContainer.textContent = "";
// // 	var productName = document.createElement("span");
// // 	productName.textContent = $('.card-text').text(data.results[0].title);

	
// // }


// var submitHandler = function (event){
// 	event.preventDefault();
// 	var userInput = amazonQuery.ariaValueMax.trim();
// 	if (userInput){
// 		amazonFetch(userInput);
// 		userOutput.unshift({userInput});
// 		userInput.value = "";
// 	} else {
// 		alert("Please enter a product name");
// 	}
// 	saveInput();
// }

// var saveInput= function(){
// 	localStorage.setItem("userOutput", JSON.stringify(userOUtput))
// };





// // fetch statement for Walmart API //
// //       Searching for AirPod Pros





var userOutput = [];
console.log(userOutput);
