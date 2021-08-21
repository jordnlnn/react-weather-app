import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    let [city, setCity] = useState("");
    let [searchResult, setSearchResult] = useState("");
  
    function showTemperature(response) {
      setSearchResult(
        `It is currently ${Math.round(response.data.main.temp)}°C in ${city}`
      );
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = `974867647183f192d10e0478c4341263`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(url).then(showTemperature);
      //alert(`Searching for ${city}`);
    }
  
    function updateCity(event) {
      event.preventDefault();
      setCity(event.target.value);
    }

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
                    onChange={updateCity}
                   ></input>
                  </div>
             <div className="col-3">
                <input className=" w-100" id="submit-btn" type="submit" value="Search"></input>
             </div>
                </div>
            </form>
            <p>{searchResult}</p>
      
      
             <h1 id="main-city">New York</h1>
                    <ul>
                      <li>Tuesday 10:00</li>
                      <li>Cloudy</li>
                    </ul>
               

            <div className="row mt-3">
                <div className="col-6">
                    <img
                       id="main-weather-icon"
                       alt="main weather icon"
                       src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                     />
                  <span id="main-temp">19</span>

                 <span id="units">°C | °F</span>
                </div>

                <div className="col-6">
                    <ul>
                      <li>Humidity: 80%</li>
                      <li>Wind: 10 km/h</li>
                    </ul>
                </div>

                
            </div>

        </div>
    )
}