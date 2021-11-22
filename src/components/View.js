import React from "react";

const View = (props) => {
  const { err, city, temp, weather } = props;

  const showCityOrError = err
    ? `${city} <-- Unfortunately this is not the city we have in our database :/`
    : `${city}`;

  const showGradesOrNothing = err || err === null ? "" : `${temp}°C`;

  return (
    <>
      <div className="info">
        {/* <img src="../images/cloud.png" className="info__image" alt="obrazek" /> */}
        <h1 className="info__temp">{showGradesOrNothing}</h1>
        <h3 className="info__weather">{weather}</h3>
        <h4 className="info__city">{showCityOrError}</h4>
      </div>
    </>
  );
};

export default View;
