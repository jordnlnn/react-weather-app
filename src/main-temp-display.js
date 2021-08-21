import React from "react";

export default function MainTempDisplay() {
  return (
    <div className="MainTempDisplay col-6">
      <ul>
        <li>
          <img
            id="main-weather-icon"
            alt="main weather icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          />
        </li>
        <li id="main-temp">19</li>
        <li id="degrees">°C | °F</li>
      </ul>
    </div>
  );
}