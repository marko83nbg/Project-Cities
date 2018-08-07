$(document).ready(function(){
 
		$.ajax({
		  url: "http://api.openweathermap.org/data/2.5/group?id=6455259,524901,2950158,3169070,2643743&units=metric&appid=1e824174137c80d29a82a9bfea8cfae9",
		  dataType: "json"
	  })
		.done(function(data){
			var cityList = getCities(data);
			showCities(cityList);
		})
		.fail(function(jqXHR){
			$(".conteiner").html(jqXHR.toSource());
		});
	
});

//funkcija koja parsira podatke dobijene preko AJAX-a
function getCities(data){
	var cities =[];
	
	for (var i=0; i<data.list.length; i++) {
		var cityData = data.list[i];
		
		var city = new Object();
		city.ime = cityData.name;
		city.temperatura = cityData.main['temp'];
		city.vetar = cityData.wind.speed;
		
		cities[i]=city;
	}
	return cities;
};

//funkcija za ispis podataka
function showCities(cities) {
	for( i = 0; i< cities.length; i++){
		var grad = cities[i];	
		$(".table tbody").append("<tr><td>" + grad.ime + "</td>"+
					     "<td>" + Math.round(grad.temperatura) + "&deg;C" + "</td>"+
					     "<td>" + grad.vetar + " m/s" + "</td></tr>");	
	}
};
		
