import React from "react";

import cloudy from "../images/cloudy.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";
import sun from "../images/sun.png";

const View = (props) => {
  const { err, city, temp, weatherdescription, weather } = props;

  const showCityOrError = err
    ? `${city} <-- Unfortunately this is not the city we have in our database :/`
    : `${city}`;

  const showGradesOrNothing = err || err === null ? "" : `${temp}°C`;

  const showSun = temp >= 23 ? sun : null;
  const showRain = weather === "Rain" ? rain : null;
  const showClouds = weather === "Clouds" ? cloudy : null;
  const showSnow = weather === "Snow" ? snow : null;

  return (
    <>
      <div className="info">
        {err || err === null ? null : (
          <img
            className="info__image"
            src={showSun || showRain || showClouds || showSnow}
            alt="asd"
          />
        )}
        <h1 className="info__temp">{showGradesOrNothing}</h1>
        <h3 className="info__weather-description">{weatherdescription}</h3>
        <h4 className="info__city">{showCityOrError}</h4>
      </div>
    </>
  );
};

export default View;
