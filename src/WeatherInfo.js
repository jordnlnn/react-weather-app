import React from "react";
import FormattedDate from "./FormattedDate";
import UnitConversion from "./UnitConversion";
import Pixelicons from "./Pixelicons";

export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">
<h1 id="main-city">{props.data.city}</h1>
                    <ul>
                      <li><FormattedDate date={props.data.date}/></li>
                      <li className="text-capitalize">{props.data.description}</li>
                    </ul>
               

            <div className="row mt-3">
                <div className="col-2 col-md-6">
                   <Pixelicons code={props.data.icon} alt={props.data.description} />
                     </div>    
                  <div className="col-5 col-md-6">
                      <UnitConversion celsius={props.data.temperature} />
                   </div>
                             
               

                <div className="col-5 col-md-12" id="humid-wind-desc">
                    <ul>
                      <li></li>
                      <li>Humidity: {props.data.humidity}</li>
                      <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>

                
            </div>
</div>
    )
}