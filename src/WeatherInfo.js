import React from "react";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
<h1 id="main-city">{props.data.city}</h1>
                    <ul>
                      <li><FormattedDate date={props.data.date}/></li>
                      <li className="text-capitalize">{props.data.description}</li>
                    </ul>
               

            <div className="row mt-3">
                <div className="col-2">
               
                    <img
                       id="main-weather-icon"
                       alt={props.data.description}
                       src={props.data.iconUrl}
                     />
                     </div>    
                  <div className="col-6">
                      <UnitConversion celsius={props.data.temperature} />
                   </div>
                             
               

                <div className="col-4">
                    <ul>
                      <li>Humidity: {props.data.humidity}</li>
                      <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>

                
            </div>
</div>
    )
}