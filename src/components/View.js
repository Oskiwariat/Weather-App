import React from "react";

import cloudy from "../images/cloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sun from "../images/sun.png";

const View = (props) => {
  const { err, city, temp, weatherdescription, weather } = props;

  const showGradesOrNothing = err || err === null ? "" : `${temp.toFixed(0)}°C`;

  const showSun = temp >= 23 ? sun : null;
  const showRain = weather === "Rain" ? rain : null;
  const showClouds = weather === "Clouds" ? cloudy : null;
  const showSnow = weather === "Snow" ? snow : null;
  const showSky = weather === "Clear" ? cloudy : null;

  const showRightImage =
    showSun || showRain || showClouds || showSnow || showSky;

  const date = new Date().toUTCString();

  return (
    <>
      {err || err === null ? null : (
        <img className="weather__image" src={cloudy} alt="weatherimage" />
      )}
      {err || err === null ? null : (
        <div className="info">
          <h1 className="info__temp">{showGradesOrNothing}</h1>
          <h4 className="info__city">{city}</h4>
          <h3 className="info__weather-description">{weatherdescription}</h3>
        </div>
      )}
      {err || err === null ? null : <h3 className="weather__date">{date}</h3>}
      {err ? (
        <h3 className="weather__message">
          {" "}
          {city} --- Unfortunately this is not the city we have in our database
          :/
        </h3>
      ) : null}
    </>
  );
};

export default View;
