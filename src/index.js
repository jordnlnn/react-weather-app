import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      
         <Weather />
         
      <footer>
        coded by jordan goldtooth
        <br />
        hosted on{" "}
        <a
          href="https://youthful-neumann-4996fb.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        <br />
        open-source code on{" "}
        <a
          href="https://github.com/jordnlnn/react-weather-app"
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