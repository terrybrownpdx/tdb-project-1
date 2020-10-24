$(document).ready(function () {
	var clientID = "MjEzNjE5NjJ8MTYwMzMzNDkwMi4zNTQ2ODkx";
	var queryURL = "https://api.seatgeek.com/2/events?client_id=" + clientID;

	//function searchSeatGeeks(event){
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {
		console.log(response);
		console.log(queryURL);

		var city = $(".city").text("City: " + response.events);
		var event = $("event").text("Event " + response.events);
		var date = $("date").text("Date " + response.events);

		console.log("City: " + JSON.stringify(response.events[0].venue.city));
		console.log("Event " + JSON.stringify(response.events[0].title));
		console.log("Date " + JSON.stringify(response.events[0].announce_date));

		for (var i = 0; i < events.venue.city.length ; i ++){
			console.log(events[i])
		}

		$("#event-info").empty();
		$("#event-info").append(city, event, date);
	});
	
		// Event handler for user clicking the select-artist button
		$("#select-event").on("click", function (event) {
			// Preventing the button from trying to submit the form
			event.preventDefault();
			// Storing the artist name
			var cityInput = $("#city-input").val().trim();
			var eventInput = $("#event-input").val().trim();
			var dateInput = $("#date-input").val().trim();

		// Running the searchBandsInTown function(passing in the artist as an argument)
		//searchSeatGeeks(cityInput, eventInput, dateInput);


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