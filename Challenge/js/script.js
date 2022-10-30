

function init() {
    const input = document.getElementById("city-input");
    const search = document.getElementById("search-button");
    const name = document.getElementById("city-name");
    const currentPic = document.getElementById("current-pic");
    const currentTemp = document.getElementById("temperature");
    const currentHumidity = document.getElementById("humidity");4
    const currentWind = document.getElementById("wind-speed");
    const currentUV = document.getElementById("UV-index");
    const history = document.getElementById("history");
    const apikey = '466a81530d08ee46c7a3eab64c0d9aee';
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=imperial&appid=466a81530d08ee46c7a3eab64c0d9aee'
    
    fetch(url)
    .then(response => response.json())
    .then(response =>{
        console.log(response);
        const date = moment().format('L');
        console.log(date)
        
    });
    .catch(err => console.error(err));

}
