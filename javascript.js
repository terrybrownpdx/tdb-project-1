$(document).ready(function () {
	var clientID = "MjEzNjE5NjJ8MTYwMzMzNDkwMi4zNTQ2ODkx";
	var queryURL = "https://api.seatgeek.com/2/events?client_id=" + clientID;

	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {
		console.log(response);
		console.log(queryURL);


	//$(".city").text("City: " + response.events.array.title);
	$("event").text("Event " + response.events.title);
	//$("date").text("Date " + response.events.time_tbd );

	//console.log("City: " + response.events);
	console.log("event " + response.events.title);
	//console.log("Date " + response.events.time_tbd );
	})

	// var apiKey = "5c2c54600emsh45fe6fce3e37e47p19f3d9jsn393344917d9e";
	// var queryURL = "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm";
	//  $.ajax ({
	//  	url: queryURL,
	//  	method: "GET",
	//  }).then(function(response){
	// 	console.log(response);
	//  	console.log(queryURL);
	//  })

	// const settings = {
	// 	"async": true,
	// 	"crossDomain": true,
	// 	"url": "https://rapidapi.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm",
	// 	"method": "GET",
	// 	"headers": {
	// 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	// 		"x-rapidapi-key": "5c2c54600emsh45fe6fce3e37e47p19f3d9jsn393344917d9e"
	// 	}
	// };

	// $.ajax(settings).done(function (response) {
	// 	console.log(response);
	// });



})