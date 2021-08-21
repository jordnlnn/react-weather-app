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
                <input
                    id="input-box"
                    type="search"
                    placeholder="Enter a city..."
                    onChange={updateCity}
                ></input>
                <input id="submit-btn" type="submit" value="Search"></input>
            </form>
              <p>{searchResult}</p>
      
      
             <h1>New York</h1>
                    <ul>
                      <li>Tuesday 10:00</li>
                      <li>Cloudy</li>
                    </ul>
               

            <div className="row">
                <div className="col-6">
                    <img
                       id="main-weather-icon"
                       alt="main weather icon"
                       src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                     />
                  <p>19
                  <span>°C | °F</span>
                  </p>
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