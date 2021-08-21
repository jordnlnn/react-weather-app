import React from "react";
import ReactDOM from "react-dom";

import Search from "./search";
import Description from "./city-date-desc";
import MainTempDisplay from "./main-temp-display";
import HumidityWindDisplay from "./humidity-wind-display";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Search />

          <Description />

          <MainTempDisplay />

          <HumidityWindDisplay />
        </div>
      </div>
      <footer>
        coded by jordan goldtooth
        <br />
        hosted on{" "}
        <a
          href="https://elated-bassi-f1cf83.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        <br />
        source code on{" "}
        <a
          href="https://github.com/jordnlnn/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);