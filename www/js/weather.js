var doweather = function() { //This function should be used to build your weather information in the content element
	//TODO : ADD WEATHER CONTENT

	let workspace = document.getElementById("content");
	workspace.innerHTML = " ";

	let weather_content = document.getElementById("weather-content");
	weather_content.innerHTML = " ";
	weather_content.classList.remove('hide');

	let map_content = document.getElementById("map-content");
	map_content.innerHTML = " ";
	map_content.classList.add('hide');

	
	let city_name = document.getElementById("city-name");
	city_name.innerHTML = " ";
	city_name.classList.add('hide');
	
	let currency_content = document.getElementById("currency-content");
	currency_content.innerHTML = " ";
    currency_content.classList.add('hide');

	const formValue = document.getElementById('loc');
	const key ='b4354fdfa8e6e42d96861d10c448094e';

	var inputValue = document.querySelector('#location');
	//var newSearch = document.querySelector('#new');
	var searchBtn = document.querySelector('#search');
	var arrowBtn = document.querySelector('#arrow');

	formValue.classList.remove('hide');


	searchBtn.addEventListener('click', startSearch);
	//newSearch.addEventListener('click',startAgain);
	arrowBtn.addEventListener('click', asklocation);

	function startSearch(){

		//hide the div that holds the search bar and show the div where results are stores
		formValue.classList.add('hide');
	
		//checking if the input is a city, state or zip code
		if (Number.isInteger(+inputValue.value))
		{
		fetch('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&appid='+key)
		.then(response => response.json())
		.then(data => {    
			results(data);  
		})        
		.catch(err=> alert("An error has occurred!"));
		}//if
		else{
			fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+key)
			.then(response => response.json())
			.then(data => {
				results(data);    
			})        
			.catch(err=> alert("An error has occurred!"));
		}//else
	
	}//startSearch function
	
	function asklocation(){
	var long;
	var lati;
	navigator.geolocation.getCurrentPosition(position => {
		long = position.coords.longitude;
		lati = position.coords.latitude;
		
		fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&appid='+key)
		.then(response => response.json())
			.then(data => {
				formValue.classList.add('hide');
				results(data);  
			})        
			.catch(err=> alert("An error has occurred!"))
	})//position
		   
	}//asklocation

	
function results(data){

	weather_content.innerHTML = " ";
	city_name.classList.add('hide');

	
	var h2 = document.createElement("h2");
	h2.style.fontFamily = "Abril Fatface";
	h2.style.fontSize = "40px";
	h2.style.fontWeight = "200";
	h2.style.textAlign = "center";

	var name = document.createTextNode('Weather in ' + data['name']+', ' + data['sys']['country']);
	h2.appendChild(name);
	h2.appendChild(document.createElement("br"));
	weather_content.appendChild(h2);

	var temp = document.createTextNode(Math.round(((data['main']['temp']-273.15)*1.8)+32) + '°F');
	h2.append(temp);
	h2.appendChild(document.createElement("br"));
	weather_content.appendChild(h2);

	var h6 = document.createElement("h6");
	h6.style.fontFamily = "Poppins";
	h6.style.fontSize = "25px";
	h6.style.fontWeight = "bold";
	h6.style.textAlign = "center";

	var wind = document.createTextNode("Wind: "+ data['wind']['speed'] + ' m/h');
	h6.append(wind);
	h6.appendChild(document.createElement("br"));
	weather_content.appendChild(h6);

	var cloud = document.createTextNode("Cloudiness: "+data['weather'][0]['description']);
	h6.append(cloud);
	h6.appendChild(document.createElement("br"));
	weather_content.appendChild(h6);

	var press = document.createTextNode("Pressure: " + data['main']['pressure'] + ' hpa');
	h6.append(press);
	h6.appendChild(document.createElement("br"));
	weather_content.appendChild(h6);

	var hum = document.createTextNode("Humidity: " + data['main']['humidity'] +'%');
	h6.append(hum);
	h6.appendChild(document.createElement("br"));
	weather_content.appendChild(h6);

	var geocoords = document.createTextNode("Geo Coordinates: "+'['+ data['coord']['lat'] + ', '+data['coord']['lon']+']');
	h6.append(geocoords);
	h6.appendChild(document.createElement("br"));
	weather_content.appendChild(h6);

}
	
}



