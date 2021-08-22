import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        }); 
    }


function search() {
    let apiKey = `974867647183f192d10e0478c4341263`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
}
function handleSubmit(event) {
    event.preventDefault();
   search();
}
function handleCityChange(event) {
    setCity(event.target.value);
}

if (weatherData.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
             <div className="row">
                 <div className="col-9">
                   <input 
                    className="form-control"
                    id="input-box"
                    type="search"
                    placeholder="Enter a city..."
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCityChange}
                   ></input>
                  </div>
             <div className="col-3">
                <input className=" w-100" id="submit-btn" type="submit" value="Search"></input>
             </div>
                </div>
            </form>
            
        <WeatherInfo data={weatherData} />

        </div>
    );
} else {
    search();
    return "Gathering Weather Data...";
}
}