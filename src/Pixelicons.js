import React from "react";

export default function Pixelicons(props) {
const codeMapping = {
    "01d": "01d-pixel.png",
    "01n": "01d-pixel.png",
    "02d": "02d-pixel.png",
    "02n": "02d-pixel.png",
    "03d": "03d-pixel.png",
    "03n": "03d-pixel.png",
    "04d": "04d-pixel.png",
    "04n": "04d-pixel.png",
    "09d": "09d-pixel.png",
    "09n": "09d-pixel.png",
    "10d": "10d-pixel.png",
    "10n": "10d-pixel.png",
    "11d": "11d-pixel.png",
    "11n": "11d-pixel.png",
    "13d": "13d-pixel.png",
    "13n": "13d-pixel.png",
    "50d": "50d-pixel.png",
    "50n": "50d-pixel.png"
};
let icon = codeMapping[props.code];
console.log(icon);

return (
    //<Pixelicons code={props.data.icon} alt={props.data.description} />
    <img src={process.env.PUBLIC_URL + `/${icon}`} alt="img-desc" />
);
}