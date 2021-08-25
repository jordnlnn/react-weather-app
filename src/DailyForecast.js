import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";


export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
     setForecast(response.data.daily);
     setLoaded(true);
  }

  if (loaded){
    return (
        <div className="DailyForecast">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                     <div className="col" key={index}>
                       <WeatherForecastDay data={dailyForecast} />
                       </div>
                        );
                              }
              })}
        </div>
        </div>
    );
  } else {
    let apiKey = `974867647183f192d10e0478c4341263`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return (null);
  }
}