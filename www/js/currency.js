var docurrency = function(){
    console.log("GETTING CURRENCY");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let currency = JSON.parse(this.responseText);
            console.log(currency);
            buildcurrency(currency);
        }
    };
     url = 'https://api.exchangeratesapi.io/latest?base=USD'
        
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    const formValue = document.getElementById('loc');
    formValue.classList.add('hide');

    let workspace = document.getElementById("content");
    workspace.innerHTML = "";

    let weather_content = document.getElementById("weather-content");
    weather_content.innerHTML = " ";
    weather_content.classList.add('hide');

    let map_content = document.getElementById("map-content");
    map_content.innerHTML = " ";
    map_content.classList.add('hide');

    let city_name = document.getElementById("city-name");
    city_name.innerHTML = " ";
    city_name.classList.remove('hide');

    let currency_content = document.getElementById("currency-content");
    currency_content.innerHTML = " ";
    currency_content.classList.remove('hide');


    function buildcurrency(currency){
        
        var h2 = document.createElement("h2");
        h2.style.fontFamily = "Abril Fatface";
        h2.style.fontSize = "40px";
        h2.style.fontWeight = "200";
        h2.style.textAlign = "center";
    
        var name1 = document.createTextNode('CURRENCY RATES PER 1.00 US DOLLAR');
        h2.appendChild(name1);
        h2.appendChild(document.createElement("br"));
        currency_content.appendChild(h2);    
    
    var timestamp = ["AUD", 
                    "BGN", 
                    "CAD", 
                    "DKK", 
                    "EUR", 
                    "GBP", 
                    "HKD", 
                    "IDR", 
                    "JPY",
                    "KRW", 
                    "MXN", 
                    "NZD", 
                    "PHP", 
                    "RON", 
                    "SGD",
                    "THB", 
                    "USD", 
                    "ZAR"];
    
    var value =[currency['rates']['AUD'],
                currency['rates']['BGN'],
                currency['rates']['CAD'],
                currency['rates']['DKK'],
                currency['rates']['EUR'],
                currency['rates']['GBP'],
                currency['rates']['HKD'],
                currency['rates']['IDR'],
                currency['rates']['JPY'],
                currency['rates']['KRW'],
                currency['rates']['MXN'],
                currency['rates']['NZD'],
                currency['rates']['PHP'],
                currency['rates']['RON'],
                currency['rates']['SGD'],
                currency['rates']['THB'],
                currency['rates']['USD'],
                currency['rates']['ZAR'],
                ];
    
      var items = [timestamp, value]; 
    
      var table = document.createElement('TABLE');
      table.style.margin= "auto";
      var tbody= document.createElement('TBODY');  
      tbody.style.fontFamily = "Lato";
      tbody.style.fontSize = "18px";
      tbody.style.fontWeight = "bold";
      tbody.style.textAlign = "center";
      tbody.style.width = "px";
      var tr = document.createElement('TR');
        
    
      table.appendChild(tbody);
    
      //create header
      tbody.appendChild(tr);
    
      var heading = ["Country", "Rate"];
    
        for (var col = 0; col<heading.length; col++)
        {
          var th = document.createElement('TH');
          th.width = '75';
          th.appendChild(document.createTextNode(heading[col]));
          tr.appendChild(th);
        }
    
    
    
      for (var f=0; f<timestamp.length; f++)
      {
       var tr = document.createElement('TR'); 
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
                td1.appendChild(document.createTextNode(timestamp[f]));
                td2.appendChild(document.createTextNode(value[f]));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
       }
    
        currency_content.appendChild(table);
    }
    


}




    //TODO : CURRENCY DATA IS IN JSON OBJECT currency
    //All you need to do is build it into content.

    




