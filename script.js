
var picGrid = document.querySelector('#selectable');
console.log(picGrid);



//Selector Statements - Large Page Elements //
var content = document.querySelector("#content");
var header = document.querySelector('#header');

console.log(content);
console.log(header);

//Selector Statements for Side Bar - Amazon //
var amazonSearchArea = document.querySelector("#amazonProduct");
var amazonSubmit = document.querySelector('#submitBtn1');

//Selector Statements for Side Bar - Walmart //
var walmartSearchArea = document.querySelector("#walmartProduct");
var walmartSubmit = document.querySelector('#submitBtn2');

// Otto Selectors //

var ottoSearchArea = document.querySelector('#ottoProduct')
var ottoSubmit = document.querySelector('#submitBtn3')

console.log(walmartSubmit, amazonSubmit);

// Amazon Card Query Selectors //
var amazonName = document.querySelector('#amazonName');
var amazonReviews = document.querySelector('#amazonReviews');
var amazonStars = document.querySelector('#amazonStars');
var amazonPrice = document.querySelector('#amazonPrice');
var amazonImage = document.querySelector('#amazonImage');

console.log(amazonName,amazonReviews,amazonStars,amazonImage);

// Walmart Card Query Selectors //
var walmartName = document.querySelector('#walmartName');
var walmartReviews = document.querySelector('#walmartReviews');
var walmartStars = document.querySelector('#walmartStars');
var walmartPrice = document.querySelector('#walmartPrice');
var walmartImage = document.querySelector('#walmartImage');


// Otto Query Selectors //

var ottoName = document.querySelector('#ottoName');
var ottoReviews = document.querySelector('#ottoReviews');
var ottoStars = document.querySelector('#ottoStars');
var ottoPrice = document.querySelector('#ottoPrice');
var ottoImage = document.querySelector('#ottoImage');






console.log(walmartName,walmartReviews,walmartStars,walmartImage);

// End of Query Selectors//

amazonSubmit.addEventListener('click', amazonFetch);
walmartSubmit.addEventListener ('click', walmartFetch);
ottoSubmit.addEventListener('click', ottoFetch);



// // Fetch Statements  //

// // Amazon Fetch Function // 

var amazonS= [];

function amazonFetch (event){

	saveLastSearchAmazon();

let amazonSearch = amazonSearchArea.value;
var amazonUrl = 'https://amazon-products1.p.rapidapi.com/search?country=US&query=' + amazonSearch + '&page=1';


	event.preventDefault();
	console.log('amazon');

fetch(amazonUrl , {
	"method": "GET",
	"headers": {
			"x-rapidapi-host": "amazon-products1.p.rapidapi.com",
		"x-rapidapi-key": "87aca8930emshd8497cbafc968aap1d9d5ajsndbc21fa64a25"
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
amazonPrice.textContent = data.results[0].prices.current_price;

for (var i = 1; i < data.results.length; i++)

{

let newProduct = document.createElement('div');
let newRating = document.createElement('h5');
let newLink = document.createElement('a')
let newImage = document.createElement('img');
let amazonTag = document.createElement('h5');


newRating.textContent = "Rating: " + data.results[i].reviews.stars;
newLink.setAttribute('href', data.results[i].reviews.full_link);
newImage.setAttribute('src', data.results[i].image);
amazonTag.textContent = "Amazon";

newProduct.appendChild(newRating);
newProduct.appendChild(newLink);
newLink.appendChild(newImage);
newProduct.appendChild(amazonTag);
picGrid.appendChild(newProduct);

}
renderLastSearchAmazon();
});
}

//save to localstorage for amazon
function saveLastSearchAmazon(){
	console.log(amazonSearchArea);
	var lastSearchAmazon = amazonSearchArea.value;
	amazonS.push(lastSearchAmazon)
	localStorage.setItem("amazonS", JSON.stringify(amazonS));
};

//render last search
function renderLastSearchAmazon(){
	var lastSearchAmazonRender = JSON.parse(localStorage.getItem(lastSearchAmazon));
	if (lastSearchAmazonRender !== null){
		document.getElementById("amazonProduct").innerHTML = lastSearchAmazonRender.amazonSearchArea;
	} else {
		return;
	}
}

// // Walmart Fetch Function //

function walmartFetch(event) {
	event.preventDefault();
	console.log('walmart');

let walmartSearch = walmartSearchArea.value;	
var walmartUrl = 'https://walmart2.p.rapidapi.com/search?query=' + walmartSearch;

fetch(walmartUrl, {
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
		console.log('hello motto');

walmartName.textContent = data.items[0].title;
walmartReviews.textContent = data.items[0].numReviews;
walmartStars.textContent= data.items[0].customerRating;
walmartPrice.textContent = data.items[0].primaryOffer.offerPrice;
walmartImage.setAttribute('src', data.items[0].imageUrl);

for (var i = 1; i < data.items.length; i++)

{

let newProduct = document.createElement('div');
let newRating = document.createElement('h5');
let newImage = document.createElement('img');
let walmartTag = document.createElement('h5');


newRating.textContent = 'Rating: ' + data.items[i].customerRating;
newImage.setAttribute('src', data.items[i].imageUrl);
walmartTag.textContent = "Walmart";

newProduct.appendChild(newRating);
newProduct.appendChild(newImage);
newProduct.appendChild(walmartTag);

picGrid.appendChild(newProduct)

}
	});
}



function ottoFetch (event){

	let ottoSearch = ottoSearchArea.value;
	var ottoUrl = "https://axesso-otto-data-service.p.rapidapi.com/ott/otto-search-by-keyword?keyword=" + ottoSearch + "&page=1&sortBy=topseller";
	
		event.preventDefault();
		console.log('otto');
	fetch(ottoUrl , {
		"method": "GET",
		"headers": {
			'x-rapidapi-host': 'axesso-otto-data-service.p.rapidapi.com',
			'x-rapidapi-key': '42cf103a4fmsh68f4de9dafb003cp1f5e10jsn97190e2b7d10'
		}
	})
	.then(function (response){
		return response.json();
	})
	.then (function (data){
		console.log(data);
	ottoName.textContent = data.searchProductDetails[0].productDescription;
	ottoReviews.textContent = data.searchProductDetails[0].countReview;
	ottoPrice.textContent = data.searchProductDetails[0].retailPrice;
	ottoStars.textContent = data.searchProductDetails[0].productRating;
	ottoImage.setAttribute('src', data.searchProductDetails[0].imgUrl);

for (var i = 1; i < data.searchProductDetails.length; i++)

{

let ottoProduct = document.createElement('div');
let ottoRating = document.createElement('h5');
let ottoImage = document.createElement('img');
let ottoTag = document.createElement('h5');

ottoRating.textContent = "Rating: " + data.searchProductDetails[i].productRating;
ottoImage.setAttribute('src', data.searchProductDetails[i].imgUrl);
ottoTag.textContent = "Otto";

ottoProduct.appendChild(ottoRating);
ottoProduct.appendChild(ottoImage);
ottoProduct.appendChild(ottoTag);
picGrid.appendChild(ottoProduct);
}


	});
	}











// // // var displayAmazonFetch = function(amazonQuery){
// // // 	productContainer.textContent = "";
// // // 	var productName = document.createElement("span");
// // // 	productName.textContent = $('.card-text').text(data.results[0].title);

	
// // // }


// // var submitHandler = function (event){
// // 	event.preventDefault();
// // 	var userInput = amazonQuery.ariaValueMax.trim();
// // 	if (userInput){
// // 		amazonFetch(userInput);
// // 		userOutput.unshift({userInput});
// // 		userInput.value = "";
// // 	} else {
// // 		alert("Please enter a product name");
// // 	}
// // 	saveInput();
// // }

// // var saveInput= function(){
// // 	localStorage.setItem("userOutput", JSON.stringify(userOUtput))
// // };





// // // fetch statement for Walmart API //
// // //       Searching for AirPod Pros





// var userOutput = [];
// console.log(userOutput);