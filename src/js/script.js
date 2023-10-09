'use strict'

const weatherBox = document.querySelector('.weather');

const getWeatherAPI = async function (){

    const URL_API = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

    try {
        const response =  await fetch(URL_API);
        const weatherData = await response.json();
        getWeather(weatherData);

    }catch (error){
        console.log(error);
    }
};

if (weatherBox){
    getWeatherAPI();
}

const getWeather = function (data){

    const city = data.name;
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;
    const icon = data.weather[0].icon;

    const weatherPattern = `<div class="weather-header">
            <p class="weather-city">${city}</p>
            <div class="weather-icon">
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon">
            </div>
        </div>
        <ul class="weather-param">
            <li class="weather-item">Температура: ${temp}</li>
            <li class="weather-item">Тиск: ${pressure} </li>
            <li class="weather-item">Вологість: ${humidity}</li>
            <li class="weather-item">Швидкість вітру: ${speed} </li>
            <li class="weather-item">Напрямок у градусах: ${deg} </li>
            <li class="weather-item">Опис:${description} </li>
        </ul>`

    weatherBox.innerHTML = weatherPattern;
};