import React from "react";
import Pixelicons from "./Pixelicons";

export default function WeatherForecastDay(props) {
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
        }
return (
    <div>
    <div className="WeatherForecastDay">{day()}</div>
    <Pixelicons code={props.data.weather[0].icon} />
    <div className="ForecastTemperatures">
        <span className="ForecastHigh"><strong>{maxTemperature()}°</strong></span> 
        {" "}
        <span className="ForecastLow">{minTemperature()}°</span>
</div>
</div>
)
}