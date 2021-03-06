$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The weather report... " + "right now in Chicago, it is " + data.currently.summary 
    + ". The temperature is " + data.currently.temperature + "°F, but it feels like "
    + data.currently.apparentTemperature + " °F. <p> <p> Over the next 3 days, it will be approximately " +  data.daily.data[1].apparentTemperatureMax 
    + " °F, then " + data.daily.data[2].apparentTemperatureMax + " °F, and then " + data.daily.data[3].apparentTemperatureMax 
    + " °F.</p> </p>"  ;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});