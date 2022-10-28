/*const search = document.querySelector('#searchBtn');

search.addEventListener('click', () =>{
    var city = document.getElementById('#searchCity');

});*/
apikey = '466a81530d08ee46c7a3eab64c0d9aee';

function init() {

    var city = document.querySelector('.city');
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=466a81530d08ee46c7a3eab64c0d9aee'
    
    fetch(url)
    .then(response => response.json())
    .then(response =>{
        moment().format('L');
        city.temperature
        city.humidity
        city.wind.speed
        
    });
    .catch(err => console.error(err));

}
