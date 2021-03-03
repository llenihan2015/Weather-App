var domap = function() { //This function should be used to build the map in the content element
    let workspace = document.getElementById("content");
	workspace.innerHTML = " ";

    let weather_content = document.getElementById("weather-content");
    weather_content.innerHTML = " ";
    weather_content.classList.add('hide');
    
    let map_content = document.getElementById("map-content");
    map_content.innerHTML = " ";
    map_content.classList.remove('hide');

    let city_name = document.getElementById("city-name");
    city_name.innerHTML = " ";
    city_name.classList.remove('hide');

    let currency_content = document.getElementById("currency-content");
	currency_content.innerHTML = " ";
    currency_content.classList.add('hide');

	const formValue = document.getElementById('loc');
	const key ='b4354fdfa8e6e42d96861d10c448094e';

	var inputValue = document.querySelector('#location');
	var searchBtn = document.querySelector('#search');
    var arrowBtn = document.querySelector('#arrow');


	formValue.classList.remove('hide');

	searchBtn.addEventListener('click', startSearch);
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
            result(data);
        })        
        .catch(err=> alert("An error has occurred!"));
        }//if
        else{
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid='+key)
            .then(response => response.json())
            .then(data => {
                result(data);
            })        
            .catch(err=> alert("An error has occurred!"));
        }//else
    
}//startSearch function  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7lpIDne7SLXlOqdLStzb4SS3CxSPMQZI"></script>

function asklocation(){
    
    let long;
    let lati;
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lati = position.coords.latitude;

        
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&appid='+key)
        .then(response => response.json())
            .then(data => {
				formValue.classList.add('hide');
                result(data);
            })        
            .catch(err=> alert("An error has occurred!"))
    })//position
           
}//asklocation

//function startAgain(){
	//formValue.classList.remove('hide');
	
//}

function result(data){

    city_name.innerHTML = " ";

    var h2 = document.createElement("h2");
	h2.style.fontFamily = "Abril Fatface";
	h2.style.fontSize = "40px";
	h2.style.fontWeight = "200";
	h2.style.textAlign = "center";

	var city = document.createTextNode(data['name']+', ' + data['sys']['country']);
	h2.appendChild(city);
	h2.appendChild(document.createElement("br"));
    city_name.appendChild(h2);
    
    var lat  = data['coord']['lat'];
    var lang = data['coord']['lon'];
    //Google Maps
    var myLatlng = new google.maps.LatLng(lat, lang);
    var mapOptions = {
        zoom: 15,
        center: myLatlng
        }
    var map = new google.maps.Map(document.getElementById('map-content'), mapOptions);
    var marker = new google.maps.Marker({
    position: myLatlng,
     map: map
    })   
}

}

