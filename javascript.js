$(document).ready(function () {
	var clientID = "MjEzNjE5NjJ8MTYwMzMzNDkwMi4zNTQ2ODkx";
	var queryURL = "https://api.seatgeek.com/2/events?client_id=" + clientID;

	function searchSeatGeeks(passedPostalCode, passedEvent, passedDate) {
		if(passedPostalCode.length > 0){
			queryURL = queryURL+"&postal_code="+passedPostalCode;
		}
		if(passedEvent.length > 0 ){
			queryURL = queryURL+"&q="+passedEvent;
		}
		if(passedDate.length > 0){
			queryURL = queryURL+"&datetime_utc.gt="+passedDate;
		}
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log(response);
			console.log(queryURL);

			var allEvents = response.events;

			// var city = $("city").text("City: " + response.events);
			// var event = $("event").text("Event " + response.events);
			// var date = $("date").text("Date " + response.events);

			// console.log("City: " + JSON.stringify(response.events[0].venue.city));
			// console.log("Event " + JSON.stringify(response.events[0].title));
			// console.log("Date " + JSON.stringify(response.events[0].datetime_utc));

			$("#event-info").empty();
			for (var i = 0; i < allEvents.length; i++) {
				console.log("City: " + JSON.stringify(allEvents[i].venue.city));
				console.log("Event " + JSON.stringify(allEvents[i].title));
				console.log("Date " + JSON.stringify(allEvents[i].datetime_utc));

				var city = $("<div>");
				city.text("City: " + allEvents[i].venue.city);
				var event = $("<div>");
				event.text("Event " + allEvents[i].title);
				var date = $("<div>");
				date.text("Date " + allEvents[i].datetime_utc);
				$("#event-info").append(city, event, date);
			}
		})
	}


	// Event handler for user clicking the select-artist button
	$("#select-event").on("click", function (event) {
		// Preventing the button from trying to submit the form
		event.preventDefault();
		// Storing the artist name
		var postalCodeInput = $("#postal-code-input").val().trim();
		var eventInput = $("#event-input").val().trim();
		var dateInput = $("#date-input").val().trim();

		// Running the searchBandsInTown function(passing in the artist as an argument)
		searchSeatGeeks(postalCodeInput, eventInput, dateInput);
	})
});














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



// })