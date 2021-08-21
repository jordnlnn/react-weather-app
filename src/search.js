import React, { useState } from "react";
import axios from "axios";

export default function Search() {
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
    <div className="Search col-12">
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
    </div>
  );
}