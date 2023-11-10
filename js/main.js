var search = document.querySelector('.search');
var country = document.querySelector('.country');
var city = document.querySelector('.city');
var time = document.querySelector('.time');
var eye = document.querySelector('.eye');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var tempurater = document.querySelector('.tempurater');

async function changeWeather() {
    let capitalSearch = search.value.trim();
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=fc730cbdda10d67a07193fc7576c3223`;
    let data = await fetch(urlApi).then(res => res.json());
    if (data.cod === 200) {
        country.innerText = data.sys.country
        eye.innerText = data.visibility + '(m)'
        city.innerText = data.name
        wind.innerText = data.wind.deg + '(m/s)'
        tempurater.innerText = Math.floor(((data.main.temp - 273.15)))
        time.innerText = new Date().toLocaleString('vi')
        humidity.innerText = data.main.humidity + '(%)'
    } else {
        console.log("error")
    }
}
search.addEventListener('keypress', function(event) {
    if (event.code === 'Enter') {
        changeWeather()
    }
})
