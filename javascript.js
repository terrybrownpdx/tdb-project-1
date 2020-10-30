$(document).ready(function () {

	// Variables
	var seatGeekClientID = "MjEzNjE5NjJ8MTYwMzMzNDkwMi4zNTQ2ODkx";
	var seatGeekQueryURL = "https://api.seatgeek.com/2/events?client_id=" + seatGeekClientID;
	var bestBookingID = ["6ef6b8bcd6msh049e9784b355cf7p1fd186jsn5da7453e823d", "e1bd599768msh95205a794692e24p104f6cjsn21629139eaec"];
	var bestBookingQueryURL = "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?";

	var postal = document.getElementById("postal-code-input");
	var event = document.getElementById("event-input");
	var date = document.getElementById("date-input");

	// Event Listeners
	// Event handler for user clicking the submit button
	$("#select-event").on("click", function (event) {
		// Preventing the button from trying to submit the form
		event.preventDefault();
		// Storing the artist name
		var postalCodeInput = $("#postal-code-input").val().trim();
		var rangeInput = $("#range-input").val().trim();
		var eventInput = $("#event-input").val().trim();
		var dateInput = $("#date-input").val().trim();		


		var postalStorageInput = postal.value;
		console.log(postalStorageInput);
		var eventStorageInput = event.text;
		console.log(eventStorageInput);

		localStorage.getItem(postalStorageInput);
		localStorage.getItem(eventStorageInput);
		localStorage.setItem(postalStorageInput, eventStorageInput);
		
		// Running the searchBandsInTown function(passing in the artist as an argument)
		searchSeatGeeks(postalCodeInput, rangeInput, eventInput, dateInput);
	});

	// Event handler for clicking the event to get hotel
	$("#event-table-body").on("click", function (event) {
		event.preventDefault();
		// Get the row details that were clicked on.
		var target = $(event.target);
		if (target.data("city") != null) {
			searchHotels(target.data("city"), target.data("country"), bestBookingID[0]);
		}
	});

	// Helper Functions
	// This function will call the seatgeek API and search for events that match the passed in parameters
	function searchSeatGeeks(passedPostalCode, passedRange, passedEvent, passedDate) {
		// Prepare queryURL
		if (passedPostalCode.length > 0) {
			seatGeekQueryURL = seatGeekQueryURL + "&postal_code=" + passedPostalCode;
			if (passedRange.length > 0) {
				seatGeekQueryURL = seatGeekQueryURL + "&range=" + passedRange + "mi";
			}
		}
		if (passedEvent.length > 0) {
			seatGeekQueryURL = seatGeekQueryURL + "&q=" + passedEvent;
		}
		if (passedDate.length > 0) {
			seatGeekQueryURL = seatGeekQueryURL + "&datetime_utc.gte=" + passedDate;
		}

		// Call API
		$.ajax({
			url: seatGeekQueryURL,
			method: "GET",
		}).then(function (response) {
			// update Web-site with results
			// console.log(response);

			var allEvents = response.events;
			$("#event-info").removeClass("invisible");
			$("#event-table-body").empty();
			for (var i = 0; i < allEvents.length; i++) {

				// create row with event details
				var row = $("<tr>");
				var date = $("<td>");
				date.text(allEvents[i].datetime_local);
				var city = $("<td>");
				city.text(allEvents[i].venue.city);
				var country = $("<td>");
				country.text(allEvents[i].venue.country);
				var event = $("<td>");
				event.text(allEvents[i].title);
				var hotel = $("<td>");
				hotel.text("Click Here");
				hotel.attr("data-country", allEvents[i].venue.country);
				hotel.attr("data-city", allEvents[i].venue.city);

				row.append(date, city, country, event, hotel);
				$("#event-table-body").append(row);
			}
		}).fail(function (error) {
			// Prepare and display modal error
			$("#errorModalHeader").text("Error:" + error.status);
			$("#errorModalDetail").text("Message:" + error.responseJSON.message);
			$("#alertModal").modal("show");
		});
	}

	// This function will call the best hotel API and return the recommended hotel in the area of the event.
	function searchHotels(city, country, apiKey) {
		// Prepare queryURL
		var bestBookingRequest = {
			async: true,
			crossDomain: true,
			url:
				bestBookingQueryURL + "cityName=" + city + "&countryName=" + country,
			method: "GET",
			headers: {
				"x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
				"x-rapidapi-key": apiKey,
			},
		};
		$.ajax(bestBookingRequest).then(function (response) {
			// console.log(response);

			// Clear existing hotel if showing or initialize hotel field
			$("#hotel").removeClass("invisible");
			var hotel = $("#hotel-table-body");
			hotel.empty();

			// create row with hotel details
			var row = $("<tr>");
			var name = $("<td>");
			name.text(response.name);
			var rating = $("<td>");
			rating.text(response.rating);
			var price = $("<td>");
			if (response.price != null) {
				price.text("price " + response.price);
			} else {
				price.text("check website for price");
			}
			var website = $("<td>");
			var link = $("<a>");
			link.attr("href", response.link);
			link.text(response.link);
			website.append(link);

			row.append(name, rating, price, website);
			hotel.append(row);

		}).fail(function (error) {
			// If reached limit try other apiKey (Gives 10 more tries)
			if ((error.status === 429) && (apiKey !== bestBookingID[1])) {
				searchHotels(city, country, bestBookingID[1]);
			} else {
				// console.log(error);
				// Prepare and display modal error
				$("#errorModalHeader").text("Error:" + error.status);
				$("#errorModalDetail").text("Message:" + error.responseJSON.message);
				$("#alertModal").modal("show");
			}
		});
	}

});