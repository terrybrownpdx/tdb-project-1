$(document).ready(function () {
    var clientID = "6ef6b8bcd6msh049e9784b355cf7p1fd186jsn5da7453e823d";
    var queryURL = "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation";


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "best-booking-com-hotel.p.rapidapi.com",
            "x-rapidapi-key": "6ef6b8bcd6msh049e9784b355cf7p1fd186jsn5da7453e823d"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})