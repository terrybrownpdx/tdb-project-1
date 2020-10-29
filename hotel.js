$(document).ready(function () {
  var clientID = "6ef6b8bcd6msh049e9784b355cf7p1fd186jsn5da7453e823d";
  var queryURL =
    "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation";

  function searchHotels(city, Country) {
    if (city.length < 1) {    
      $("#cityModal").modal("show");
    }

    if (Country.length < 1) {
      $("#countryModal").modal("show");
    }
  
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=" + city + "&countryName=" + Country,
      method: "GET",
      headers: {
        "x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
        "x-rapidapi-key": "e1bd599768msh95205a794692e24p104f6cjsn21629139eaec",
      },
    };
    $.ajax(settings).then(function (response) {
      console.log(response);
      console.log(queryURL);

      $("#event-info").empty();


      var name = $("<div>");
      name.text("Hotel: " + response.name);
      var link = $("<div>");
      link.text("website " + response.link);
      var rating = $("<div>");
      rating.text("Rating " + response.rating);
      var price = $("<div>");
      price.text("price " + response.price);
      $("#event-info").append(name, link, rating, price);

    });
  }

  // Event handler for user clicking the select-artist button
  $("#select-event").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var city = $("#city-input").val().trim();
    var Country = $("#country-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchHotels(city, Country);
  });
});
