var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=97b12ec99d8b7eaba11431374cadf85f';

var kelvinToF = function(kelvin){
  return Math.round((kelvin - 273.15) * 1.8 + 32) + '˚F'
};

module.exports= function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    })
}
