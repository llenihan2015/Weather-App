var dohome = function(){

    let workspace = document.getElementById("content");
    workspace.innerHTML = " ";
    
    let weather_content = document.getElementById("weather-content");
    weather_content.innerHTML = " ";

    let map_content = document.getElementById("map-content");
    map_content.innerHTML = " ";

    let currency_content = document.getElementById("currency-content");
	currency_content.innerHTML = " ";
    
    let city_name = document.getElementById("city-name");
	city_name.innerHTML = " ";
    
    const formValue = document.getElementById('loc');
    formValue.classList.add('hide');

    let h1 = document.createElement('h1');
    let text = document.createTextNode("Welcome to my FAU APP");
    h1.appendChild(text);
    workspace.append(h1);
    let h3 = document.createElement('h3');
    text = document.createTextNode("Laussanne Margaux Lenihan : Z23344301");
    h3.appendChild(text);
    workspace.appendChild(h3);
}

