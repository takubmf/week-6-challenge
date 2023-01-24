    var button = document.getElementById("search-button");
    var currentCity = document.getElementById('city-name');
    var currentPic = document.getElementById("current-pic");
    var currentTemp = document.getElementById("temperature");
    var currentHumidity = document.getElementById("humidity");
    var currentWind = document.getElementById("wind-speed");
    var currentUV = document.getElementById("UV-index");
    var history = document.getElementById("history");
    const apikey = '466a81530d08ee46c7a3eab64c0d9aee';
    var searchHistory = JSON.parse(localStorage.getItem("search"));
    let storage = localStorage.setItem('city', JSON.stringify (userInput));
    var userInput = document.querySelector("#city-input").value.trim();


    button.addEventListener("click", (userInput,) => {
          if (userInput !== "") {
              //  history = storage.innerHTML;
                var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ userInput +'&units=imperial&appid=' + apikey;
                fetch(url)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    const date = moment().format('l');
                    currentCity.innerHTML = userInput + " " + date;                    
                    currentTemp.innerHTML = "Temperature: " + data.main.temp + " &#176F";
                    currentHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
                    currentWind.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";
                    //sets picture for weather
                   /* let weatherPic = data.weather[0].icon;
                        currentPic.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                        currentPic.setAttribute("alt",response.data.weather[0].description);*/
                })};
        });
 /*           //retrieves longitude and latitude for later URL request
        let lat = response.data.coord.lat;
        let lon = response.data.coord.lon;
        let UVQueryURL = 'api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=466a81530d08ee46c7a3eab64c0d9aee' 

    .catch(err => console.error(err));
 */