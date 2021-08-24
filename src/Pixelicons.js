import React from "react";

export default function Pixelicons(props) {
const codeMapping = {
    "01d": "clear-sky.png",
    "01n": "clear-sky-night.png",
    "02d": "few-clouds.png",
    "02n": "few-clouds-night.png",
    "03d": "broken-clouds.png",
    "03n": "broken-clouds.png",
    "04d": "broken-clouds.png",
    "04n": "broken-clouds.png",
    "09d": "shower-rain.png",
    "09n": "shower-rain.png",
    "10d": "shower-rain.png",
    "10n": "shower-rain.png",
    "11d": "thunderstorm.png",
    "11n": "thunderstorm.png",
    "13d": "snow.png",
    "13n": "snow.png",
    "50d": "mist.png",
    "50n": "mist.png"
};
let icon = codeMapping[props.code];

return (
    <img src={`/${icon}`} alt="img-desc" />
);
}