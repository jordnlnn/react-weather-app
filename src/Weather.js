import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        })
      
    }

if (weatherData.ready) {

  
    return (
        <div className="Weather">
            <form>
             <div className="row">
                 <div className="col-9">
                   <input 
                    className="form-control"
                    id="input-box"
                    type="search"
                    placeholder="Enter a city..."
                    autoFocus="on"
                   ></input>
                  </div>
             <div className="col-3">
                <input className=" w-100" id="submit-btn" type="submit" value="Search"></input>
             </div>
                </div>
            </form>
      
      
             <h1 id="main-city">{weatherData.city}</h1>
                    <ul>
                      <li>{weatherData.date}</li>
                      <li className="text-capitalize">{weatherData.description}</li>
                    </ul>
               

            <div className="row mt-3">
                <div className="col-6">
                    <img
                       id="main-weather-icon"
                       alt={weatherData.description}
                       src={weatherData.iconUrl}
                     />
                  <span id="main-temp">{Math.round(weatherData.temperature)}</span>

                 <span id="units">°C | °F</span>
                </div>

                <div className="col-6">
                    <ul>
                      <li>Humidity: {weatherData.humidity}</li>
                      <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>

                
            </div>

        </div>
    );
} else {
    let apiKey = `974867647183f192d10e0478c4341263`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Calculating Weather...";
}
}