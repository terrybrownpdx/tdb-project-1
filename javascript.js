$(document).ready(function () {
	var clientID = "MjEzNjE5NjJ8MTYwMzMzNDkwMi4zNTQ2ODkx";
	var queryURL = "https://api.seatgeek.com/2/events?client_id=" + clientID;

	function searchSeatGeeks(passedPostalCode, passedRange, passedEvent, passedDate) {
		if(passedPostalCode.length > 0){
			queryURL = queryURL+"&postal_code="+passedPostalCode;
			if(passedRange.length > 0){
				queryURL = queryURL+"&range="+passedRange+"mi";
			}
		}
		if(passedEvent.length > 0 ){
			queryURL = queryURL+"&q="+passedEvent;
		}
		if(passedDate.length > 0){
			queryURL = queryURL+"&datetime_utc.gte="+passedDate;
		}
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log(response);

			var allEvents = response.events;

			$("#event-table-body").empty();
			for (var i = 0; i < allEvents.length; i++) {

				// Add events to table.
				var row = $("<tr>");
				var date = $("<td>");
				date.text(allEvents[i].datetime_local);
				var city = $("<td>");
				city.text(allEvents[i].venue.city);
				var event = $("<td>");
				event.text(allEvents[i].title);

				row.append(date,city,event)
				$("#event-table-body").append(row);
			}
		})
	}

	// Event handler for user clicking the select-artist button
	$("#select-event").on("click", function (event) {
		// Preventing the button from trying to submit the form
		event.preventDefault();
		// Storing the artist name
		var postalCodeInput = $("#postal-code-input").val().trim();
		var rangeInput = $("#range-input").val().trim();
		var eventInput = $("#event-input").val().trim();
		var dateInput = $("#date-input").val().trim();

		// Running the searchBandsInTown function(passing in the artist as an argument)
		searchSeatGeeks(postalCodeInput, rangeInput, eventInput, dateInput);
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